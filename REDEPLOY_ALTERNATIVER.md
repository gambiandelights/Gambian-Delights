# Hvordan Redeploye i Netlify - Alternativer

## Metode 1: Drag and Drop (Enklest!)

Du ser "Drag and drop your project folder here" - bruk dette:

1. **Gå til prosjektmappen din:**
   - Åpne File Explorer
   - Gå til: `C:\Users\Sambo\OneDrive\Gambian Delights`

2. **Dra hele mappen:**
   - Dra hele "Gambian Delights" mappen
   - Slip den inn i det stiplede området på Netlify-siden
   - Vent mens filene lastes opp (1-2 minutter)

3. **Netlify vil automatisk deploye:**
   - Du vil se en ny deploy starte
   - Vent til den er ferdig (1-2 minutter)

---

## Metode 2: Via Deploy Settings

1. **Klikk på "Deploy settings"** (hvis du ser den)
2. Se etter en knapp som heter **"Trigger deploy"** eller **"Redeploy"**
3. Klikk på den

---

## Metode 3: Klikk på den siste deployen

1. **Se på "Deploys" listen:**
   - Du ser "Production published - Build from drop deployment - Today at 2:45 PM"
   - Klikk på denne deployen

2. **I deploy-detaljene:**
   - Se etter en knapp som heter **"Redeploy"** eller **"Trigger deploy"**
   - Klikk på den

---

## Metode 4: Bruk Netlify CLI (Hvis du har det installert)

Hvis du har Netlify CLI installert:

1. **Åpne PowerShell eller Command Prompt**

2. **Gå til prosjektmappen:**
   ```powershell
   cd "C:\Users\Sambo\OneDrive\Gambian Delights"
   ```

3. **Redeploy:**
   ```powershell
   netlify deploy --prod
   ```

---

## Metode 5: Gjør en liten endring (Trigger auto-deploy)

Hvis du har GitHub-kobling:

1. Gjør en liten endring i en fil (f.eks. legg til et mellomrom i `index.html`)
2. Commit og push til GitHub
3. Netlify vil automatisk deploye

---

## Anbefalt: Metode 1 (Drag and Drop)

**Dette er den enkleste måten:**

1. Åpne File Explorer
2. Gå til: `C:\Users\Sambo\OneDrive\Gambian Delights`
3. Dra hele mappen inn i Netlify
4. Vent til deploy er ferdig

**Viktig:** Etter deploy, vent 1-2 minutter før du tester!

---

## Hvordan vite at deploy er ferdig

Du vil se:
- ✅ "Production published" status
- ✅ En grønn sjekkmark ved siden av deployen
- ✅ "Deployed in Xs" melding

---

## Etter Redeploy

Når deploy er ferdig:

1. **Vent 1-2 minutter** (for at environment variables skal lastes)
2. **Test betalingssystemet:**
   - Gå til: https://tiny-semifreddo-7fbe9b.netlify.app/order.html
   - Fyll ut en testbestilling
   - Bruk test-kort: `4242 4242 4242 4242`

---

## Hvis du fortsatt har problemer

Prøv å:
1. Oppdater siden (F5)
2. Logg ut og logg inn igjen i Netlify
3. Prøv en annen nettleser

