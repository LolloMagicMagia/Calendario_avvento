// Modifica qui le frasi: una per ogni giorno (1-24).
// Ogni giorno ha la frase che appare al click e, opzionalmente, un "hint" sul regalo.
export type DayContent = {
  message: string;
  gift?: string;
};

export const messages: Record<number, DayContent> = {
  1: { message: "Buon primo dicembre, amore! Oggi inizia la nostra magia 🎄", gift: "Un piccolo dolce da gustare insieme" },
  2: { message: "Ogni giorno con te è un regalo, ma oggi ce n'è uno in più 🎁", gift: "Qualcosa di caldo per le serate fredde" },
  3: { message: "Scrivi qui la frase del 3 dicembre", gift: "Regalo del 3" },
  4: { message: "Scrivi qui la frase del 4 dicembre", gift: "Regalo del 4" },
  5: { message: "Scrivi qui la frase del 5 dicembre", gift: "Regalo del 5" },
  6: { message: "Scrivi qui la frase del 6 dicembre", gift: "Regalo del 6" },
  7: { message: "Scrivi qui la frase del 7 dicembre", gift: "Regalo del 7" },
  8: { message: "Scrivi qui la frase dell'8 dicembre", gift: "Regalo dell'8" },
  9: { message: "Scrivi qui la frase del 9 dicembre", gift: "Regalo del 9" },
  10: { message: "Scrivi qui la frase del 10 dicembre", gift: "Regalo del 10" },
  11: { message: "Scrivi qui la frase dell'11 dicembre", gift: "Regalo dell'11" },
  12: { message: "Scrivi qui la frase del 12 dicembre", gift: "Regalo del 12" },
  13: { message: "Scrivi qui la frase del 13 dicembre", gift: "Regalo del 13" },
  14: { message: "Scrivi qui la frase del 14 dicembre", gift: "Regalo del 14" },
  15: { message: "Scrivi qui la frase del 15 dicembre", gift: "Regalo del 15" },
  16: { message: "Scrivi qui la frase del 16 dicembre", gift: "Regalo del 16" },
  17: { message: "Scrivi qui la frase del 17 dicembre", gift: "Regalo del 17" },
  18: { message: "Scrivi qui la frase del 18 dicembre", gift: "Regalo del 18" },
  19: { message: "Scrivi qui la frase del 19 dicembre", gift: "Regalo del 19" },
  20: { message: "Scrivi qui la frase del 20 dicembre", gift: "Regalo del 20" },
  21: { message: "Scrivi qui la frase del 21 dicembre", gift: "Regalo del 21" },
  22: { message: "Scrivi qui la frase del 22 dicembre", gift: "Regalo del 22" },
  23: { message: "Scrivi qui la frase del 23 dicembre", gift: "Regalo del 23" },
  24: { message: "Vigilia di Natale: il regalo più grande sei tu ❤️", gift: "La sorpresa finale!" },
};

// Password dell'area admin (protezione leggera lato client, vedi README).
export const ADMIN_PASSWORD = "gattini";
