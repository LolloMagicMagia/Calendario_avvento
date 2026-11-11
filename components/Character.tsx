"use client";

export type Mood = "idle" | "happy" | "sad";

// Personaggio SVG: gattino-elfo con cappello. Cambia espressione in base al mood.
export default function Character({ mood }: { mood: Mood }) {
  return (
    <div className={`character mood-${mood}`} aria-live="polite">
      <svg viewBox="0 0 160 170" width="150" height="160" role="img" aria-label="personaggio">
        {/* cappello */}
        <polygon points="45,55 80,8 115,55" fill="#d62839" />
        <rect x="40" y="50" width="80" height="14" rx="7" fill="#fff" />
        <circle cx="80" cy="8" r="9" fill="#fff" />
        {/* orecchie */}
        <polygon points="38,70 34,38 62,58" fill="#f2b880" />
        <polygon points="122,70 126,38 98,58" fill="#f2b880" />
        {/* testa */}
        <ellipse cx="80" cy="102" rx="50" ry="44" fill="#f7c999" />
        {/* guance */}
        <circle cx="48" cy="112" r="8" fill="#ff9aa8" opacity=".6" />
        <circle cx="112" cy="112" r="8" fill="#ff9aa8" opacity=".6" />
        {/* occhi */}
        {mood === "happy" ? (
          <>
            <path d="M52 94 Q62 82 72 94" stroke="#333" strokeWidth="4" fill="none" strokeLinecap="round" />
            <path d="M88 94 Q98 82 108 94" stroke="#333" strokeWidth="4" fill="none" strokeLinecap="round" />
          </>
        ) : mood === "sad" ? (
          <>
            <path d="M52 92 L72 98" stroke="#333" strokeWidth="4" strokeLinecap="round" />
            <path d="M108 92 L88 98" stroke="#333" strokeWidth="4" strokeLinecap="round" />
            <ellipse cx="62" cy="104" rx="3" ry="5" fill="#6ec1ff" />
          </>
        ) : (
          <>
            <circle cx="62" cy="94" r="6" fill="#333" />
            <circle cx="98" cy="94" r="6" fill="#333" />
            <circle cx="64" cy="92" r="2" fill="#fff" />
            <circle cx="100" cy="92" r="2" fill="#fff" />
          </>
        )}
        {/* naso */}
        <polygon points="75,108 85,108 80,115" fill="#e8657a" />
        {/* bocca */}
        {mood === "happy" ? (
          <path d="M66 118 Q80 136 94 118" stroke="#333" strokeWidth="3" fill="#e8657a" strokeLinecap="round" />
        ) : mood === "sad" ? (
          <path d="M68 130 Q80 118 92 130" stroke="#333" strokeWidth="3" fill="none" strokeLinecap="round" />
        ) : (
          <path d="M68 120 Q74 126 80 120 Q86 126 92 120" stroke="#333" strokeWidth="3" fill="none" strokeLinecap="round" />
        )}
        {/* baffi */}
        <g stroke="#555" strokeWidth="2" strokeLinecap="round">
          <line x1="30" y1="112" x2="52" y2="116" />
          <line x1="30" y1="122" x2="52" y2="120" />
          <line x1="130" y1="112" x2="108" y2="116" />
          <line x1="130" y1="122" x2="108" y2="120" />
        </g>
      </svg>
      <div className="bubble">
        {mood === "happy" && "Siii, quella giusta! 🎉"}
        {mood === "sad" && "Nooo… non ancora! 😾"}
        {mood === "idle" && "Quale casella aprirai oggi?"}
      </div>
    </div>
  );
}
