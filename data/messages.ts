// Modifica qui le frasi: una per ogni giorno (1-24).
// Ogni giorno ha la frase che appare al click e, opzionalmente, un "hint" sul regalo.
export type DayContent = {
  message: string;
  gift?: string;
};

export const messages: Record<number, DayContent> = {
  1: { message: "Questo, è l'inizio del tuo avvento ❤️", gift: "Ogni pezzo trovato in giro, rappresenta la nostra sinfonia" },
  2: { message: "Prima volta che ci siamo visti, imbarazzo, profumo, oscurità, silenzio 🎁", gift: "Lo scoprirai sta sera" },
  3: { message: "Ciò che ci circonda è lo specchio di se stessi, quindi voglio migliorarlo", gift: "Regalo numero 1" },
  4: { message: "E come i gatti, buttano dal tavolo gli oggetti, questo che cosa?", gift: "Regalo numero 2" },
  5: { message: "I cerchi nel grano ti stanno prendendo per colpa mia, voglio rimediare", gift: "Regalo numero 3 - bellina la tua pellina " },
  6: { message: "Le foto rappresentano l'attimo? Oppure meglio viverlo? O entrambe?", gift: "🚗" },
  7: { message: "I piccoli gesti come i risvegli sono tutti unici", gift: "Per te piccola mhhhh🥐" },
  8: { message: "Dato l'attimo, e avendolos anche vissuto, non sarebbe bello immortalarlo?", gift: "Regalo numero 4" },
  9: { message: "Questi fagioli sono magici! Vanno coltivati, non si sa mai dove siano.", gift: "Regalo numero 5" },
  10: { message: "Il tuo ordinamento mi imbarazza 😳", gift: "Regalo numero 6" },
  11: { message: "Oggi mi sento dolce, dolce come un bacino ❤️", gift: "Regalo numero 7" },
  12: { message: "Per quando vuoi rilassarti 🎁", gift: "Regalo numero 8 - non usare miraccomando" },
  13: { message: "Nei momenti di giù, cerca di parlarmene e farti aiutarti, ci sarò", gift: "Numero 8 + sdraiarti" },
  14: { message: "Voglio continuare a fare nuove esperienze", gift: "👨‍🍳" },
  15: { message: "La pianta prima di sbocciare ha bisogno di mettersi a nudo e questo secondo me è il motivo di un seme", gift: "Regalo numero 9" },
  16: { message: "L'organizzazione non è mai troppa 😤", gift: "Regalo numero 10" },
  17: { message: "Come i pinguini portano le pietre a chi amano, non dimenticano anche quali pietre guardano", gift: "Regalo numero 11"},
  18: { message: "Ci vediamo topOHHHH", gift: "Regalo numero 12"},
  19: { message: "Mi piace vederti lavorare e di conseguenza cercare di intromettermi", gift: "Regalo numero 13" },
  20: { message: "Perchè non provare a darci altri attimi da vivere?", gift: "Scegli dove vuoi andare" },
  21: { message: "Bisogna imparare dai propri errori vero?", gift: "Tiramisù farinoso? O forse no? 🤔" },
  22: { message: "Ogni tanto bisognerebbe ricordare le proprie avventure e da cosa sono partite", gift: "La sinfonia potrebbe cambiare, ma non la melodia" },
  23: { message: "Una bella tazza di caffe servirebbe proprio per leggere la sera", gift: "Regalo Numero 14" },
  24: { message: "Cosa hai sempre voluto avere per noi 2?", gift: "Una bella casa? Di marzapane per caso??" },
};

// Password dell'area admin (protezione leggera lato client, vedi README).
export const ADMIN_PASSWORD = "gattini";
