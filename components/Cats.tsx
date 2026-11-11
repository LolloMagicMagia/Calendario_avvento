"use client";

// Gatti che camminano in basso. Di default sono SVG animati con CSS.
// Per usare le tue GIF: metti i file in public/cats/ (es. cat1.gif) e
// aggiungi i nomi nella lista GIFS qui sotto.
const GIFS: string[] = []; // es. ["cat1.gif", "cat2.gif"]

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

function SvgCat({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 120 70" width="90" height="52" aria-hidden>
      <path className="tail" d="M10 40 Q-5 20 14 14" stroke={color} strokeWidth="7" fill="none" strokeLinecap="round" />
      <ellipse cx="50" cy="42" rx="36" ry="17" fill={color} />
      <circle cx="92" cy="32" r="16" fill={color} />
      <polygon points="80,22 82,6 92,18" fill={color} />
      <polygon points="104,22 106,6 94,18" fill={color} />
      <circle cx="87" cy="31" r="2.5" fill="#222" />
      <circle cx="98" cy="31" r="2.5" fill="#222" />
      <polygon points="91,36 95,36 93,39" fill="#ff8aa0" />
      <rect className="leg l1" x="24" y="52" width="7" height="16" rx="3" fill={color} />
      <rect className="leg l2" x="38" y="52" width="7" height="16" rx="3" fill={color} />
      <rect className="leg l3" x="60" y="52" width="7" height="16" rx="3" fill={color} />
      <rect className="leg l4" x="74" y="52" width="7" height="16" rx="3" fill={color} />
    </svg>
  );
}

const COLORS = ["#3b2a2a", "#e0a96d", "#8a8a8a", "#f4efe6"];

export default function Cats() {
  const items = GIFS.length
    ? GIFS.map((g, i) => (
        <div key={g} className={`walker w${i % 4}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${BASE}/cats/${g}`} alt="gatto" height={70} />
        </div>
      ))
    : COLORS.map((c, i) => (
        <div key={c} className={`walker w${i}`}>
          <SvgCat color={c} />
        </div>
      ));
  return <div className="cats">{items}</div>;
}
