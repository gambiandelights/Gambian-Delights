// Simple Express server for creating Stripe Payment Links
// Deploy this to Render (free tier)

const express = require('express');
const Stripe = require('stripe');
const cors = require('cors');

const app = express();
app.use(cors({
  origin: ['https://gambiandelights.github.io', 'https://gambiandelights.netlify.app', 'http://localhost:3000'],
  credentials: true
}));
app.use(express.json());

// Check for required environment variables
if (!process.env.STRIPE_SECRET_KEY) {
  console.error('ERROR: STRIPE_SECRET_KEY environment variable is not set!');
  console.error('Please add STRIPE_SECRET_KEY in Render Dashboard → Environment');
  process.exit(1);
}

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2024-06-20',
});

// Health check
app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Stripe Payment Link API' });
});

// Create payment link endpoint
app.post('/api/create-payment', async (req, res) => {
  try {
    const { total, items, orderNumber } = req.body;

    // Validate input
    if (!total || total <= 0) {
      return res.status(400).json({ error: 'Invalid total amount' });
    }

    if (!items || items.length === 0) {
      return res.status(400).json({ error: 'No items provided' });
    }

    // Calculate deposit (50% of total)
    const deposit = Math.round(total * 0.5);

    // Create order description
    const orderDescription = items
      .map(item => `${item.name} × ${item.quantity}`)
      .join(', ');

    // Determine redirect URL based on order type
    const siteUrl = process.env.SITE_URL || 'https://gambiandelights.netlify.app';
    const redirectUrl = orderNumber && orderNumber.includes('LE-')
      ? `${siteUrl}/large-event.html?payment=success&order=${encodeURIComponent(orderNumber)}`
      : `${siteUrl}/order.html?payment=success&order=${encodeURIComponent(orderNumber)}`;

    // Create Stripe Payment Link
    const paymentLink = await stripe.paymentLinks.create({
      line_items: [
        {
          price_data: {
            currency: 'nok',
            product_data: {
              name: 'Depositum - Gambian Delights',
              description: `50% depositum for: ${orderDescription}`,
            },
            unit_amount: deposit * 100, // Stripe uses øre
          },
          quantity: 1,
        },
      ],
      after_completion: {
        type: 'redirect',
        redirect: {
          url: redirectUrl,
        },
      },
      metadata: {
        orderNumber: orderNumber || '',
        total: total.toString(),
        deposit: deposit.toString(),
      },
    });

    // Return payment link URL
    res.json({
      success: true,
      paymentLink: paymentLink.url,
      deposit: deposit,
      total: total,
    });
  } catch (error) {
    console.error('Error creating payment link:', error);
    res.status(500).json({
      error: 'Failed to create payment link',
      message: error.message,
    });
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`✅ Stripe initialized: ${process.env.STRIPE_SECRET_KEY ? 'Yes' : 'No'}`);
  console.log(`✅ Site URL: ${process.env.SITE_URL || 'https://gambiandelights.netlify.app'}`);
});

