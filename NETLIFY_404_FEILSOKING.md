# Netlify 404 Feilsøking

## Hvilken URL prøver du å åpne?

### Hvis du prøver å åpne:
- `https://tiny-semifreddo-7fbe9b.netlify.app/` → Dette skal fungere
- `https://tiny-semifreddo-7fbe9b.netlify.app/index.html` → Dette skal fungere
- `https://tiny-semifreddo-7fbe9b.netlify.app/order.html` → Dette skal fungere

### Hvis du får 404:
1. **Sjekk at nettsiden er deployet:**
   - Gå til Netlify Dashboard
   - Sjekk at du ser "Production published" status
   - Hvis ikke, deploy nettsiden på nytt

2. **Sjekk at `index.html` er i roten:**
   - `index.html` må være i roten av prosjektmappen
   - Ikke i en undermappe

3. **Sjekk at alle filer er lastet opp:**
   - Gå til GitHub repository-siden din
   - Sjekk at `index.html` er der
   - Sjekk at alle HTML-filer er der

---

## Løsning 1: Deploy på nytt

1. **Gå til Netlify Dashboard:**
   - https://app.netlify.com
   - Klikk på din site: tiny-semifreddo-7fbe9b

2. **Gå til Deploys:**
   - Klikk på "Deploys" i venstre meny
   - Se etter "Drag and drop your project folder here"

3. **Deploy på nytt:**
   - Dra hele "Gambian Delights" mappen fra File Explorer
   - Slip den inn i det stiplede området
   - Vent til deploy er ferdig

---

## Løsning 2: Sjekk at index.html er i roten

1. **Åpne File Explorer:**
   - Gå til: `C:\Users\Sambo\OneDrive\Gambian Delights`

2. **Sjekk at `index.html` er der:**
   - `index.html` skal være direkte i denne mappen
   - Ikke i en undermappe

3. **Hvis `index.html` mangler eller er feil plassert:**
   - Flytt den til roten av prosjektmappen
   - Deploy på nytt

---

## Løsning 3: Sjekk Netlify Publish Directory

1. **Gå til Netlify Dashboard:**
   - Site settings → Build & deploy → Build settings

2. **Sjekk "Publish directory":**
   - Den skal være: `.` (punktum) eller tom
   - IKKE `dist` eller `build` eller noe annet

3. **Hvis den er feil:**
   - Endre til `.` (punktum)
   - Klikk "Save"
   - Redeploy

---

## Løsning 4: Sjekk GitHub Repository

1. **Gå til GitHub repository-siden din**

2. **Sjekk at disse filene er der:**
   - `index.html` (i roten)
   - `order.html`
   - `large-event.html`
   - `netlify/` mappen
   - `package.json`
   - `netlify.toml`

3. **Hvis filer mangler:**
   - Last dem opp på nytt via GitHub-websiden

---

## Test

Etter at du har deployet på nytt:

1. **Gå til:**
   - https://tiny-semifreddo-7fbe9b.netlify.app/
   - Dette skal vise hovedsiden

2. **Hvis det fortsatt ikke fungerer:**
   - Prøv: https://tiny-semifreddo-7fbe9b.netlify.app/index.html
   - Sjekk Netlify Deploys logs for feilmeldinger

---

## Hvis ingenting fungerer

1. **Sjekk Netlify Deploys logs:**
   - Gå til Deploys i Netlify Dashboard
   - Klikk på den siste deployen
   - Se etter feilmeldinger (røde tekster)

2. **Kontakt meg med:**
   - Hvilken URL du prøver å åpne
   - Hva du ser i Deploys logs
   - Screenshot hvis mulig

