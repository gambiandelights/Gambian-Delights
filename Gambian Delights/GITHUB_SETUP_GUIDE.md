# GitHub Setup Guide - Legg til koden din på GitHub

## Steg 1: Opprett GitHub Repository (hvis du ikke har en)

1. **Gå til [github.com](https://github.com)** og logg inn
2. **Klikk på "+"** (øverst til høyre) → **"New repository"**
3. **Fyll ut:**
   - **Repository name:** `gambian-delights` (eller hva du vil)
   - **Description:** "Gambian Delights catering website"
   - **Public** eller **Private** (velg selv)
   - **Ikke** huk av "Initialize with README" (vi har allerede filer)
4. **Klikk "Create repository"**

---

## Steg 2: Initialiser Git i prosjektmappen (hvis ikke allerede gjort)

### Åpne PowerShell eller Command Prompt:

1. **Åpne PowerShell:**
   - Trykk `Windows + X`
   - Velg "Windows PowerShell" eller "Terminal"

2. **Gå til prosjektmappen:**
   ```powershell
   cd "C:\Users\Sambo\OneDrive\Gambian Delights"
   ```

3. **Sjekk om Git er installert:**
   ```powershell
   git --version
   ```
   - Hvis du får en feilmelding, installer Git: [git-scm.com/download/win](https://git-scm.com/download/win)

4. **Initialiser Git repository (hvis ikke allerede gjort):**
   ```powershell
   git init
   ```

---

## Steg 3: Legg til alle filer

1. **Legg til alle filer:**
   ```powershell
   git add .
   ```

2. **Commit endringene:**
   ```powershell
   git commit -m "Initial commit - Gambian Delights website with Stripe payment integration"
   ```

---

## Steg 4: Koble til GitHub

1. **Gå tilbake til GitHub repository-siden du nettopp opprettet**
2. **Du vil se instruksjoner for å pushe eksisterende kode**
3. **Kopier URL-en** (f.eks. `https://github.com/ditt-brukernavn/gambian-delights.git`)

4. **I PowerShell, legg til remote:**
   ```powershell
   git remote add origin https://github.com/DITT-BRUKERNAVN/gambian-delights.git
   ```
   (Erstatt `DITT-BRUKERNAVN` med ditt faktiske GitHub-brukernavn)

5. **Push til GitHub:**
   ```powershell
   git branch -M main
   git push -u origin main
   ```

6. **Du blir bedt om å logge inn:**
   - Følg instruksjonene for å autentisere
   - Du kan bruke GitHub Personal Access Token hvis det kreves

---

## Steg 5: Oppdater GitHub (når du gjør endringer)

Hver gang du gjør endringer:

1. **Legg til endringene:**
   ```powershell
   git add .
   ```

2. **Commit:**
   ```powershell
   git commit -m "Beskrivelse av endringene"
   ```

3. **Push til GitHub:**
   ```powershell
   git push
   ```

---

## Steg 6: Koble GitHub til Netlify (Valgfritt, men anbefalt)

Dette gjør at Netlify automatisk deployer når du pusher til GitHub:

1. **I Netlify Dashboard:**
   - Gå til **"Site settings"** → **"Build & deploy"**
   - Under **"Continuous Deployment"**, klikk **"Link to Git provider"**
   - Velg **"GitHub"**
   - Autoriser Netlify til å aksessere GitHub
   - Velg ditt repository: `gambian-delights`
   - Netlify vil automatisk oppdage innstillingene
   - Klikk **"Save"**

2. **Nå vil Netlify automatisk deploye** når du pusher til GitHub!

---

## Viktige filer som skal være med

Sørg for at disse filene er med:

✅ `index.html`
✅ `order.html`
✅ `large-event.html`
✅ `policy.html`
✅ Alle andre HTML-filer
✅ `netlify/` mappen (med functions)
✅ `package.json`
✅ `netlify.toml`
✅ Alle bilder og assets

---

## .gitignore (Valgfritt)

Du kan opprette en `.gitignore` fil for å ekskludere unødvendige filer:

```
node_modules/
.env
.DS_Store
*.log
```

---

## Hjelp

Hvis du får problemer:

- **Git ikke funnet:** Installer Git fra [git-scm.com/download/win](https://git-scm.com/download/win)
- **Autentisering:** Bruk GitHub Personal Access Token hvis passord ikke fungerer
- **Merge conflicts:** Kontakt meg hvis du får merge conflicts

---

## Du er klar! 🚀

Etter at du har pushet til GitHub, vil all koden din være trygt lagret og tilgjengelig!

