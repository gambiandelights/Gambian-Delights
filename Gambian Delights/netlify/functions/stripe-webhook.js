// Netlify Serverless Function for Stripe Webhooks
// This handles payment confirmations from Stripe
// Make sure to set STRIPE_WEBHOOK_SECRET in your Netlify environment variables

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event, context) => {
  const sig = event.headers['stripe-signature'];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let stripeEvent;

  try {
    stripeEvent = stripe.webhooks.constructEvent(event.body, sig, webhookSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return {
      statusCode: 400,
      body: JSON.stringify({ error: `Webhook Error: ${err.message}` })
    };
  }

  // Handle the event
  if (stripeEvent.type === 'checkout.session.completed') {
    const session = stripeEvent.data.object;
    
    // Payment was successful
    // You can send a confirmation email here or update your database
    console.log('Payment successful for order:', session.metadata.orderNumber);
    
    // Here you could:
    // 1. Send confirmation email to customer
    // 2. Update order status in database
    // 3. Send notification to business owner
    
    return {
      statusCode: 200,
      body: JSON.stringify({ received: true, orderNumber: session.metadata.orderNumber })
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ received: true })
  };
};

