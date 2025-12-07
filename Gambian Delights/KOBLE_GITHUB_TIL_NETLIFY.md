# Koble GitHub til Netlify - Steg-for-steg

## Status nå:
✅ Filene dine er på GitHub
✅ Nettsiden er deployet på Netlify
❌ Netlify er IKKE koblet til GitHub (ikke synkronisert)

---

## Hvorfor koble dem sammen?

Når GitHub er koblet til Netlify:
- ✅ Netlify vil automatisk deploye når du pusher endringer til GitHub
- ✅ Du kan oppdatere koden via GitHub-websiden
- ✅ Netlify vil automatisk bygge og deploye nye endringer

---

## Steg 1: Gå til Netlify Dashboard

1. **Gå til:** https://app.netlify.com
2. **Klikk på din site:** tiny-semifreddo-7fbe9b

---

## Steg 2: Finn Build & Deploy Settings

### Metode A: Via Site Settings

1. **Klikk på "Site settings"** (tannhjul-ikon ⚙️ eller "Configuration")
2. **I venstre meny, klikk på "Build & deploy"**
3. **Under "Continuous Deployment", se etter "Link to Git provider"**

### Metode B: Direkte link

Gå direkte til:
**https://app.netlify.com/sites/tiny-semifreddo-7fbe9b/configuration/deploys**

---

## Steg 3: Koble til GitHub

1. **Under "Continuous Deployment", klikk på "Link to Git provider"**
   - Eller "Connect to Git provider"
   - Eller "Set up a Git provider"

2. **Velg "GitHub"**

3. **Autoriser Netlify:**
   - Du blir bedt om å logge inn på GitHub
   - Klikk "Authorize Netlify"
   - Du kan velge å gi tilgang til alle repositories eller bare spesifikke

4. **Velg ditt repository:**
   - Du vil se en liste over GitHub repositories
   - Velg `gambian-delights` (eller hva du kalte repositoryet ditt)
   - Klikk "Next"

5. **Netlify vil automatisk oppdage innstillingene:**
   - Build command: (kan være tom)
   - Publish directory: `.` (punktum)
   - Klikk "Save" eller "Deploy site"

---

## Steg 4: Verifiser at det fungerer

1. **Etter at du har koblet:**
   - Du vil se en ny deploy starte automatisk
   - Vent til den er ferdig

2. **I Netlify Dashboard, under "Deploys":**
   - Du skal se "Triggered by Git push" eller lignende
   - Dette betyr at det er koblet!

---

## Steg 5: Test automatisk deploy

1. **Gå til GitHub repository-siden din**

2. **Gjør en liten endring:**
   - Klikk på `index.html`
   - Klikk på "Edit" (blyant-ikon)
   - Legg til et mellomrom eller en liten endring
   - Scroll ned og klikk "Commit changes"

3. **Gå tilbake til Netlify Dashboard:**
   - Du skal se en ny deploy starte automatisk!
   - Dette betyr at det fungerer! 🎉

---

## Hvis du ikke ser "Link to Git provider"

### Alternativ 1: Sjekk at du er på riktig side

- Gå til: https://app.netlify.com/sites/tiny-semifreddo-7fbe9b/configuration/deploys
- Se etter "Continuous Deployment" seksjonen

### Alternativ 2: Sjekk at du har tilgang

- Sjekk at du er logget inn på riktig Netlify-konto
- Sjekk at du har tilgang til site-en

### Alternativ 3: Prøv fra hovedsiden

1. Gå til Netlify Dashboard hovedsiden
2. Hover over din site
3. Se etter "Configure site" eller lignende
4. Gå til "Build & deploy"

---

## Etter at det er koblet

Nå kan du:
- ✅ Oppdatere koden via GitHub-websiden
- ✅ Netlify vil automatisk deploye nye endringer
- ✅ Du trenger ikke å dra og slippe filer lenger!

---

## Viktig: Environment Variables

**Husk:** Environment variables (`STRIPE_SECRET_KEY` og `SITE_URL`) er allerede satt i Netlify og vil fungere selv etter at du kobler til GitHub.

---

## Du er klar! 🚀

Etter at du har koblet GitHub til Netlify, vil alt være synkronisert og automatisk!

