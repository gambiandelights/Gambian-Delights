# Netlify Environment Variables Setup

## Din Netlify Site URL
**https://tiny-semifreddo-7fbe9b.netlify.app/**

## Environment Variables du må legge til i Netlify

Gå til Netlify Dashboard → Site settings → Environment variables og legg til følgende:

### 1. STRIPE_SECRET_KEY
```
sk_test_51Sbi5yJzNl5yX8PmeIO8Hf4641W6YBH4bTCki622zIv0HxpwFYrKvxYrVQdeb3UTOE8IcEzjNEhubnG39lL97swE00KDYijxx4
```

### 2. SITE_URL
```
https://tiny-semifreddo-7fbe9b.netlify.app
```
**Viktig:** Ikke legg til `/` på slutten!
**Note:** `URL` er reservert i Netlify, så vi bruker `SITE_URL` i stedet!

### 3. STRIPE_WEBHOOK_SECRET (Etter at du har satt opp webhook)
```
whsec_... (du får denne fra Stripe etter å ha opprettet webhook)
```

## Steg-for-steg instruksjoner

1. **Gå til Netlify Dashboard:**
   - Logg inn på [app.netlify.com](https://app.netlify.com)
   - Klikk på din site: `tiny-semifreddo-7fbe9b`

2. **Legg til Environment Variables:**
   - Klikk på **"Site settings"** (øverst til høyre)
   - I venstre meny, klikk på **"Environment variables"**
   - Klikk **"Add a variable"**
   
3. **Legg til STRIPE_SECRET_KEY:**
   - **Key:** `STRIPE_SECRET_KEY`
   - **Value:** `sk_test_51Sbi5yJzNl5yX8PmeIO8Hf4641W6YBH4bTCki622zIv0HxpwFYrKvxYrVQdeb3UTOE8IcEzjNEhubnG39lL97swE00KDYijxx4`
   - **Scopes:** Velg "All scopes"
   - Klikk **"Save"**

4. **Legg til SITE_URL:**
   - Klikk **"Add a variable"** igjen
   - **Key:** `SITE_URL`
   - **Value:** `https://tiny-semifreddo-7fbe9b.netlify.app`
   - **Scopes:** Velg "All scopes"
   - Klikk **"Save"**

5. **Redeploy nettsiden:**
   - Gå til **"Deploys"** i venstre meny
   - Klikk på **"Trigger deploy"** → **"Clear cache and deploy site"**
   - Vent til deploy er ferdig (1-2 minutter)

## Test etter setup

1. Gå til: https://tiny-semifreddo-7fbe9b.netlify.app/order.html
2. Fyll ut en testbestilling
3. Bruk Stripe test-kort: `4242 4242 4242 4242`
4. Sjekk at betaling fungerer

## Stripe Webhook Setup (Valgfritt, men anbefalt)

1. Gå til [Stripe Dashboard](https://dashboard.stripe.com) → **Developers** → **Webhooks**
2. Klikk **"Add endpoint"**
3. **Endpoint URL:** `https://tiny-semifreddo-7fbe9b.netlify.app/.netlify/functions/stripe-webhook`
4. Velg event: `checkout.session.completed`
5. Klikk **"Add endpoint"**
6. Kopier **"Signing secret"** (starter med `whsec_`)
7. Legg til som environment variable i Netlify:
   - **Key:** `STRIPE_WEBHOOK_SECRET`
   - **Value:** Din webhook signing secret
8. Redeploy igjen

## Viktig!

- ✅ **Redeploy** nettsiden etter å ha lagt til environment variables
- ✅ Test med Stripe test-kort først
- ✅ Sjekk Functions logs i Netlify hvis noe ikke fungerer

