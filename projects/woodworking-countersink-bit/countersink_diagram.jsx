import { useState } from "react";

const COLORS = {
  body: "#8A8D8F",
  bodyDark: "#5C5F61",
  bodyHighlight: "#B0B3B5",
  collar: "#1A1A1A",
  collarHighlight: "#333333",
  cam: "#7A7D7F",
  camHighlight: "#9A9D9F",
  foot: "#E8E4DF",
  footCarrier: "#A0A3A5",
  uhmw: "#F5F0E8",
  bearing: "#D4A017",
  bearingInner: "#C49510",
  cutter: "#6B6E70",
  cutterCarbide: "#4A4D4F",
  drill: "#9CA0A3",
  collet: "#8A8D8F",
  colletNut: "#C5A55A",
  ratchet: "#555555",
  spring: "#7A7A7A",
  snapRing: "#3A3A3A",
  hex: "#6A6D6F",
  bg: "#0D1117",
  text: "#E6EDF3",
  textDim: "#7D8590",
  accent: "#58A6FF",
  accentDim: "#1F6FEB",
  grid: "#161B22",
  gridLine: "#21262D",
};

function AssembledView() {
  return (
    <svg viewBox="0 0 400 600" style={{ width: "100%", maxWidth: 400 }}>
      <defs>
        <linearGradient id="bodyGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={COLORS.bodyDark} />
          <stop offset="35%" stopColor={COLORS.bodyHighlight} />
          <stop offset="65%" stopColor={COLORS.body} />
          <stop offset="100%" stopColor={COLORS.bodyDark} />
        </linearGradient>
        <linearGradient id="collarGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#111" />
          <stop offset="30%" stopColor={COLORS.collarHighlight} />
          <stop offset="70%" stopColor={COLORS.collar} />
          <stop offset="100%" stopColor="#111" />
        </linearGradient>
        <linearGradient id="footGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#C8C3BB" />
          <stop offset="35%" stopColor={COLORS.uhmw} />
          <stop offset="65%" stopColor={COLORS.foot} />
          <stop offset="100%" stopColor="#C8C3BB" />
        </linearGradient>
        <linearGradient id="brassGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#8B7335" />
          <stop offset="35%" stopColor="#D4AA4F" />
          <stop offset="65%" stopColor={COLORS.colletNut} />
          <stop offset="100%" stopColor="#8B7335" />
        </linearGradient>
        <linearGradient id="cutterGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#3A3D3F" />
          <stop offset="35%" stopColor="#7A7D7F" />
          <stop offset="65%" stopColor={COLORS.cutter} />
          <stop offset="100%" stopColor="#3A3D3F" />
        </linearGradient>
        <filter id="shadow">
          <feDropShadow dx="3" dy="3" stdDeviation="4" floodOpacity="0.4" />
        </filter>
      </defs>

      {/* Title */}
      <text x="200" y="30" textAnchor="middle" fill={COLORS.accent} fontSize="14" fontFamily="monospace" fontWeight="bold">ASSEMBLED VIEW</text>

      <g transform="translate(200, 310)" filter="url(#shadow)">
        {/* Hex Shank */}
        <rect x="-18" y="-250" width="36" height="70" fill={COLORS.hex} rx="2" />
        <polygon points="-14,-250 14,-250 18,-246 18,-184 14,-180 -14,-180 -18,-184 -18,-246" fill="url(#bodyGrad)" />
        <text x="30" y="-215" fill={COLORS.textDim} fontSize="9" fontFamily="monospace">1/4" HEX SHANK</text>
        <line x1="20" y1="-215" x2="28" y2="-215" stroke={COLORS.textDim} strokeWidth="0.5" />

        {/* Main Body Upper */}
        <rect x="-28" y="-180" width="56" height="80" fill="url(#bodyGrad)" rx="3" />
        {/* Engraved lines on body */}
        {[...Array(8)].map((_, i) => (
          <line key={i} x1="-28" y1={-175 + i * 10} x2="-22" y2={-175 + i * 10} stroke="#999" strokeWidth="0.3" />
        ))}
        <text x="42" y="-140" fill={COLORS.textDim} fontSize="8" fontFamily="monospace">INDEX MARKS</text>
        <line x1="30" y1="-140" x2="40" y2="-140" stroke={COLORS.textDim} strokeWidth="0.5" />

        {/* Reading Window Flat */}
        <rect x="-30" y="-155" width="5" height="20" fill="#666" rx="1" />
        <line x1="-27.5" y1="-155" x2="-27.5" y2="-135" stroke="#FF4444" strokeWidth="0.8" />

        {/* Cam Lever */}
        <g transform="translate(28, -130)">
          <ellipse cx="0" cy="0" rx="6" ry="4" fill={COLORS.cam} stroke="#555" strokeWidth="0.5" />
          <rect x="-3" y="-20" width="6" height="20" fill="url(#bodyGrad)" rx="2" />
          <circle cx="0" cy="-20" r="5" fill={COLORS.camHighlight} stroke="#555" strokeWidth="0.5" />
          <text x="18" y="-10" fill={COLORS.accent} fontSize="8" fontFamily="monospace" fontWeight="bold">CAM LEVER</text>
          <text x="18" y="0" fill={COLORS.textDim} fontSize="7" fontFamily="monospace">(FLIP TO UNLOCK)</text>
        </g>

        {/* Depth Collar */}
        <rect x="-38" y="-100" width="76" height="45" fill="url(#collarGrad)" rx="4" />
        {/* Knurl pattern */}
        {[...Array(20)].map((_, i) => (
          <line key={`k${i}`} x1={-36 + i * 3.8} y1="-100" x2={-36 + i * 3.8} y2="-55" stroke="#2A2A2A" strokeWidth="0.5" />
        ))}
        {/* Graduation marks */}
        {[...Array(12)].map((_, i) => (
          <line key={`g${i}`} x1={-36 + i * 6.3} y1="-55" x2={-36 + i * 6.3} y2="-60" stroke="#888" strokeWidth="0.3" />
        ))}
        <text x="-55" y="-75" fill={COLORS.accent} fontSize="8" fontFamily="monospace" fontWeight="bold" transform="rotate(-90, -55, -75)">60 CLICK COLLAR</text>

        {/* Body Lower (threaded zone) */}
        <rect x="-28" y="-55" width="56" height="30" fill="url(#bodyGrad)" rx="2" />

        {/* Datum Shoulder */}
        <rect x="-32" y="-25" width="64" height="6" fill={COLORS.body} stroke="#666" strokeWidth="0.5" />
        <text x="-70" y="-20" fill="#FF6B6B" fontSize="7" fontFamily="monospace" fontWeight="bold">FIXED DATUM ▶</text>

        {/* Bearing Zone */}
        <rect x="-30" y="-19" width="60" height="8" fill={COLORS.bearing} rx="1" />
        <rect x="-30" y="-11" width="60" height="8" fill={COLORS.bearing} rx="1" />

        {/* Foot Carrier */}
        <rect x="-34" y="-3" width="68" height="15" fill={COLORS.footCarrier} rx="3" />
        {/* Chip ejection slots */}
        <rect x="-15" y="-3" width="4" height="15" fill={COLORS.bg} />
        <rect x="11" y="-3" width="4" height="15" fill={COLORS.bg} />

        {/* UHMW Foot */}
        <rect x="-38" y="12" width="76" height="10" fill="url(#footGrad)" rx="3" />
        <text x="48" y="20" fill={COLORS.textDim} fontSize="8" fontFamily="monospace">UHMW FOOT</text>
        <line x1="40" y1="18" x2="46" y2="18" stroke={COLORS.textDim} strokeWidth="0.5" />

        {/* Snap Ring */}
        <rect x="-26" y="22" width="52" height="3" fill={COLORS.snapRing} rx="1" />

        {/* Cutter Head */}
        <path d="M-20,25 L-25,35 L-28,55 L-20,80 L20,80 L28,55 L25,35 L20,25 Z" fill="url(#cutterGrad)" />
        {/* Carbide tips */}
        <rect x="-28" y="50" width="8" height="6" fill={COLORS.cutterCarbide} rx="1" transform="rotate(-10, -24, 53)" />
        <rect x="20" y="50" width="8" height="6" fill={COLORS.cutterCarbide} rx="1" transform="rotate(10, 24, 53)" />
        <text x="40" y="55" fill={COLORS.textDim} fontSize="8" fontFamily="monospace">CARBIDE CUTTER</text>

        {/* Knurled Nut */}
        <rect x="-14" y="80" width="28" height="12" fill="url(#brassGrad)" rx="2" />
        {[...Array(8)].map((_, i) => (
          <line key={`n${i}`} x1={-12 + i * 3.5} y1="80" x2={-12 + i * 3.5} y2="92" stroke="#9A7A3A" strokeWidth="0.5" />
        ))}
        <text x="22" y="90" fill={COLORS.colletNut} fontSize="7" fontFamily="monospace">KNURLED NUT</text>

        {/* Drill Bit */}
        <rect x="-2.5" y="92" width="5" height="60" fill={COLORS.drill} rx="1" />
        {/* Drill point */}
        <polygon points="-2.5,152 0,165 2.5,152" fill={COLORS.drill} />
        {/* Flute lines */}
        <line x1="-1" y1="95" x2="1" y2="150" stroke="#B0B3B5" strokeWidth="0.3" />
        <line x1="1" y1="95" x2="-1" y2="150" stroke="#B0B3B5" strokeWidth="0.3" />
        <text x="12" y="130" fill={COLORS.textDim} fontSize="8" fontFamily="monospace">HSS DRILL BIT</text>
      </g>
    </svg>
  );
}

function ExplodedView() {
  const parts = [
    { y: 0, label: "1/4\" HEX SHANK", sublabel: "303 Stainless Steel" },
    { y: 70, label: "MAIN BODY", sublabel: "303 SS, threaded exterior" },
    { y: 150, label: "CAM LOCK LEVER", sublabel: "17-4 PH Stainless" },
    { y: 200, label: "DEPTH COLLAR w/ RATCHET RING", sublabel: "6061-T6 AL + 1095 Spring Steel" },
    { y: 280, label: "SPRING PAWL", sublabel: "Music Wire 0.032\"" },
    { y: 315, label: "DATUM SHOULDER", sublabel: "Machined into body" },
    { y: 350, label: "6701-ZZ BEARINGS (x2)", sublabel: "12x18x4mm Sealed" },
    { y: 400, label: "FOOT CARRIER + UHMW RING", sublabel: "6061 AL + UHMW-PE" },
    { y: 450, label: "INTERNAL SNAP RING", sublabel: "3/4\" bore retaining" },
    { y: 490, label: "CUTTER HEAD (1/4\"-28)", sublabel: "Brazed Carbide, 82°" },
    { y: 550, label: "SPLIT COLLET", sublabel: "303 SS, 7° taper" },
    { y: 590, label: "KNURLED COLLET NUT", sublabel: "C360 Brass" },
    { y: 640, label: "HSS DRILL BIT", sublabel: "3mm straight shank" },
  ];

  return (
    <svg viewBox="0 0 500 720" style={{ width: "100%", maxWidth: 500 }}>
      <text x="250" y="25" textAnchor="middle" fill={COLORS.accent} fontSize="14" fontFamily="monospace" fontWeight="bold">EXPLODED VIEW — BESPOKE PRECISION CLICK-LOCK</text>

      {/* Center line */}
      <line x1="180" y1="40" x2="180" y2="700" stroke={COLORS.gridLine} strokeWidth="1" strokeDasharray="4,4" />

      <g transform="translate(0, 35)">
        {/* Part 1: Hex Shank */}
        <polygon points="166,0 194,0 198,5 198,50 194,55 166,55 162,50 162,5" fill="url(#bodyGrad2)" />
        
        {/* Part 2: Main Body */}
        <rect x="152" y="70" width="56" height="65" fill="url(#bodyGrad2)" rx="3" />
        {[...Array(6)].map((_, i) => (
          <line key={i} x1="152" y1={75 + i * 10} x2="158" y2={75 + i * 10} stroke="#999" strokeWidth="0.3" />
        ))}
        {/* Thread indication */}
        {[...Array(8)].map((_, i) => (
          <line key={`t${i}`} x1="152" y1={107 + i * 3.5} x2="208" y2={107 + i * 3.5} stroke="#AAA" strokeWidth="0.2" strokeDasharray="1,2" />
        ))}

        {/* Part 3: Cam Lever */}
        <g transform="translate(210, 155)">
          <rect x="-4" y="-15" width="8" height="25" fill={COLORS.cam} rx="2" />
          <circle cx="0" cy="-15" r="6" fill={COLORS.camHighlight} stroke="#666" strokeWidth="0.5" />
          <ellipse cx="0" cy="12" rx="7" ry="4" fill={COLORS.cam} stroke="#555" strokeWidth="0.5" />
        </g>

        {/* Part 4: Depth Collar + Ratchet */}
        <rect x="142" y="200" width="76" height="40" fill="url(#collarGrad2)" rx="4" />
        {[...Array(20)].map((_, i) => (
          <line key={`dk${i}`} x1={144 + i * 3.8} y1="200" x2={144 + i * 3.8} y2="240" stroke="#2A2A2A" strokeWidth="0.5" />
        ))}
        {/* Ratchet ring visible on top */}
        <rect x="145" y="195" width="70" height="5" fill={COLORS.ratchet} rx="1" />
        {[...Array(30)].map((_, i) => (
          <line key={`r${i}`} x1={146 + i * 2.3} y1="195" x2={147 + i * 2.3} y2="200" stroke="#777" strokeWidth="0.3" />
        ))}

        {/* Part 5: Spring Pawl */}
        <path d="M165,280 Q175,270 180,280 Q185,290 175,285 Z" fill={COLORS.spring} stroke="#999" strokeWidth="0.5" />
        <line x1="175" y1="285" x2="175" y2="295" stroke={COLORS.spring} strokeWidth="1.5" />

        {/* Part 6: Datum Shoulder */}
        <rect x="148" y="315" width="64" height="8" fill={COLORS.body} stroke="#888" strokeWidth="1" />
        <line x1="148" y1="319" x2="212" y2="319" stroke="#FF4444" strokeWidth="1" strokeDasharray="3,2" />

        {/* Part 7: Bearings */}
        <g transform="translate(180, 360)">
          <ellipse cx="0" cy="-5" rx="28" ry="6" fill="none" stroke={COLORS.bearing} strokeWidth="2" />
          <ellipse cx="0" cy="-5" rx="14" ry="3" fill="none" stroke={COLORS.bearingInner} strokeWidth="1.5" />
          <ellipse cx="0" cy="5" rx="28" ry="6" fill="none" stroke={COLORS.bearing} strokeWidth="2" />
          <ellipse cx="0" cy="5" rx="14" ry="3" fill="none" stroke={COLORS.bearingInner} strokeWidth="1.5" />
        </g>

        {/* Part 8: Foot Carrier + UHMW */}
        <rect x="146" y="395" width="68" height="14" fill={COLORS.footCarrier} rx="3" />
        <rect x="-15" y="395" width="4" height="14" fill={COLORS.bg} transform="translate(180,0)" />
        <rect x="142" y="409" width="76" height="10" fill={COLORS.uhmw} rx="3" stroke="#CCC" strokeWidth="0.5" />

        {/* Part 9: Snap Ring */}
        <ellipse cx="180" cy="450" rx="24" ry="5" fill="none" stroke={COLORS.snapRing} strokeWidth="3" />
        <rect x="178" y="445" width="4" height="10" fill={COLORS.bg} />

        {/* Part 10: Cutter Head */}
        <path d="M160,490 L155,500 L150,520 L158,540 L202,540 L210,520 L205,500 L200,490 Z" fill="url(#cutterGrad2)" />
        {/* Carbide inserts */}
        <rect x="150" y="515" width="8" height="5" fill={COLORS.cutterCarbide} rx="1" />
        <rect x="202" y="515" width="8" height="5" fill={COLORS.cutterCarbide} rx="1" />
        {/* Thread indication at top */}
        {[...Array(4)].map((_, i) => (
          <line key={`ct${i}`} x1="160" y1={492 + i * 3} x2="200" y2={492 + i * 3} stroke="#888" strokeWidth="0.3" strokeDasharray="1,2" />
        ))}

        {/* Part 11: Split Collet */}
        <path d="M170,555 L167,565 L168,575 L172,578 L188,578 L192,575 L193,565 L190,555 Z" fill={COLORS.collet} />
        {/* Split lines */}
        <line x1="176" y1="555" x2="175" y2="578" stroke={COLORS.bg} strokeWidth="0.8" />
        <line x1="184" y1="555" x2="185" y2="578" stroke={COLORS.bg} strokeWidth="0.8" />

        {/* Part 12: Knurled Nut */}
        <rect x="166" y="590" width="28" height="14" fill="url(#brassGrad2)" rx="2" />
        {[...Array(8)].map((_, i) => (
          <line key={`bn${i}`} x1={168 + i * 3.5} y1="590" x2={168 + i * 3.5} y2="604" stroke="#9A7A3A" strokeWidth="0.5" />
        ))}

        {/* Part 13: Drill Bit */}
        <rect x="177" y="620" width="6" height="50" fill={COLORS.drill} rx="1" />
        <polygon points="177,670 180,685 183,670" fill={COLORS.drill} />

        {/* Labels */}
        {parts.map((part, i) => (
          <g key={i}>
            <line x1="220" y1={part.y + 8} x2="260" y2={part.y + 8} stroke={COLORS.gridLine} strokeWidth="0.5" />
            <text x="265" y={part.y + 6} fill={COLORS.text} fontSize="8" fontFamily="monospace" fontWeight="bold">{part.label}</text>
            <text x="265" y={part.y + 16} fill={COLORS.textDim} fontSize="7" fontFamily="monospace">{part.sublabel}</text>
          </g>
        ))}

        {/* Part numbers */}
        {parts.map((part, i) => (
          <g key={`num${i}`}>
            <circle cx="130" cy={part.y + 8} r="8" fill={COLORS.accentDim} />
            <text x="130" y={part.y + 12} textAnchor="middle" fill="white" fontSize="8" fontFamily="monospace" fontWeight="bold">{i + 1}</text>
            <line x1="138" y1={part.y + 8} x2="150" y2={part.y + 8} stroke={COLORS.accentDim} strokeWidth="0.5" strokeDasharray="2,2" />
          </g>
        ))}
      </g>

      <defs>
        <linearGradient id="bodyGrad2" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={COLORS.bodyDark} />
          <stop offset="35%" stopColor={COLORS.bodyHighlight} />
          <stop offset="65%" stopColor={COLORS.body} />
          <stop offset="100%" stopColor={COLORS.bodyDark} />
        </linearGradient>
        <linearGradient id="collarGrad2" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#111" />
          <stop offset="30%" stopColor={COLORS.collarHighlight} />
          <stop offset="70%" stopColor={COLORS.collar} />
          <stop offset="100%" stopColor="#111" />
        </linearGradient>
        <linearGradient id="cutterGrad2" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#3A3D3F" />
          <stop offset="35%" stopColor="#7A7D7F" />
          <stop offset="65%" stopColor={COLORS.cutter} />
          <stop offset="100%" stopColor="#3A3D3F" />
        </linearGradient>
        <linearGradient id="brassGrad2" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#8B7335" />
          <stop offset="35%" stopColor="#D4AA4F" />
          <stop offset="65%" stopColor={COLORS.colletNut} />
          <stop offset="100%" stopColor="#8B7335" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function CountersinkDiagram() {
  const [view, setView] = useState("assembled");

  return (
    <div style={{
      background: COLORS.bg,
      minHeight: "100vh",
      padding: "20px",
      fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
      color: COLORS.text,
    }}>
      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <h1 style={{
          fontSize: 22,
          fontWeight: 800,
          letterSpacing: 4,
          color: COLORS.text,
          margin: "0 0 4px 0",
        }}>BESPOKE PRECISION CLICK-LOCK</h1>
        <p style={{ color: COLORS.textDim, fontSize: 12, margin: "0 0 16px 0", letterSpacing: 2 }}>
          COUNTERSINK SYSTEM — ENGINEERING DIAGRAM
        </p>

        <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
          {["assembled", "exploded"].map(v => (
            <button
              key={v}
              onClick={() => setView(v)}
              style={{
                padding: "8px 20px",
                border: `1px solid ${view === v ? COLORS.accent : COLORS.gridLine}`,
                background: view === v ? COLORS.accentDim : "transparent",
                color: view === v ? "white" : COLORS.textDim,
                borderRadius: 6,
                cursor: "pointer",
                fontSize: 11,
                fontFamily: "inherit",
                letterSpacing: 2,
                textTransform: "uppercase",
                fontWeight: view === v ? "bold" : "normal",
                transition: "all 0.2s",
              }}
            >
              {v} VIEW
            </button>
          ))}
        </div>
      </div>

      <div style={{
        background: COLORS.grid,
        borderRadius: 12,
        border: `1px solid ${COLORS.gridLine}`,
        padding: 20,
        maxWidth: 520,
        margin: "0 auto",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Grid pattern background */}
        <div style={{
          position: "absolute", inset: 0, opacity: 0.15,
          backgroundImage: `linear-gradient(${COLORS.gridLine} 1px, transparent 1px), linear-gradient(90deg, ${COLORS.gridLine} 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }} />

        <div style={{ position: "relative", zIndex: 1 }}>
          {view === "assembled" ? <AssembledView /> : <ExplodedView />}
        </div>
      </div>

      <div style={{
        maxWidth: 520,
        margin: "16px auto 0",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 8,
      }}>
        {[
          { icon: "⚙️", title: "60 CLICKS/REV", desc: "0.017mm resolution" },
          { icon: "🔒", title: "CAM LEVER LOCK", desc: "No magnets, no tools" },
          { icon: "📐", title: "FIXED DATUM", desc: "Depth survives bit swap" },
          { icon: "🛡️", title: "UHMW FOOT", desc: "Zero marring guaranteed" },
        ].map((item, i) => (
          <div key={i} style={{
            background: COLORS.grid,
            border: `1px solid ${COLORS.gridLine}`,
            borderRadius: 8,
            padding: "10px 12px",
          }}>
            <div style={{ fontSize: 16 }}>{item.icon}</div>
            <div style={{ fontSize: 10, fontWeight: "bold", color: COLORS.accent, letterSpacing: 1, marginTop: 4 }}>{item.title}</div>
            <div style={{ fontSize: 9, color: COLORS.textDim }}>{item.desc}</div>
          </div>
        ))}
      </div>

      <p style={{
        textAlign: "center",
        color: COLORS.textDim,
        fontSize: 10,
        marginTop: 16,
        letterSpacing: 1,
      }}>
        BESPOKE WOODCRAFT STUDIO © 2026 — FOR PROTOTYPE USE ONLY
      </p>
    </div>
  );
}
