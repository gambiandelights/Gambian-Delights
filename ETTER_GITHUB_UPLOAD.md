# Etter GitHub Upload - Neste Steg

## ✅ Du har lastet opp koden til GitHub!

Nå er alle filene dine trygt lagret på GitHub. Her er neste steg:

---

## Steg 1: Verifiser at alle filer er med

Sjekk at disse viktige filene er på GitHub:

✅ `index.html`
✅ `order.html`
✅ `large-event.html`
✅ `policy.html`
✅ `netlify/` mappen (med `functions/create-checkout-session.js` og `stripe-webhook.js`)
✅ `package.json`
✅ `netlify.toml`
✅ Alle andre HTML-filer og bilder

**Hvis noen filer mangler:** Last dem opp på nytt via GitHub-websiden.

---

## Steg 2: Koble GitHub til Netlify (Anbefalt!)

Dette gjør at Netlify automatisk deployer når du pusher endringer til GitHub:

### Metode A: Via Netlify Dashboard

1. **Gå til Netlify Dashboard:**
   - https://app.netlify.com
   - Klikk på din site: **tiny-semifreddo-7fbe9b**

2. **Gå til Site settings:**
   - Klikk på **"Site settings"** (tannhjul-ikon ⚙️ eller "Configuration")
   - Eller gå direkte til: https://app.netlify.com/sites/tiny-semifreddo-7fbe9b/configuration/deploys

3. **Koble til Git:**
   - Under **"Build & deploy"**, se etter **"Continuous Deployment"**
   - Klikk **"Link to Git provider"** eller **"Connect to Git provider"**
   - Velg **"GitHub"**
   - Autoriser Netlify til å aksessere GitHub
   - Velg ditt repository: `gambian-delights` (eller hva du kalte det)
   - Netlify vil automatisk oppdage innstillingene
   - Klikk **"Save"** eller **"Deploy site"**

4. **Nå vil Netlify automatisk deploye** når du pusher til GitHub!

### Metode B: Via GitHub (Hvis du ikke ser "Link to Git provider")

1. **Gå til GitHub repository-siden din**
2. **Klikk på "Settings"** (i repository)
3. **Klikk på "Webhooks"** (i venstre meny)
4. **Klikk "Add webhook"**
5. **Fyll ut:**
   - **Payload URL:** `https://api.netlify.com/build_hooks/YOUR_BUILD_HOOK_ID`
   - (Du får build hook ID fra Netlify → Site settings → Build & deploy → Build hooks)
   - **Content type:** `application/json`
   - **Events:** Velg "Just the push event"
6. **Klikk "Add webhook"**

---

## Steg 3: Fremtidige oppdateringer

Når du har koblet GitHub til Netlify, kan du oppdatere koden på to måter:

### Metode 1: Via GitHub-websiden (Enkel)

1. Gå til GitHub repository-siden din
2. Klikk på filen du vil endre
3. Klikk på **"Edit"** (blyant-ikon)
4. Gjør endringene
5. Scroll ned og klikk **"Commit changes"**
6. Netlify vil automatisk deploye!

### Metode 2: Installer Git (For mer avanserte endringer)

Hvis du vil gjøre større endringer, kan du installere Git:

1. **Installer Git:** https://git-scm.com/download/win
2. **Følg instruksjonene i `GITHUB_SETUP_GUIDE.md`**

---

## Steg 4: Test at alt fungerer

1. **Gå til din Netlify site:**
   - https://tiny-semifreddo-7fbe9b.netlify.app

2. **Test betalingssystemet:**
   - Gå til: https://tiny-semifreddo-7fbe9b.netlify.app/order.html
   - Fyll ut en testbestilling
   - Bruk test-kort: `4242 4242 4242 4242`

3. **Sjekk at environment variables er satt:**
   - I Netlify Dashboard → Site settings → Environment variables
   - Du skal ha:
     - `STRIPE_SECRET_KEY`
     - `SITE_URL`

---

## Viktig: Environment Variables

**Husk:** Environment variables (`STRIPE_SECRET_KEY` og `SITE_URL`) er allerede satt i Netlify og vil fungere selv om du kobler til GitHub.

---

## Du er klar! 🎉

Nå har du:
✅ Koden på GitHub
✅ Nettsiden deployet på Netlify
✅ Betalingssystemet satt opp
✅ Automatisk deploy (hvis du koblet GitHub til Netlify)

---

## Hjelp

Hvis du trenger hjelp:
- **GitHub:** [docs.github.com](https://docs.github.com)
- **Netlify:** [docs.netlify.com](https://docs.netlify.com)

