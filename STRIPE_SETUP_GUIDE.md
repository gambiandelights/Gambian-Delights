# Stripe Payment Setup Guide for Gambian Delights

## Overview
This guide will help you set up Stripe payments for your website so customers can pay the 50% deposit automatically when placing orders.

## Step 1: Create a Stripe Account

1. Go to [https://stripe.com](https://stripe.com)
2. Click "Sign up" and create an account
3. Complete the business verification process
4. Add your business bank account details

## Step 2: Get Your Stripe API Keys

1. Log into your Stripe Dashboard
2. Go to **Developers** → **API keys**
3. You'll see two keys:
   - **Publishable key** (starts with `pk_`) - This is safe to use in frontend code
   - **Secret key** (starts with `sk_`) - This must be kept secret and only used in backend

## Step 3: Update Your Website Code

### In `order.html` and `large-event.html`:

Replace `YOUR_STRIPE_PUBLISHABLE_KEY` with your actual Stripe publishable key:

```javascript
const stripe = Stripe('pk_test_...'); // Replace with your publishable key
```

## Step 4: Deploy to Netlify (Recommended)

### Option A: Deploy via Netlify

1. Create a [Netlify account](https://www.netlify.com) (free)
2. Install Netlify CLI: `npm install -g netlify-cli`
3. In your project folder, run: `netlify login`
4. Run: `netlify init` and follow the prompts
5. Set environment variables in Netlify Dashboard:
   - Go to **Site settings** → **Environment variables**
   - Add:
     - `STRIPE_SECRET_KEY` = your Stripe secret key (starts with `sk_`)
     - `STRIPE_WEBHOOK_SECRET` = your webhook secret (get this from Step 5)
     - `URL` = your website URL (e.g., `https://your-site.netlify.app`)

6. Deploy: `netlify deploy --prod`

### Option B: Deploy via GitHub

1. Push your code to GitHub
2. Connect your GitHub repo to Netlify
3. Set environment variables in Netlify Dashboard (as above)
4. Netlify will automatically deploy on every push

## Step 5: Set Up Stripe Webhook

1. In Stripe Dashboard, go to **Developers** → **Webhooks**
2. Click **Add endpoint**
3. Enter your webhook URL: `https://your-site.netlify.app/.netlify/functions/stripe-webhook`
4. Select events to listen for:
   - `checkout.session.completed`
5. Copy the **Signing secret** (starts with `whsec_`)
6. Add this as `STRIPE_WEBHOOK_SECRET` in Netlify environment variables

## Step 6: Test the Integration

### Test Mode:
1. Use test API keys (they start with `pk_test_` and `sk_test_`)
2. Use Stripe test card: `4242 4242 4242 4242`
3. Any future expiry date, any CVC
4. Test the full payment flow

### Live Mode:
1. Switch to live API keys (they start with `pk_live_` and `sk_live_`)
2. Update the code with live keys
3. Test with a real card (small amount first!)

## Step 7: Update Your Code for Production

Once testing is complete:

1. Replace test keys with live keys
2. Update webhook URL to production URL
3. Test one real transaction
4. Monitor Stripe Dashboard for payments

## Payment Flow

1. Customer fills out order form
2. Clicks "Submit Booking"
3. System calculates 50% deposit
4. Redirects to Stripe Checkout
5. Customer enters payment details
6. Payment is processed
7. Customer is redirected back to your site
8. Order is automatically sent to your email via Formspree
9. You receive email with order details and payment confirmation

## Important Notes

- **Deposit is 50%** of total order value
- **Remaining 50%** is due 3 days before the event
- All payments are in **NOK (Norwegian Kroner)**
- Stripe charges a fee (typically 1.4% + 1.25 kr per transaction in Norway)
- You'll receive payments in your Stripe account, then transfer to your bank account

## Support

- Stripe Documentation: [https://stripe.com/docs](https://stripe.com/docs)
- Stripe Support: Available in your Stripe Dashboard
- Netlify Documentation: [https://docs.netlify.com](https://docs.netlify.com)

## Alternative: Manual Payment Setup

If you prefer not to use Stripe initially, you can:
1. Keep the current system (Formspree only)
2. Manually send payment links via email
3. Use Vipps payment links (requires Vipps business account)
4. Use bank transfer instructions

The code includes a fallback that will still send orders to Formspree even if Stripe isn't configured.

