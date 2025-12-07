# Quick Netlify Setup - Din Site er allerede deployet! 🎉

## Din Netlify Site
**URL:** https://tiny-semifreddo-7fbe9b.netlify.app/

## Hva du må gjøre nå (3 enkle steg)

### Steg 1: Legg til Environment Variables

**Alternativ 1: Direkte link (enklest!)**
- Gå direkte til: https://app.netlify.com/sites/tiny-semifreddo-7fbe9b/configuration/env
- Dette tar deg direkte til Environment Variables-siden!

**Alternativ 2: Via Dashboard**
1. Gå til [Netlify Dashboard](https://app.netlify.com)
2. Klikk på din site: **tiny-semifreddo-7fbe9b**
3. Se etter **"Site settings"** knapp eller **tannhjul-ikon** ⚙️ (øverst til høyre)
4. Klikk på den
5. I venstre meny, klikk på **"Environment variables"**
5. Klikk **"Add a variable"** og legg til:

   **Variable 1:**
   - **Key:** `STRIPE_SECRET_KEY`
   - **Value:** `sk_test_51Sbi5yJzNl5yX8PmeIO8Hf4641W6YBH4bTCki622zIv0HxpwFYrKvxYrVQdeb3UTOE8IcEzjNEhubnG39lL97swE00KDYijxx4`
   - **Scopes:** Velg "All scopes"
   - Klikk **"Save"**

   **Variable 2:**
   - Klikk **"Add a variable"** igjen
   - **Key:** `SITE_URL`
   - **Value:** `https://tiny-semifreddo-7fbe9b.netlify.app`
   - **Scopes:** Velg "All scopes"
   - Klikk **"Save"**
   
   **Note:** `URL` er reservert i Netlify, så vi bruker `SITE_URL` i stedet!

### Steg 2: Redeploy nettsiden

**Viktig!** Du må redeploy etter å ha lagt til environment variables:

1. I Netlify Dashboard, gå til **"Deploys"** (venstre meny)
2. Klikk på **"Trigger deploy"** (øverst til høyre)
3. Velg **"Clear cache and deploy site"**
4. Vent 1-2 minutter til deploy er ferdig

### Steg 3: Test betalingssystemet

1. Gå til: https://tiny-semifreddo-7fbe9b.netlify.app/order.html
2. Fyll ut en testbestilling
3. Når du klikker "Submit Booking", skal Stripe Checkout åpne seg
4. Bruk test-kort: `4242 4242 4242 4242`
   - Hvilken som helst fremtidig utløpsdato
   - Hvilket som helst CVC (f.eks. `123`)
5. Etter betaling skal du bli omdirigert tilbake og få en bekreftelse
6. Sjekk din e-post (`gambiandelights@gmail.com`) - du skal få en bestilling med "DEPOSIT PAID"

## Hvis noe ikke fungerer

### Sjekk Functions logs:
1. I Netlify Dashboard, gå til **"Functions"** (venstre meny)
2. Klikk på `create-checkout-session`
3. Se logs for feilmeldinger

### Vanlige problemer:

**Problem:** "Failed to create checkout session"
- **Løsning:** Sjekk at `STRIPE_SECRET_KEY` er lagt til riktig
- Sjekk at du har redeployet etter å ha lagt til environment variables

**Problem:** Betaling fungerer ikke
- **Løsning:** Åpne browser Developer Tools (F12) → Console tab
- Se etter feilmeldinger
- Sjekk at Stripe Publishable Key er riktig i koden (den er allerede satt)

**Problem:** Bestillinger kommer ikke i e-post
- **Løsning:** Sjekk spam-mappen
- Sjekk at Formspree-endpoint er riktig: `https://formspree.io/f/mrbnlnpe`

## Valgfritt: Set opp Stripe Webhook

For automatiske betalingsbekreftelser:

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

## Du er klar! 🚀

Etter disse 3 stegene skal betalingssystemet fungere perfekt!

