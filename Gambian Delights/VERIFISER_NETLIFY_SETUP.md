# Verifiser Netlify Setup - Alt ser bra ut! ✅

## Status nå:
✅ GitHub er koblet til Netlify!
✅ Nettsiden er deployet fra GitHub
✅ Auto publishing er aktivert
✅ URL: gambiandelights.netlify.app

---

## Viktig: Oppdater SITE_URL Environment Variable

Siden site-navnet har endret seg fra `tiny-semifreddo-7fbe9b` til `gambiandelights`, må du oppdatere `SITE_URL` environment variable!

### Steg 1: Oppdater SITE_URL

1. **Gå til Netlify Dashboard:**
   - https://app.netlify.com
   - Klikk på din site: **gambiandelights**

2. **Gå til Environment Variables:**
   - Klikk på "Site settings" → "Environment variables"
   - Eller gå direkte til: https://app.netlify.com/sites/gambiandelights/configuration/env

3. **Finn `SITE_URL` variabelen:**
   - Klikk på den for å redigere
   - Endre fra: `https://tiny-semifreddo-7fbe9b.netlify.app`
   - Til: `https://gambiandelights.netlify.app`
   - Klikk "Save"

4. **Redeploy:**
   - Gå til "Deploys"
   - Klikk "Trigger deploy" → "Clear cache and deploy site"
   - Eller gjør en liten endring på GitHub (det vil trigger automatisk deploy)

---

## Verifiser at alt fungerer

### Test 1: Hovedsiden
- Gå til: https://gambiandelights.netlify.app/
- Dette skal vise hovedsiden

### Test 2: Bestillingssiden
- Gå til: https://gambiandelights.netlify.app/order.html
- Dette skal vise bestillingsskjemaet

### Test 3: Betalingssystemet
1. Fyll ut en testbestilling
2. Klikk "Submit Booking"
3. Du skal bli omdirigert til Stripe Checkout
4. Bruk test-kort: `4242 4242 4242 4242`
5. Sjekk at betaling fungerer

---

## Sjekk Environment Variables

Sjekk at du har disse environment variables:

1. **STRIPE_SECRET_KEY**
   - Value: `sk_test_51Sbi5yJzNl5yX8PmeIO8Hf4641W6YBH4bTCki622zIv0HxpwFYrKvxYrVQdeb3UTOE8IcEzjNEhubnG39lL97swE00KDYijxx4`

2. **SITE_URL**
   - Value: `https://gambiandelights.netlify.app` ← OPPDATER TIL DENNE!

---

## Alt ser bra ut! 🎉

Du har nå:
✅ GitHub repository: github.com/gambiandelights/Gambian-Delights
✅ Netlify site: gambiandelights.netlify.app
✅ Automatisk deploy fra GitHub
✅ Betalingssystemet satt opp

**Neste steg:** Oppdater `SITE_URL` environment variable og test betalingssystemet!

---

## Fremtidige oppdateringer

Nå kan du enkelt oppdatere koden:

1. **Gå til GitHub repository-siden din:**
   - github.com/gambiandelights/Gambian-Delights

2. **Klikk på filen du vil endre**

3. **Klikk "Edit" (blyant-ikon)**

4. **Gjør endringene**

5. **Klikk "Commit changes"**

6. **Netlify vil automatisk deploye!** 🚀

