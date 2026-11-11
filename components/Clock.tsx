"use client";
import { useEffect, useState } from "react";

export function useNow() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  return now;
}

const MONTHS = [
  "gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno",
  "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre",
];

/** Giorno dell'avvento "sbloccato": 0 prima di dicembre, 1-24 in dicembre, 24 dopo. */
export function adventDay(now: Date): number {
  const m = now.getMonth();
  if (m < 11) return 0;
  if (m > 11) return 24;
  return Math.min(now.getDate(), 24);
}

export default function Clock({ override }: { override?: number | null }) {
  const now = useNow();
  if (!now) return <div className="clock" />;
  const dayNum = override ?? now.getDate();
  const month = override != null ? "dicembre" : MONTHS[now.getMonth()];
  const time = now.toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" });
  return (
    <div className="clock">
      <div className="clock-day">
        {dayNum} <span>{month}</span>
      </div>
      <div className="clock-time">{time}</div>
    </div>
  );
}
