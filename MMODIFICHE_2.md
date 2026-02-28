# Log delle Modifiche - Fase 2

## 1. Navigazione e Struttura
- **Nuova Pagina "Chi Siamo"**: Creata una pagina professionale (`AboutUs.tsx`) che racconta la storia dell'officina dal 1982, integrando valori di heritage e innovazione.
- **Routing**: Aggiornato `App.tsx` per includere la rotta `/about`.
- **Header**: Aggiornati i link di navigazione per supportare la navigazione fluida (SPA) tra la Home e la nuova pagina "Chi Siamo".

## 2. Interattività e UX
- **Servizi Funzionanti**: I card dei servizi ora sono cliccabili. All'apertura mostrano un **modal/dialog moderno** con dettagli specifici per ogni competenza (es. Meccatronica, Carrozzeria, etc.).
- **Design dei Bottoni**: Modificato il raggio di curvatura globale dei bottoni (`rounded-full`) in tutto il sito per un look più moderno, morbido e premium.

## 3. Design System
- **Radius Globale**: Aggiornata la variabile `--radius` nel CSS per uniformare la rotondità di tutti i componenti interattivi.
- **Transizioni**: Ottimizzate le transizioni dei bottoni per una risposta più fluida al passaggio del mouse.
