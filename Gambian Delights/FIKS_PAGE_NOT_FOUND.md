# Fiks "Page not found" Feil

## Problemet:
Netlify finner ikke `index.html` i roten av repository.

---

## Løsning 1: Sjekk at index.html er i GitHub

1. **Gå til GitHub repository:**
   - https://github.com/gambiandelights/Gambian-Delights

2. **Sjekk at `index.html` er der:**
   - Du skal se `index.html` i listen over filer
   - Den skal være i roten (ikke i en undermappe)

3. **Hvis `index.html` mangler:**
   - Last den opp på nytt via GitHub-websiden
   - Eller se Løsning 2 nedenfor

---

## Løsning 2: Last opp index.html på nytt

1. **Gå til GitHub repository:**
   - https://github.com/gambiandelights/Gambian-Delights

2. **Klikk "Add file" → "Upload files"**

3. **Dra `index.html` fra din datamaskin:**
   - Gå til: `C:\Users\Sambo\OneDrive\Gambian Delights`
   - Dra `index.html` inn i GitHub

4. **Scroll ned og klikk "Commit changes"**

5. **Netlify vil automatisk deploye!**

---

## Løsning 3: Sjekk Netlify Publish Directory

1. **Gå til Netlify Dashboard:**
   - https://app.netlify.com
   - Klikk på din site: gambiandelights

2. **Gå til Site settings:**
   - Klikk "Site settings" → "Build & deploy" → "Build settings"

3. **Sjekk "Publish directory":**
   - Den skal være: `.` (punktum) eller tom
   - IKKE `dist` eller `build` eller noe annet

4. **Hvis den er feil:**
   - Endre til `.` (punktum)
   - Klikk "Save"
   - Redeploy

---

## Løsning 4: Sjekk at netlify.toml er riktig

1. **Gå til GitHub repository:**
   - https://github.com/gambiandelights/Gambian-Delights

2. **Sjekk at `netlify.toml` er der**

3. **Klikk på `netlify.toml` og sjekk at den inneholder:**
   ```
   [build]
     functions = "netlify/functions"
     publish = "."
   ```

4. **Hvis den mangler eller er feil:**
   - Last den opp på nytt
   - Eller se Løsning 5

---

## Løsning 5: Last opp alle filer på nytt

Hvis ingenting fungerer, last opp alle filer på nytt:

1. **Gå til GitHub repository:**
   - https://github.com/gambiandelights/Gambian-Delights

2. **Slett alle filer** (hvis du vil starte på nytt):
   - Gå til hver fil
   - Klikk "Delete" → "Commit changes"

3. **Last opp alle filer på nytt:**
   - Klikk "Add file" → "Upload files"
   - Dra hele "Gambian Delights" mappen inn i GitHub
   - Scroll ned og klikk "Commit changes"

4. **Netlify vil automatisk deploye!**

---

## Rask test etter fiks:

1. **Vent 1-2 minutter** etter at du har lastet opp filene

2. **Gå til:** https://gambiandelights.netlify.app/
   - Dette skal nå fungere!

3. **Gå til:** https://gambiandelights.netlify.app/order.html
   - Dette skal også fungere!

---

## Viktige filer som må være i roten:

✅ `index.html` (må være i roten!)
✅ `order.html`
✅ `large-event.html`
✅ `policy.html`
✅ `netlify.toml`
✅ `package.json`
✅ `netlify/` mappen

---

## Prøv dette først:

1. **Gå til GitHub repository**
2. **Sjekk om `index.html` er der**
3. **Hvis den mangler, last den opp**
4. **Vent 1-2 minutter**
5. **Test nettsiden igjen**

Si fra hva du finner!

