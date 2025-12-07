# Fiks: Filene er i feil mappe!

## Problemet:
Filene dine er i en undermappe kalt "gambian delights" i stedet for å være i roten av repository. Det er derfor Netlify ikke finner `index.html`.

---

## Løsning: Flytt filene til roten

### Steg 1: Gå til GitHub Repository

1. **Gå til:** https://github.com/gambiandelights/Gambian-Delights
2. **Du skal se en mappe kalt "gambian delights" eller "gambian-delights"**
3. **Klikk på den mappen**

### Steg 2: Flytt alle filer til roten

**Metode A: Via GitHub-websiden (Anbefalt)**

1. **Gå inn i "gambian delights" mappen**
2. **Klikk på hver fil** (én om gangen):
   - Klikk på filen
   - Klikk på **"Edit"** (blyant-ikon)
   - Kopier alt innholdet
   - Gå tilbake til roten (klikk på repository-navnet øverst)
   - Klikk "Add file" → "Create new file"
   - Skriv filnavnet (f.eks. `index.html`)
   - Lim inn innholdet
   - Klikk "Commit changes"
   - Gjenta for alle filer

**Metode B: Slett og last opp på nytt (Enklere!)**

1. **Slett hele repository og start på nytt:**
   - Gå til repository Settings
   - Scroll ned til "Danger Zone"
   - Klikk "Delete this repository"
   - Bekreft

2. **Opprett nytt repository:**
   - Klikk "+" → "New repository"
   - Navn: `Gambian-Delights`
   - **Ikke** huk av "Initialize with README"
   - Klikk "Create repository"

3. **Last opp filer direkte til roten:**
   - Klikk "uploading an existing file"
   - **Viktig:** Dra filene direkte fra `C:\Users\Sambo\OneDrive\Gambian Delights`
   - **Ikke** dra hele mappen - dra filene individuelt
   - Eller: Dra hele mappen, men sørg for at filene er i roten etter opplasting

---

## Steg 3: Sjekk at filene er i roten

Etter at du har lastet opp, skal du se:

```
Gambian-Delights/
├── index.html          ← Må være her!
├── order.html
├── large-event.html
├── policy.html
├── netlify.toml
├── package.json
├── netlify/
│   └── functions/
│       ├── create-checkout-session.js
│       └── stripe-webhook.js
└── ... (andre filer)
```

**IKKE slik:**
```
Gambian-Delights/
└── gambian-delights/    ← Feil! Filene skal ikke være her
    ├── index.html
    └── ...
```

---

## Steg 4: Sjekk at netlify/functions er med

1. **Gå til GitHub repository**
2. **Sjekk at du ser `netlify/` mappen**
3. **Klikk på den**
4. **Sjekk at du ser `functions/` mappen**
5. **Klikk på den**
6. **Sjekk at du ser:**
   - `create-checkout-session.js`
   - `stripe-webhook.js`

**Hvis de mangler, last dem opp!**

---

## Steg 5: Netlify vil automatisk redeploye

1. **Etter at du har flyttet filene, vil Netlify automatisk redeploye**
2. **Vent 1-2 minutter**
3. **Gå til:** https://gambiandelights.netlify.app/
4. **Dette skal nå fungere!**

---

## Viktig: Filstruktur

Filene skal være slik i GitHub:

```
Gambian-Delights/          ← Roten
├── index.html             ← Her!
├── order.html             ← Her!
├── large-event.html       ← Her!
├── policy.html            ← Her!
├── netlify.toml           ← Her!
├── package.json           ← Her!
├── netlify/               ← Her!
│   └── functions/
│       ├── create-checkout-session.js
│       └── stripe-webhook.js
└── ... (andre filer)
```

---

## Rask løsning:

1. **Slett repository og start på nytt** (enklest)
2. **Last opp filene direkte til roten** (ikke i en undermappe)
3. **Sjekk at `index.html` er i roten**
4. **Vent på automatisk deploy**
5. **Test nettsiden**

---

## Etter fiks:

Du skal se i Netlify Deploy logs:
- ✅ "Functions deployed" (ikke "No functions deployed")
- ✅ `index.html` i file browser
- ✅ Nettsiden fungerer!

Si fra når du har flyttet filene!

