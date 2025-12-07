# Redeploy fra Production Deploy

## Hvis du ser "Open production deploy" eller "Production published"

1. **Klikk på "Open production deploy"** eller **"Production published"**
   - Dette tar deg til deploy-detaljene

2. **I deploy-detaljene, se etter:**
   - En knapp som heter **"Redeploy"** eller **"Trigger deploy"**
   - Eller tre prikker (⋯) eller et meny-ikon
   - Klikk på den

3. **Velg "Redeploy"** eller **"Clear cache and deploy site"**

4. **Vent til deploy er ferdig** (1-2 minutter)

---

## Alternativ: Hvis du ikke ser "Redeploy" knapp

Hvis du ikke ser en "Redeploy" knapp i deploy-detaljene:

### Bruk Drag and Drop i stedet:

1. **Gå tilbake til Deploys-siden**
2. **Se etter "Drag and drop your project folder here"**
3. **Dra hele "Gambian Delights" mappen** fra File Explorer
4. **Slip den inn** i det stiplede området
5. **Vent til deploy er ferdig**

---

## Etter Redeploy

Når deploy er ferdig:

1. **Vent 1-2 minutter** (for at environment variables skal lastes)
2. **Test betalingssystemet:**
   - Gå til: https://tiny-semifreddo-7fbe9b.netlify.app/order.html
   - Fyll ut en testbestilling
   - Bruk test-kort: `4242 4242 4242 4242`

---

## Hva du skal se

Etter redeploy skal du se:
- ✅ En ny deploy i listen
- ✅ "Production published" status
- ✅ "Deployed in Xs" melding

