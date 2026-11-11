"use client";
import { useEffect, useState } from "react";
import Cats from "./Cats";
import Character, { Mood } from "./Character";
import Clock, { adventDay, useNow } from "./Clock";
import { messages } from "../data/messages";

const STORAGE_KEY = "advent-opened";

export default function Calendar({ admin = false }: { admin?: boolean }) {
  const now = useNow();
  const [simDay, setSimDay] = useState<number | null>(null); // solo admin
  const [mood, setMood] = useState<Mood>("idle");
  const [opened, setOpened] = useState<number[]>([]);
  const [modal, setModal] = useState<number | null>(null);

  useEffect(() => {
    if (admin) return; // l'admin non salva nulla
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setOpened(JSON.parse(raw));
    } catch {}
  }, [admin]);

  const today = admin && simDay != null ? simDay : now ? adventDay(now) : 0;

  function resetMoodLater() {
    setTimeout(() => setMood("idle"), 2200);
  }

  function click(day: number) {
    if (day > today) {
      // casella sbagliata (non ancora disponibile)
      setMood("sad");
      resetMoodLater();
      return;
    }
    setMood("happy");
    resetMoodLater();
    setModal(day);
    if (!admin && !opened.includes(day)) {
      const next = [...opened, day];
      setOpened(next);
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch {}
    }
  }

  const content = modal ? messages[modal] : null;

  return (
    <main className="page">
      <Clock override={admin && simDay != null && simDay > 0 ? simDay : null} />
      <Character mood={mood} />

      {admin && (
        <div className="admin-bar">
          <label>
            Simula giorno: <b>{simDay ?? "reale"}</b>
            <input
              type="range" min={0} max={24}
              value={simDay ?? today}
              onChange={(e) => setSimDay(Number(e.target.value))}
            />
          </label>
          <button onClick={() => setSimDay(null)}>Usa data reale</button>
          <button onClick={() => setModal(0)} hidden />
        </div>
      )}

      <h1 className="title">🎄 Calendario dell'Avvento 🎄</h1>

      <div className="grid">
        {Array.from({ length: 24 }, (_, i) => i + 1).map((d) => {
          const locked = d > today;
          const isToday = d === today;
          const isOpen = opened.includes(d);
          return (
            <button
              key={d}
              className={`door ${locked ? "locked" : ""} ${isToday ? "today" : ""} ${isOpen ? "open" : ""}`}
              onClick={() => click(d)}
              aria-label={`Giorno ${d}`}
            >
              <span className="num">{d}</span>
              {locked && <span className="lock">🔒</span>}
              {isOpen && !locked && <span className="lock">🎁</span>}
            </button>
          );
        })}
      </div>

      {content && modal! > 0 && (
        <div className="overlay" onClick={() => setModal(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-day">{modal} dicembre</div>
            <p className="modal-msg">{content.message}</p>
            {content.gift && <p className="modal-gift">🎁 {content.gift}</p>}
            <button onClick={() => setModal(null)}>Chiudi</button>
          </div>
        </div>
      )}

      <Cats />
    </main>
  );
}
