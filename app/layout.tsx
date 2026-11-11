import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calendario dell'Avvento",
  description: "Un calendario dell'avvento pieno di sorprese",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
