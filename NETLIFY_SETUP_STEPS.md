# Netlify Setup Steps - Gambian Delights

## Steg-for-steg guide for å sette opp nettsiden din på Netlify

### Steg 1: Opprett Netlify-konto (hvis du ikke har en)

1. Gå til [https://www.netlify.com](https://www.netlify.com)
2. Klikk "Sign up" (gratis)
3. Velg å logge inn med GitHub, Email, eller Google
4. Bekreft e-posten din

---

### Steg 2: Deploy nettsiden din

Du har to alternativer:

#### **Alternativ A: Drag-and-Drop (Enklest for å starte)**

1. I Netlify Dashboard, klikk på **"Add new site"** → **"Deploy manually"**
2. Dra hele mappen **"Gambian Delights"** inn i det stiplede området
3. Vent mens Netlify laster opp filene (kan ta 1-2 minutter)
4. Netlify vil automatisk finne `index.html` og deploye nettsiden
5. Du får en URL som `https://random-name-12345.netlify.app`
6. Klikk på **"Site settings"** → **"Change site name"** for å endre til noe du foretrekker (f.eks. `gambiandelights`)

#### **Alternativ B: Via GitHub (Anbefalt for langsiktig)**

1. Last opp alle filene til GitHub (opprett et repository)
2. I Netlify Dashboard, klikk **"Add new site"** → **"Import an existing project"**
3. Velg **"Deploy with GitHub"**
4. Autoriser Netlify til å aksessere GitHub
5. Velg ditt repository
6. Netlify vil automatisk oppdage innstillingene
7. Klikk **"Deploy site"**

---

### Steg 3: Legg til Environment Variables (Viktig for Stripe!)

1. I Netlify Dashboard, gå til ditt site
2. Klikk på **"Site settings"** (øverst til høyre)
3. I venstre meny, klikk på **"Environment variables"**
4. Klikk på **"Add a variable"** og legg til følgende:

   **Variable 1:**
   - **Key:** `STRIPE_SECRET_KEY`
   - **Value:** Din Stripe Secret Key (starter med `sk_test_` for test, eller `sk_live_` for produksjon)
   - **Scopes:** Velg "All scopes" eller "Production, Deploy previews, Branch deploys"

   **Variable 2:**
   - **Key:** `URL`
   - **Value:** Din Netlify site URL (f.eks. `https://gambiandelights.netlify.app`)
   - **Scopes:** Velg "All scopes"

5. Klikk **"Save"** for hver variabel

**Hvor finner jeg Stripe Secret Key?**
- Gå til [Stripe Dashboard](https://dashboard.stripe.com)
- Klikk på **"Developers"** → **"API keys"**
- Kopier **"Secret key"** (ikke publishable key - den er allerede i koden)

---

### Steg 4: Installer Netlify CLI (Valgfritt, men anbefalt)

Dette lar deg teste lokalt før du deployer:

1. Installer Node.js hvis du ikke har det: [nodejs.org](https://nodejs.org)
2. Åpne terminal/command prompt
3. Kjør: `npm install -g netlify-cli`
4. I prosjektmappen din, kjør: `netlify login`
5. Logg inn med Netlify-kontoen din
6. Kjør: `netlify init` og følg instruksjonene
7. For å teste lokalt: `netlify dev`

---

### Steg 5: Installer Dependencies

Netlify trenger å vite hvilke pakker som skal installeres:

1. I Netlify Dashboard, gå til **"Site settings"** → **"Build & deploy"**
2. Under **"Build settings"**, sjekk at:
   - **Build command:** `npm install` (eller la stå tom hvis du ikke har build)
   - **Publish directory:** `.` (eller `dist` hvis du bygger til en mappe)

**Alternativt:** Hvis du bruker GitHub:
- Netlify vil automatisk lese `package.json` og installere dependencies
- Sørg for at `package.json` er lastet opp til GitHub

---

### Steg 6: Test Netlify Functions

1. Etter deploy, gå til din Netlify site URL
2. Åpne browser Developer Tools (F12)
3. Gå til **"Console"** tab
4. Prøv å sende inn en testbestilling
5. Sjekk for feilmeldinger

**For å se Functions logs:**
- I Netlify Dashboard, gå til **"Functions"** i venstre meny
- Her kan du se alle serverless-funksjoner
- Klikk på en funksjon for å se logs

---

### Steg 7: Set opp Stripe Webhook (For betalingsbekreftelser)

1. I Stripe Dashboard, gå til **"Developers"** → **"Webhooks"**
2. Klikk **"Add endpoint"**
3. **Endpoint URL:** `https://din-site.netlify.app/.netlify/functions/stripe-webhook`
   (Erstatt `din-site` med din faktiske Netlify site navn)
4. Under **"Events to send"**, velg:
   - `checkout.session.completed`
5. Klikk **"Add endpoint"**
6. Kopier **"Signing secret"** (starter med `whsec_`)
7. I Netlify, legg til en ny environment variable:
   - **Key:** `STRIPE_WEBHOOK_SECRET`
   - **Value:** Din webhook signing secret
8. Klikk **"Save"**

---

### Steg 8: Test hele systemet

1. Gå til din Netlify site
2. Fyll ut en testbestilling
3. Bruk Stripe test-kort: `4242 4242 4242 4242`
4. Sjekk at:
   - ✅ Betaling går gjennom
   - ✅ Du blir omdirigert tilbake til nettsiden
   - ✅ Du mottar e-post med bestillingsdetaljer
   - ✅ Bestillingen viser "DEPOSIT PAID" i e-posten

---

### Steg 9: Custom Domain (Valgfritt)

Hvis du har eget domene (f.eks. `gambiandelights.no`):

1. I Netlify Dashboard, gå til **"Domain settings"**
2. Klikk **"Add custom domain"**
3. Skriv inn ditt domene
4. Følg instruksjonene for å oppdatere DNS-innstillinger
5. Vent på at SSL-sertifikatet blir generert (automatisk, tar 1-2 minutter)

---

## Troubleshooting

### Problem: Functions fungerer ikke
- **Løsning:** Sjekk at `netlify/functions/` mappen er lastet opp
- Sjekk at `package.json` er lastet opp
- Sjekk Functions logs i Netlify Dashboard

### Problem: Environment variables fungerer ikke
- **Løsning:** Sjekk at variablene er lagt til riktig
- Sjekk at "Scopes" er satt til "All scopes"
- **Viktig:** Du må **redeploy** nettsiden etter å ha lagt til environment variables!
  - Gå til **"Deploys"** → **"Trigger deploy"** → **"Clear cache and deploy site"**

### Problem: Stripe betaling feiler
- **Løsning:** Sjekk at `STRIPE_SECRET_KEY` er riktig
- Sjekk at du bruker test keys i testmodus
- Sjekk browser console for feilmeldinger
- Sjekk Netlify Functions logs

### Problem: Bestillinger kommer ikke i e-post
- **Løsning:** Sjekk at Formspree-endpoint er riktig: `https://formspree.io/f/mrbnlnpe`
- Sjekk spam-mappen
- Test Formspree manuelt

---

## Viktige filer som må være lastet opp

Sørg for at disse filene/mappene er med når du deployer:

- ✅ `index.html`
- ✅ `order.html`
- ✅ `large-event.html`
- ✅ `policy.html`
- ✅ Alle andre HTML-filer
- ✅ `netlify/functions/` mappen (med alle .js filer)
- ✅ `package.json`
- ✅ `netlify.toml`

---

## Neste steg etter Netlify setup

1. ✅ Test betalingssystemet med test-kort
2. ✅ Sjekk at e-poster kommer gjennom
3. ✅ Test på mobil
4. ✅ Når alt fungerer, bytt til Stripe Live keys
5. ✅ Oppdater environment variables med live keys
6. ✅ Redeploy nettsiden

---

## Hjelp og support

- Netlify dokumentasjon: [docs.netlify.com](https://docs.netlify.com)
- Netlify support: [support.netlify.com](https://support.netlify.com)
- Stripe dokumentasjon: [stripe.com/docs](https://stripe.com/docs)

