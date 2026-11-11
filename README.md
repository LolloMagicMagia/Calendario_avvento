# Calendario dell'Avvento 🎄

Next.js (export statico) pronto per GitHub Pages.

## Pagine
- `/` → versione per la tua ragazza: può aprire solo i giorni passati e quello corrente. Cliccando una casella futura il personaggio mostra disappunto 😾; una casella valida lo rende felice 🎉.
- `/admin` → area di test (password in `data/messages.ts`): slider per simulare qualsiasi giorno, nessun salvataggio.

## Personalizzare
- **Frasi e regali**: modifica `data/messages.ts` (una voce per giorno, 1-24).
- **Password admin**: `ADMIN_PASSWORD` nello stesso file.
- **GIF di gatti**: metti i file in `public/cats/` e aggiungi i nomi nell'array `GIFS` in `components/Cats.tsx`. Senza GIF, camminano dei gatti SVG animati.

## Sviluppo
```
npm install
npm run dev
```

## Pubblicare su GitHub Pages
1. Crea un repo e fai push su `main`.
2. Su GitHub: Settings → Pages → Source: **GitHub Actions**.
3. Il workflow `.github/workflows/deploy.yml` builda e pubblica (imposta da solo il base path col nome del repo).

## Nota
Essendo un sito statico, frasi e password sono nel codice JavaScript: chi sa guardare i sorgenti può leggerle in anticipo. Va bene per una sorpresa romantica, non per segreti veri.
