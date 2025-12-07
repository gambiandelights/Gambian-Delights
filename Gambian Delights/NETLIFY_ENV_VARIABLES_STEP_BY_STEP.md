# Netlify Environment Variables - Steg-for-steg

## Hvis du ser "Project contexts"

Dette betyr at du er i en team-kontekst. Følg disse stegene:

### Steg 1: Gå til din site
1. I Netlify Dashboard, se etter en liste med **sites** eller **projects**
2. Klikk på **"tiny-semifreddo-7fbe9b"** (din site)
3. Dette tar deg til site dashboard

### Steg 2: Finn Configuration
1. Når du er på site dashboard, se i **venstre meny**
2. Du skal se:
   - Overview
   - Deploys
   - Functions
   - **Configuration** ← Klikk her!
   - Domain management
   - etc.

### Steg 3: Environment Variables
1. Under **Configuration**, klikk på **"Environment variables"**
2. Eller gå direkte til: https://app.netlify.com/sites/tiny-semifreddo-7fbe9b/configuration/env

---

## Alternativ: Bruk direkte URL

**Kopier og lim inn denne URL-en i nettleseren:**

```
https://app.netlify.com/sites/tiny-semifreddo-7fbe9b/configuration/env
```

Dette tar deg direkte til Environment Variables-siden!

---

## Hvis du fortsatt ikke finner det

### Prøv dette:

1. **Gå til hovedsiden:**
   - Klikk på Netlify-logoen øverst til venstre
   - Eller gå til: https://app.netlify.com

2. **Finn din site:**
   - Du skal se en liste med alle dine sites
   - Klikk på **"tiny-semifreddo-7fbe9b"**

3. **I site dashboard, se etter:**
   - En knapp/lenke som heter **"Configuration"** i venstre meny
   - Eller **"Site configuration"**
   - Eller **"Settings"**

4. **Klikk på "Environment variables"** under Configuration

---

## Screenshot-beskrivelse av hva du skal se

Når du er på riktig side, skal du se:

```
┌─────────────────────────────────────────┐
│ Netlify Dashboard                       │
├─────────────────────────────────────────┤
│ tiny-semifreddo-7fbe9b                  │
├─────────────────────────────────────────┤
│ [Overview] [Deploys] [Functions]        │
│ [Configuration ▼]                       │
│   ├─ Build settings                     │
│   ├─ Environment variables  ← KLIKK HER!│
│   ├─ Domain management                  │
│   └─ ...                                │
└─────────────────────────────────────────┘
```

---

## Hvis ingenting fungerer: Bruk Netlify CLI

Hvis du foretrekker å bruke terminal/command prompt:

1. **Åpne terminal/command prompt**

2. **Installer Netlify CLI** (hvis du ikke har det):
   ```bash
   npm install -g netlify-cli
   ```

3. **Logg inn:**
   ```bash
   netlify login
   ```
   - Dette åpner nettleseren for å logge inn

4. **Gå til prosjektmappen din:**
   ```bash
   cd "C:\Users\Sambo\OneDrive\Gambian Delights"
   ```

5. **Koble til din site:**
   ```bash
   netlify link
   ```
   - Velg din site: tiny-semifreddo-7fbe9b

6. **Legg til environment variables:**
   ```bash
   netlify env:set STRIPE_SECRET_KEY "sk_test_51Sbi5yJzNl5yX8PmeIO8Hf4641W6YBH4bTCki622zIv0HxpwFYrKvxYrVQdeb3UTOE8IcEzjNEhubnG39lL97swE00KDYijxx4"
   
   netlify env:set URL "https://tiny-semifreddo-7fbe9b.netlify.app"
   ```

7. **Redeploy:**
   ```bash
   netlify deploy --prod
   ```

---

## Prøv denne direkte linken først!

**Klikk her eller kopier inn i nettleseren:**
https://app.netlify.com/sites/tiny-semifreddo-7fbe9b/configuration/env

Denne linken skal ta deg direkte til Environment Variables-siden!

