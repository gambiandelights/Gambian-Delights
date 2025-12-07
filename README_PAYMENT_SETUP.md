# Betalingssystem Setup - Gambian Delights

## Oversikt
Dette dokumentet forklarer hvordan du setter opp automatisk betaling med 50% depositum for din nettside.

## Hva er implementert

✅ **Depositum-visning**: Kunder ser automatisk 50% depositum og restbeløp
✅ **Stripe-integrasjon**: Automatisk betalingshåndtering via Stripe Checkout
✅ **Bestillingsbekreftelse**: Bestillinger sendes automatisk til din e-post etter betaling
✅ **Fallback-system**: Hvis Stripe ikke er konfigurert, fungerer bestillingssystemet fortsatt

## Neste steg for å aktivere betaling

### 1. Opprett Stripe-konto
- Gå til [stripe.com](https://stripe.com) og opprett en konto
- Fullfør bedriftsverifisering
- Legg til din bedriftsbankkonto

### 2. Hent Stripe API-nøkler
- I Stripe Dashboard: **Developers** → **API keys**
- Kopier **Publishable key** (starter med `pk_`)
- Kopier **Secret key** (starter med `sk_`) - HOLD DENNE HEMMELIG!

### 3. Oppdater koden
I `order.html` og `large-event.html`, finn denne linjen:
```javascript
const stripePublishableKey = 'YOUR_STRIPE_PUBLISHABLE_KEY';
```

Erstatt `YOUR_STRIPE_PUBLISHABLE_KEY` med din faktiske Stripe publishable key.

### 4. Deploy til Netlify
1. Last opp alle filer til Netlify (via drag-and-drop eller GitHub)
2. I Netlify Dashboard: **Site settings** → **Environment variables**
3. Legg til:
   - `STRIPE_SECRET_KEY` = din Stripe secret key
   - `URL` = din nettside URL (f.eks. `https://gambiandelights.netlify.app`)

### 5. Test betalingssystemet
- Bruk Stripe test-kort: `4242 4242 4242 4242`
- Test hele flyten fra bestilling til betaling
- Sjekk at du mottar e-post med bestillingsdetaljer

## Hvordan det fungerer

1. **Kunde fyller ut bestillingsskjema**
2. **System beregner 50% depositum** automatisk
3. **Kunde klikker "Submit Booking"**
4. **Kunde omdirigeres til Stripe Checkout** for å betale depositum
5. **Etter vellykket betaling:**
   - Kunde omdirigeres tilbake til nettsiden
   - Bestilling sendes automatisk til `gambiandelights@gmail.com` via Formspree
   - Du mottar e-post med alle bestillingsdetaljer og betalingsbekreftelse

## Viktig informasjon

- **Depositum**: 50% av total bestillingsverdi
- **Restbeløp**: 50% forfaller 3 dager før event
- **Valuta**: NOK (norske kroner)
- **Stripe-gebyr**: Ca. 1.4% + 1.25 kr per transaksjon i Norge
- **Utbetaling**: Penger sendes til din Stripe-konto, deretter kan du overføre til bankkonto

## Feilsøking

**Problem**: Betaling fungerer ikke
- Sjekk at Stripe API-nøkler er riktig satt
- Sjekk Netlify environment variables
- Sjekk browser console for feilmeldinger

**Problem**: Bestillinger kommer ikke i e-post
- Sjekk at Formspree-endpoint er riktig: `https://formspree.io/f/mrbnlnpe`
- Sjekk spam-mappen
- Test Formspree manuelt

**Problem**: Netlify Functions fungerer ikke
- Sjekk at `netlify/functions/` mappen er lastet opp
- Sjekk at `package.json` er lastet opp
- Sjekk Netlify Functions logs i dashboard

## Alternativ: Manuell betaling

Hvis du foretrekker å ikke bruke Stripe akkurat nå:
- Systemet vil fortsatt fungere og sende bestillinger til din e-post
- Du kan manuelt sende betalingsinstruksjoner til kunder
- Du kan bruke Vipps, bankoverføring, eller andre metoder

## Support

- Stripe dokumentasjon: [stripe.com/docs](https://stripe.com/docs)
- Netlify dokumentasjon: [docs.netlify.com](https://docs.netlify.com)
- Se også `STRIPE_SETUP_GUIDE.md` for detaljert guide

