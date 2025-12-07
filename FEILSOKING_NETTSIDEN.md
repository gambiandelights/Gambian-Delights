# Feilsøking - Hva ser du på nettsiden?

## Steg 1: Gå til nettsiden

1. **Gå til:** https://gambiandelights.netlify.app/
2. **Hva ser du?**
   - Fungerer hovedsiden?
   - Får du en feilmelding?
   - Ser du "Page not found"?
   - Eller noe annet?

---

## Steg 2: Test bestillingssiden

1. **Gå til:** https://gambiandelights.netlify.app/order.html
2. **Hva ser du?**
   - Fungerer bestillingssiden?
   - Får du en feilmelding?
   - Ser du "Page not found"?

---

## Steg 3: Sjekk browser console

1. **Åpne Developer Tools:**
   - Trykk **F12** på tastaturet
   - Eller høyreklikk → "Inspect" → "Console" tab

2. **Se etter røde feilmeldinger:**
   - Er det noen røde tekster?
   - Hva står det?

3. **Gå til "Network" tab:**
   - Se om det er noen feilede requests (røde)
   - Hva står det?

---

## Vanlige feilmeldinger:

### "Page not found" / 404 Error
**Løsning:**
- Sjekk at `index.html` er i roten av GitHub repository
- Sjekk at filen heter `index.html` (ikke `Index.html` eller `INDEX.HTML`)

### "Failed to create checkout session"
**Løsning:**
- Sjekk Environment Variables i Netlify
- Sjekk Functions logs i Netlify

### "Stripe is not defined" eller JavaScript feil
**Løsning:**
- Sjekk at Stripe.js er lastet inn i HTML-filene
- Sjekk browser console for mer detaljer

### Blank side / Ingenting vises
**Løsning:**
- Sjekk browser console for JavaScript-feil
- Sjekk at alle filer er lastet opp til GitHub

---

## Send meg denne informasjonen:

1. **Hvilken URL gir feil?**
   - https://gambiandelights.netlify.app/
   - https://gambiandelights.netlify.app/order.html
   - Eller noe annet?

2. **Hva ser du nøyaktig?**
   - Hva står det på skjermen?
   - Er det en feilmelding?
   - Er siden blank?

3. **Hva står i browser console?** (F12 → Console tab)
   - Er det noen røde feilmeldinger?
   - Hva står det?

4. **Fungerer hovedsiden?**
   - Går det an å se hovedsiden?
   - Eller får du feil der også?

---

## Rask test:

1. **Gå til:** https://gambiandelights.netlify.app/
2. **Trykk F12** for å åpne Developer Tools
3. **Gå til "Console" tab**
4. **Se etter røde feilmeldinger**
5. **Skriv ned hva du ser**

Send meg hva du ser, så kan jeg hjelpe deg videre!

