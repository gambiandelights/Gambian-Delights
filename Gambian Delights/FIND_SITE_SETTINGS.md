# Hvordan finne Site Settings i Netlify

## Metode 1: Fra Site Dashboard

1. **Gå til Netlify Dashboard:**
   - Åpne [app.netlify.com](https://app.netlify.com)
   - Du skal se en liste over dine sites

2. **Klikk på din site:**
   - Klikk på **"tiny-semifreddo-7fbe9b"** (eller hva din site heter)
   - Dette tar deg til site dashboard

3. **Finn Site settings:**
   - Se på **toppen** av siden, til høyre
   - Du skal se en knapp som heter **"Site settings"** eller et tannhjul-ikon ⚙️
   - Klikk på den

## Metode 2: Fra Site Overview

1. **Fra site dashboard:**
   - Du skal se flere faner/knapper i toppen: "Overview", "Deploys", "Functions", etc.
   - Se etter en knapp med navnet **"Site settings"** eller et **tannhjul-ikon** ⚙️
   - Den er vanligvis helt til høyre

## Metode 3: Direkte URL

Hvis du fortsatt ikke finner det, kan du gå direkte til:

**https://app.netlify.com/sites/tiny-semifreddo-7fbe9b/configuration/env**

Dette tar deg direkte til Environment Variables-siden!

## Metode 4: Fra Site List

1. **Fra hovedsiden med alle sites:**
   - Hover over din site (tiny-semifreddo-7fbe9b)
   - Du skal se et **tannhjul-ikon** ⚙️ eller **tre prikker** ⋯
   - Klikk på det
   - Velg **"Site settings"** eller **"Configure site"**

## Hva du skal se

Når du er i Site settings, skal du se en venstre meny med:
- General
- Domain management
- **Environment variables** ← Dette er det du trenger!
- Build & deploy
- Functions
- Identity
- etc.

## Alternativ: Bruk Netlify CLI

Hvis du foretrekker å bruke terminal:

1. Installer Netlify CLI: `npm install -g netlify-cli`
2. Logg inn: `netlify login`
3. Gå til prosjektmappen din
4. Sett environment variables:
   ```bash
   netlify env:set STRIPE_SECRET_KEY "sk_test_51Sbi5yJzNl5yX8PmeIO8Hf4641W6YBH4bTCki622zIv0HxpwFYrKvxYrVQdeb3UTOE8IcEzjNEhubnG39lL97swE00KDYijxx4"
   netlify env:set URL "https://tiny-semifreddo-7fbe9b.netlify.app"
   ```

## Screenshot-beskrivelse

Du skal se noe som dette i Netlify Dashboard:

```
[Netlify Logo]  Sites  Teams  [Din navn]  [Tannhjul-ikon]
─────────────────────────────────────────────────────────
tiny-semifreddo-7fbe9b
─────────────────────────────────────────────────────────
Overview | Deploys | Functions | ... | [Site settings ⚙️]
```

## Hvis du fortsatt ikke finner det

1. **Sjekk at du er logget inn** på riktig Netlify-konto
2. **Sjekk at du har tilgang** til denne site-en
3. **Prøv å oppdatere siden** (F5 eller Cmd+R)
4. **Prøv en annen nettleser** (Chrome, Firefox, Safari)

## Direkte link til Environment Variables

Prøv denne direkte linken:

**https://app.netlify.com/sites/tiny-semifreddo-7fbe9b/configuration/env**

Dette skal ta deg direkte til Environment Variables-siden hvor du kan legge til variablene!

