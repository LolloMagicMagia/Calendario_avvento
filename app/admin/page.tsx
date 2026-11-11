"use client";
import { useEffect, useState } from "react";
import Calendar from "../../components/Calendar";
import { ADMIN_PASSWORD } from "../../data/messages";

export default function AdminPage() {
  const [ok, setOk] = useState(false);
  const [pw, setPw] = useState("");
  const [err, setErr] = useState(false);

  useEffect(() => {
    try { if (sessionStorage.getItem("advent-admin") === "1") setOk(true); } catch {}
  }, []);

  if (ok) return <Calendar admin />;

  return (
    <main className="page login">
      <form
        className="modal"
        onSubmit={(e) => {
          e.preventDefault();
          if (pw === ADMIN_PASSWORD) {
            try { sessionStorage.setItem("advent-admin", "1"); } catch {}
            setOk(true);
          } else setErr(true);
        }}
      >
        <h2>Area admin</h2>
        <input type="password" value={pw} onChange={(e) => setPw(e.target.value)} placeholder="Password" autoFocus />
        {err && <p className="err">Password errata</p>}
        <button type="submit">Entra</button>
      </form>
    </main>
  );
}
