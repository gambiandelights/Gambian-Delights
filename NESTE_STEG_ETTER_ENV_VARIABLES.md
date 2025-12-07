# Neste Steg - Redeploy og Test! 🚀

## Steg 1: Redeploy Nettsiden (Viktig!)

Du må redeploye nettsiden for at environment variables skal fungere:

1. **I Netlify Dashboard:**
   - Gå til **"Deploys"** i venstre meny
   - Klikk på **"Trigger deploy"** (øverst til høyre)
   - Velg **"Clear cache and deploy site"**
   - Vent 1-2 minutter til deploy er ferdig

**Hvorfor?** Environment variables lastes kun når nettsiden deployes, så du må redeploye for at de nye variablene skal bli aktive.

---

## Steg 2: Test Betalingssystemet

### Test en bestilling:

1. **Gå til bestillingssiden:**
   - Åpne: https://tiny-semifreddo-7fbe9b.netlify.app/order.html

2. **Fyll ut en testbestilling:**
   - Event Name: "Test Bestilling"
   - Event Date: Velg en fremtidig dato
   - Event Time: F.eks. "18:00"
   - Number of Guests: F.eks. "10"
   - Event Location: "Test Adresse, Oslo"
   - Your Name: "Test Kunde"
   - Phone: "12345678"
   - Email: Din e-post (for å teste)
   - Velg minst én rett (f.eks. Benachin)
   - Se at depositum (50%) vises i bestillingsoversikten

3. **Klikk "Submit Booking"**
   - Du skal bli omdirigert til Stripe Checkout

4. **Bruk Stripe test-kort:**
   - **Kortnummer:** `4242 4242 4242 4242`
   - **Utløpsdato:** Hvilken som helst fremtidig dato (f.eks. `12/25`)
   - **CVC:** Hvilket som helst 3-sifret tall (f.eks. `123`)
   - **Navn:** Hvilket som helst navn

5. **Klikk "Pay" eller "Betal"**
   - Betalingen skal gå gjennom
   - Du skal bli omdirigert tilbake til nettsiden
   - Du skal få en bekreftelsesmelding

6. **Sjekk din e-post:**
   - Gå til `gambiandelights@gmail.com`
   - Du skal få en e-post med:
     - Ordrenummer
     - "DEPOSIT PAID" status
     - Alle bestillingsdetaljer

---

## Steg 3: Sjekk at Alt Fungerer

### Hva skal fungere:

✅ **Depositum vises** i bestillingsoversikten (50% av total)  
✅ **Stripe Checkout åpnes** når du klikker "Submit Booking"  
✅ **Betaling går gjennom** med test-kort  
✅ **Omdirigering tilbake** til nettsiden etter betaling  
✅ **Bekreftelsesmelding** vises  
✅ **E-post sendes** til din e-post med bestillingsdetaljer  

---

## Hvis Noe Ikke Fungerer

### Problem: Stripe Checkout åpnes ikke

**Sjekk:**
1. Åpne browser Developer Tools (F12)
2. Gå til **"Console"** tab
3. Se etter feilmeldinger (røde tekster)
4. Sjekk at du har redeployet etter å ha lagt til environment variables

**Løsning:**
- Sjekk at `STRIPE_SECRET_KEY` er riktig i Netlify
- Sjekk at `SITE_URL` er riktig i Netlify
- Redeploy igjen

### Problem: "Failed to create checkout session"

**Sjekk Functions logs:**
1. I Netlify Dashboard, gå til **"Functions"** (venstre meny)
2. Klikk på `create-checkout-session`
3. Se logs for feilmeldinger

**Løsning:**
- Sjekk at `STRIPE_SECRET_KEY` er lagt til riktig
- Sjekk at du har redeployet

### Problem: Bestillinger kommer ikke i e-post

**Sjekk:**
- Spam-mappen
- At Formspree-endpoint er riktig: `https://formspree.io/f/mrbnlnpe`
- At e-postadressen er riktig i bestillingsskjemaet

---

## Steg 4: Test Store Arrangementer (Valgfritt)

Test også store arrangementer:

1. Gå til: https://tiny-semifreddo-7fbe9b.netlify.app/large-event.html
2. Fyll ut bestillingen
3. Test betaling på samme måte

---

## Steg 5: Når Alt Fungerer

Når betalingssystemet fungerer perfekt:

1. ✅ Test med flere forskjellige bestillinger
2. ✅ Test på mobil
3. ✅ Test med forskjellige retter
4. ✅ Sjekk at alle e-poster kommer gjennom

---

## Du er Nå Klar! 🎉

Etter at du har redeployet og testet, skal betalingssystemet fungere perfekt!

**Husk:**
- Dette er test-modus (test-kort fungerer)
- Når du er klar for produksjon, bytt til Stripe Live keys
- Oppdater environment variables med live keys
- Redeploy igjen

---

## Hjelp?

Hvis noe ikke fungerer:
1. Sjekk Functions logs i Netlify
2. Sjekk browser console (F12)
3. Sjekk at alle environment variables er riktig
4. Redeploy igjen

