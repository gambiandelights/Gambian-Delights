# Start på Nytt - Komplett Guide

## Oversikt
Dette er en komplett guide for å sette opp alt på nytt fra bunnen av.

---

## Steg 1: Sjekk at alle filer er lokalt

1. **Åpne File Explorer**
2. **Gå til:** `C:\Users\Sambo\OneDrive\Gambian Delights`
3. **Sjekk at du har:**
   - ✅ `index.html`
   - ✅ `order.html`
   - ✅ `large-event.html`
   - ✅ `policy.html`
   - ✅ `netlify/` mappen
   - ✅ `netlify/functions/create-checkout-session.js`
   - ✅ `netlify/functions/stripe-webhook.js`
   - ✅ `package.json`
   - ✅ `netlify.toml`

**Hvis noen filer mangler lokalt, si fra!**

---

## Steg 2: Last opp alle filer til GitHub

### Metode A: Via GitHub-websiden (Enklest)

1. **Gå til GitHub:**
   - https://github.com/gambiandelights/Gambian-Delights
   - Eller opprett nytt repository hvis du vil starte helt på nytt

2. **Hvis du starter på nytt:**
   - Klikk "+" → "New repository"
   - Navn: `Gambian-Delights`
   - Velg Public eller Private
   - **Ikke** huk av "Initialize with README"
   - Klikk "Create repository"

3. **Last opp alle filer:**
   - Klikk "uploading an existing file"
   - Dra **hele "Gambian Delights" mappen** inn i nettleseren
   - Eller klikk "choose your files" og velg alle filer
   - Scroll ned og klikk "Commit changes"

4. **Vent til alle filer er lastet opp**

---

## Steg 3: Deploy til Netlify

### Metode A: Via Netlify Dashboard

1. **Gå til Netlify:**
   - https://app.netlify.com
   - Logg inn

2. **Deploy site:**
   - Klikk "Add new site" → "Deploy manually"
   - Dra **hele "Gambian Delights" mappen** inn i det stiplede området
   - Vent til deploy er ferdig (1-2 minutter)

3. **Endre site-navn (valgfritt):**
   - Gå til "Site settings" → "General" → "Site details"
   - Klikk "Change site name"
   - Endre til: `gambiandelights`
   - Klikk "Save"

### Metode B: Koble til GitHub (Anbefalt)

1. **I Netlify Dashboard:**
   - Klikk "Add new site" → "Import an existing project"
   - Velg "Deploy with GitHub"
   - Autoriser Netlify
   - Velg repository: `Gambian-Delights`
   - Klikk "Deploy site"

2. **Netlify vil automatisk deploye!**

---

## Steg 4: Legg til Environment Variables

1. **Gå til Netlify Dashboard:**
   - Klikk på din site

2. **Gå til Environment Variables:**
   - Klikk "Site settings" → "Environment variables"
   - Eller gå direkte til: https://app.netlify.com/sites/gambiandelights/configuration/env

3. **Legg til variabler:**

   **Variable 1:**
   - **Key:** `STRIPE_SECRET_KEY`
   - **Value:** `sk_test_51Sbi5yJzNl5yX8PmeIO8Hf4641W6YBH4bTCki622zIv0HxpwFYrKvxYrVQdeb3UTOE8IcEzjNEhubnG39lL97swE00KDYijxx4`
   - **Scopes:** All scopes
   - Klikk "Save"

   **Variable 2:**
   - Klikk "Add a variable"
   - **Key:** `SITE_URL`
   - **Value:** `https://gambiandelights.netlify.app` (eller din faktiske URL)
   - **Scopes:** All scopes
   - Klikk "Save"

---

## Steg 5: Redeploy

1. **Gå til "Deploys" i Netlify**
2. **Klikk "Trigger deploy" → "Clear cache and deploy site"**
3. **Vent til deploy er ferdig (1-2 minutter)**

---

## Steg 6: Test

1. **Gå til din Netlify site:**
   - https://gambiandelights.netlify.app/
   - Dette skal vise hovedsiden!

2. **Test bestillingssiden:**
   - https://gambiandelights.netlify.app/order.html
   - Dette skal fungere!

3. **Test betalingssystemet:**
   - Fyll ut en testbestilling
   - Klikk "Submit Booking"
   - Du skal bli omdirigert til Stripe Checkout
   - Bruk test-kort: `4242 4242 4242 4242`

---

## Checklist

Før du starter, sjekk at du har:

- [ ] Alle filer lokalt på datamaskinen
- [ ] GitHub-konto
- [ ] Netlify-konto
- [ ] Stripe-konto (med API keys)

---

## Viktige filer som må være med

✅ `index.html` (må være i roten!)
✅ `order.html`
✅ `large-event.html`
✅ `policy.html`
✅ `netlify/` mappen
✅ `netlify/functions/create-checkout-session.js`
✅ `netlify/functions/stripe-webhook.js`
✅ `package.json`
✅ `netlify.toml`
✅ Alle bilder og andre assets

---

## Hvis noe ikke fungerer

1. **Sjekk at alle filer er lastet opp til GitHub**
2. **Sjekk at `index.html` er i roten (ikke i en undermappe)**
3. **Sjekk Environment Variables i Netlify**
4. **Sjekk Netlify Deploys logs for feilmeldinger**
5. **Sjekk browser console (F12) for JavaScript-feil**

---

## Du er klar! 🚀

Følg stegene over, og alt skal fungere!

Si fra hvis du trenger hjelp underveis!

