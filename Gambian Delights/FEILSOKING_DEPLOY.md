# Feilsøking - Hva er feilen?

## Vi trenger å vite:

1. **Hva er feilmeldingen?**
   - Hva står det nøyaktig?
   - Hvor ser du feilmeldingen? (på nettsiden, i browser console, i Netlify logs?)

2. **Hvilken side gir feil?**
   - Hovedsiden: https://gambiandelights.netlify.app/
   - Bestillingssiden: https://gambiandelights.netlify.app/order.html
   - Eller noe annet?

---

## Vanlige problemer og løsninger:

### Problem 1: "Failed to create checkout session" eller betaling fungerer ikke

**Sjekk Functions logs:**
1. I Netlify Dashboard, gå til **"Functions"** (venstre meny)
2. Klikk på `create-checkout-session`
3. Se logs for feilmeldinger

**Løsning:**
- Sjekk at `STRIPE_SECRET_KEY` er satt riktig i Environment Variables
- Sjekk at `SITE_URL` er satt til `https://gambiandelights.netlify.app`
- Sjekk at `netlify/functions/` mappen er med i GitHub repository

---

### Problem 2: 404 Error på nettsiden

**Sjekk:**
1. Gå til: https://gambiandelights.netlify.app/
2. Hvis du får 404, sjekk at `index.html` er i roten av repository

**Løsning:**
- Sjekk GitHub repository at `index.html` er der
- Sjekk at `netlify.toml` har `publish = "."`

---

### Problem 3: Functions fungerer ikke

**Sjekk:**
1. I Netlify Dashboard, gå til **"Functions"**
2. Se om du ser `create-checkout-session` og `stripe-webhook`

**Hvis Functions mangler:**
- Sjekk at `netlify/functions/` mappen er med i GitHub
- Sjekk at `package.json` er med i GitHub
- Sjekk at `netlify.toml` er med i GitHub

---

### Problem 4: Environment Variables fungerer ikke

**Sjekk:**
1. Gå til Environment Variables i Netlify
2. Sjekk at du har:
   - `STRIPE_SECRET_KEY` = `sk_test_51Sbi5yJzNl5yX8PmeIO8Hf4641W6YBH4bTCki622zIv0HxpwFYrKvxYrVQdeb3UTOE8IcEzjNEhubnG39lL97swE00KDYijxx4`
   - `SITE_URL` = `https://gambiandelights.netlify.app`

**Løsning:**
- Hvis de mangler, legg dem til
- Redeploy etter å ha lagt til/oppdatert environment variables

---

## Steg-for-steg feilsøking:

### Steg 1: Sjekk browser console

1. Gå til: https://gambiandelights.netlify.app/order.html
2. Åpne Developer Tools (F12)
3. Gå til **"Console"** tab
4. Se etter røde feilmeldinger
5. Skriv ned hva du ser

### Steg 2: Sjekk Netlify Functions logs

1. I Netlify Dashboard, gå til **"Functions"**
2. Klikk på `create-checkout-session`
3. Se logs for feilmeldinger
4. Skriv ned hva du ser

### Steg 3: Sjekk GitHub repository

1. Gå til: github.com/gambiandelights/Gambian-Delights
2. Sjekk at disse filene/mappene er der:
   - `index.html`
   - `order.html`
   - `netlify/` mappen
   - `netlify/functions/create-checkout-session.js`
   - `netlify/functions/stripe-webhook.js`
   - `package.json`
   - `netlify.toml`

### Steg 4: Test en enkel bestilling

1. Gå til: https://gambiandelights.netlify.app/order.html
2. Fyll ut en testbestilling
3. Klikk "Submit Booking"
4. Se hva som skjer
5. Sjekk browser console for feilmeldinger

---

## Send meg denne informasjonen:

1. **Hva er feilmeldingen?** (eksakt tekst)
2. **Hvor ser du feilen?** (på nettsiden, i browser console, i Netlify logs?)
3. **Hva skjer når du prøver å sende inn en bestilling?**
4. **Ser du noe i browser console?** (F12 → Console tab)
5. **Ser du noe i Netlify Functions logs?**

---

## Rask test:

1. Gå til: https://gambiandelights.netlify.app/
2. Hvis hovedsiden fungerer, prøv: https://gambiandelights.netlify.app/order.html
3. Fyll ut en testbestilling
4. Åpne browser console (F12)
5. Klikk "Submit Booking"
6. Se hva som skjer i console

Send meg hva du ser, så kan jeg hjelpe deg videre!

