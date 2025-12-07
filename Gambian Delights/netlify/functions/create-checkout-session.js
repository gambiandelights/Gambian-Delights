// Netlify Serverless Function for creating Stripe Checkout Sessions
// Make sure to set STRIPE_SECRET_KEY in your Netlify environment variables

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { orderNumber, amount, currency, customerEmail, customerName, orderDetails } = JSON.parse(event.body);

    // Validate required fields
    if (!amount || !customerEmail || !orderNumber) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' })
      };
    }

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: currency || 'nok',
            product_data: {
              name: `Deposit for Order ${orderNumber}`,
              description: `50% deposit for ${orderDetails?.eventName || 'your order'}`,
            },
            unit_amount: amount, // Amount in smallest currency unit (øre for NOK)
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      customer_email: customerEmail,
      metadata: {
        orderNumber: orderNumber,
        customerName: customerName || '',
        eventName: orderDetails?.eventName || '',
        eventDate: orderDetails?.eventDate || '',
        total: orderDetails?.total || 0,
        deposit: orderDetails?.deposit || 0,
        orderType: orderDetails?.orderType || 'regular',
      },
      // Determine redirect URL based on order type
      // Use SITE_URL instead of URL (URL is reserved in Netlify)
      const siteUrl = process.env.SITE_URL || process.env.URL || 'http://localhost:8888';
      success_url: `${siteUrl}/${orderDetails?.orderType === 'Large Event' ? 'large-event' : 'order'}.html?payment=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/${orderDetails?.orderType === 'Large Event' ? 'large-event' : 'order'}.html?payment=cancelled`,
      locale: 'no', // Norwegian locale
    });

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sessionId: session.id,
        url: session.url
      })
    };
  } catch (error) {
    console.error('Stripe error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Failed to create checkout session',
        message: error.message 
      })
    };
  }
};

