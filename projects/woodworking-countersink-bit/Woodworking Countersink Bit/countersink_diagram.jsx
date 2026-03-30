import { useState, useCallback } from "react";

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
  highlight: "#58A6FF22",
  highlightStroke: "#58A6FF",
};

const PARTS_DATA = [
  { id: 1, label: '1/4" HEX SHANK', material: "303 Stainless Steel", detail: "Industry-standard quick-change interface" },
  { id: 2, label: "MAIN BODY", material: "303 SS, threaded exterior", detail: "Precision-ground bore, index marks for depth reading" },
  { id: 3, label: "CAM LOCK LEVER", material: "17-4 PH Stainless", detail: "Flip to unlock collar for depth adjustment" },
  { id: 4, label: "DEPTH COLLAR", material: "6061-T6 Aluminum, anodized", detail: "60 detent clicks per revolution (0.017mm/click)" },
  { id: 5, label: "RATCHET RING", material: "1095 Spring Steel", detail: "Provides tactile click feedback for collar rotation" },
  { id: 6, label: "SPRING PAWL", material: 'Music Wire 0.032"', detail: "Engages ratchet teeth, held by cam lever" },
  { id: 7, label: "DATUM SHOULDER", material: "Integral to body", detail: "Fixed reference — depth survives bit changes" },
  { id: 8, label: "BEARINGS (×2)", material: "6701-ZZ, 12×18×4mm sealed", detail: "Allows foot to remain stationary while cutter spins" },
  { id: 9, label: "FOOT CARRIER", material: "6061-T6 Aluminum", detail: "Chip ejection slots for clean countersinking" },
  { id: 10, label: "UHMW FOOT RING", material: "UHMW-PE", detail: "Zero-mar contact with workpiece surface" },
  { id: 11, label: "INTERNAL SNAP RING", material: '3/4" bore retaining ring', detail: "Retains bearings and foot assembly" },
  { id: 12, label: "CUTTER HEAD", material: "Brazed carbide, 82°", detail: '1/4"-28 UNF thread, replaceable' },
  { id: 13, label: "SPLIT COLLET", material: "303 SS, 7° taper", detail: "Self-centering grip on drill bit" },
  { id: 14, label: "KNURLED COLLET NUT", material: "C360 Brass", detail: "Tool-free tightening — finger-tight is sufficient" },
  { id: 15, label: "HSS DRILL BIT", material: "3mm straight shank", detail: "Standard bit — user-replaceable" },
];

function SharedDefs() {
  return (
    <defs>
      <linearGradient id="bodyGrad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor={COLORS.bodyDark} />
        <stop offset="30%" stopColor={COLORS.bodyHighlight} />
        <stop offset="60%" stopColor={COLORS.body} />
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
      <filter id="glow">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <filter id="shadow">
        <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.5" />
      </filter>
    </defs>
  );
}

function AssembledView() {
  return (
    <svg viewBox="0 0 420 620" style={{ width: "100%", maxWidth: 420 }}>
      <SharedDefs />
      <text x="210" y="28" textAnchor="middle" fill={COLORS.accent} fontSize="13" fontFamily="monospace" fontWeight="bold">ASSEMBLED VIEW</text>

      <g transform="translate(200, 320)" filter="url(#shadow)">
        {/* Hex Shank */}
        <polygon points="-14,-260 14,-260 18,-256 18,-194 14,-190 -14,-190 -18,-194 -18,-256" fill="url(#bodyGrad)" />
        <text x="30" y="-225" fill={COLORS.textDim} fontSize="9" fontFamily="monospace">1/4" HEX SHANK</text>
        <line x1="20" y1="-225" x2="28" y2="-225" stroke={COLORS.textDim} strokeWidth="0.5" />

        {/* Main Body Upper */}
        <rect x="-28" y="-190" width="56" height="85" fill="url(#bodyGrad)" rx="3" />
        {[...Array(8)].map((_, i) => (
          <line key={i} x1="-28" y1={-185 + i * 10} x2="-22" y2={-185 + i * 10} stroke="#999" strokeWidth="0.3" />
        ))}
        <text x="42" y="-150" fill={COLORS.textDim} fontSize="8" fontFamily="monospace">INDEX MARKS</text>
        <line x1="30" y1="-150" x2="40" y2="-150" stroke={COLORS.textDim} strokeWidth="0.5" />

        {/* Reading Window */}
        <rect x="-30" y="-165" width="5" height="20" fill="#666" rx="1" />
        <line x1="-27.5" y1="-165" x2="-27.5" y2="-145" stroke="#FF4444" strokeWidth="0.8" />

        {/* Cam Lever */}
        <g transform="translate(28, -140)">
          <ellipse cx="0" cy="0" rx="6" ry="4" fill={COLORS.cam} stroke="#555" strokeWidth="0.5" />
          <rect x="-3" y="-20" width="6" height="20" fill="url(#bodyGrad)" rx="2" />
          <circle cx="0" cy="-20" r="5" fill={COLORS.camHighlight} stroke="#555" strokeWidth="0.5" />
          <text x="18" y="-10" fill={COLORS.accent} fontSize="8" fontFamily="monospace" fontWeight="bold">CAM LEVER</text>
          <text x="18" y="0" fill={COLORS.textDim} fontSize="7" fontFamily="monospace">(FLIP TO UNLOCK)</text>
        </g>

        {/* Depth Collar */}
        <rect x="-38" y="-105" width="76" height="45" fill="url(#collarGrad)" rx="4" />
        {[...Array(20)].map((_, i) => (
          <line key={`k${i}`} x1={-36 + i * 3.8} y1="-105" x2={-36 + i * 3.8} y2="-60" stroke="#2A2A2A" strokeWidth="0.5" />
        ))}
        {[...Array(12)].map((_, i) => (
          <line key={`g${i}`} x1={-36 + i * 6.3} y1="-60" x2={-36 + i * 6.3} y2="-65" stroke="#888" strokeWidth="0.3" />
        ))}
        <text x="-56" y="-80" fill={COLORS.accent} fontSize="8" fontFamily="monospace" fontWeight="bold" transform="rotate(-90, -56, -80)">60 CLICK COLLAR</text>

        {/* Body Lower */}
        <rect x="-28" y="-60" width="56" height="30" fill="url(#bodyGrad)" rx="2" />

        {/* Datum Shoulder */}
        <rect x="-32" y="-30" width="64" height="6" fill={COLORS.body} stroke="#666" strokeWidth="0.5" />
        <text x="-72" y="-25" fill="#FF6B6B" fontSize="7" fontFamily="monospace" fontWeight="bold">FIXED DATUM ▶</text>

        {/* Bearing Zone */}
        <rect x="-30" y="-24" width="60" height="8" fill={COLORS.bearing} rx="1" />
        <rect x="-30" y="-16" width="60" height="8" fill={COLORS.bearing} rx="1" />

        {/* Foot Carrier */}
        <rect x="-34" y="-8" width="68" height="15" fill={COLORS.footCarrier} rx="3" />
        <rect x="-15" y="-8" width="4" height="15" fill={COLORS.bg} />
        <rect x="11" y="-8" width="4" height="15" fill={COLORS.bg} />

        {/* UHMW Foot */}
        <rect x="-38" y="7" width="76" height="10" fill="url(#footGrad)" rx="3" />
        <text x="48" y="15" fill={COLORS.textDim} fontSize="8" fontFamily="monospace">UHMW FOOT</text>
        <line x1="40" y1="13" x2="46" y2="13" stroke={COLORS.textDim} strokeWidth="0.5" />

        {/* Snap Ring */}
        <rect x="-26" y="17" width="52" height="3" fill={COLORS.snapRing} rx="1" />

        {/* Cutter Head */}
        <path d="M-20,20 L-25,30 L-28,50 L-20,75 L20,75 L28,50 L25,30 L20,20 Z" fill="url(#cutterGrad)" />
        <rect x="-28" y="45" width="8" height="6" fill={COLORS.cutterCarbide} rx="1" transform="rotate(-10, -24, 48)" />
        <rect x="20" y="45" width="8" height="6" fill={COLORS.cutterCarbide} rx="1" transform="rotate(10, 24, 48)" />
        <text x="40" y="50" fill={COLORS.textDim} fontSize="8" fontFamily="monospace">CARBIDE CUTTER</text>

        {/* Knurled Nut */}
        <rect x="-14" y="75" width="28" height="12" fill="url(#brassGrad)" rx="2" />
        {[...Array(8)].map((_, i) => (
          <line key={`n${i}`} x1={-12 + i * 3.5} y1="75" x2={-12 + i * 3.5} y2="87" stroke="#9A7A3A" strokeWidth="0.5" />
        ))}
        <text x="22" y="85" fill={COLORS.colletNut} fontSize="7" fontFamily="monospace">KNURLED NUT</text>

        {/* Drill Bit */}
        <rect x="-2.5" y="87" width="5" height="60" fill={COLORS.drill} rx="1" />
        <polygon points="-2.5,147 0,162 2.5,147" fill={COLORS.drill} />
        <line x1="-1" y1="90" x2="1" y2="145" stroke="#B0B3B5" strokeWidth="0.3" />
        <line x1="1" y1="90" x2="-1" y2="145" stroke="#B0B3B5" strokeWidth="0.3" />
        <text x="12" y="125" fill={COLORS.textDim} fontSize="8" fontFamily="monospace">HSS DRILL BIT</text>
      </g>
    </svg>
  );
}

function ExplodedView({ hoveredPart, setHoveredPart }) {
  const CX = 200;
  const LABEL_X = 340;
  const NUM_X = 60;

  const partPositions = [
    { y: 50 },    // 1 hex shank
    { y: 130 },   // 2 main body
    { y: 230 },   // 3 cam lever
    { y: 310 },   // 4 depth collar
    { y: 390 },   // 5 ratchet ring
    { y: 440 },   // 6 spring pawl
    { y: 510 },   // 7 datum shoulder
    { y: 580 },   // 8 bearings
    { y: 660 },   // 9 foot carrier
    { y: 720 },   // 10 uhmw foot
    { y: 780 },   // 11 snap ring
    { y: 860 },   // 12 cutter head
    { y: 960 },   // 13 split collet
    { y: 1020 },  // 14 knurled nut
    { y: 1090 },  // 15 drill bit
  ];

  const isHovered = (id) => hoveredPart === id;

  return (
    <svg viewBox="0 0 700 1200" style={{ width: "100%", maxWidth: 700 }}>
      <SharedDefs />

      <text x="350" y="28" textAnchor="middle" fill={COLORS.accent} fontSize="14" fontFamily="monospace" fontWeight="bold" letterSpacing="3">
        EXPLODED VIEW — BESPOKE PRECISION CLICK-LOCK
      </text>

      {/* Center axis line */}
      <line x1={CX} y1="40" x2={CX} y2="1180" stroke={COLORS.gridLine} strokeWidth="1" strokeDasharray="6,4" />
      <text x={CX} y="1195" textAnchor="middle" fill={COLORS.textDim} fontSize="8" fontFamily="monospace">↕ ASSEMBLY AXIS</text>

      {/* Connection arrows between parts */}
      {partPositions.slice(0, -1).map((pos, i) => {
        const nextY = partPositions[i + 1].y;
        const midY = (pos.y + nextY) / 2 + 15;
        return (
          <g key={`arrow-${i}`}>
            <line x1={CX} y1={pos.y + 40} x2={CX} y2={nextY - 10} stroke={COLORS.gridLine} strokeWidth="0.8" strokeDasharray="3,5" opacity="0.5" />
            <polygon
              points={`${CX - 3},${nextY - 14} ${CX},${nextY - 8} ${CX + 3},${nextY - 14}`}
              fill={COLORS.gridLine}
              opacity="0.5"
            />
          </g>
        );
      })}

      {/* === PART 1: HEX SHANK === */}
      <g
        onMouseEnter={() => setHoveredPart(1)}
        onMouseLeave={() => setHoveredPart(null)}
        style={{ cursor: "pointer" }}
      >
        {isHovered(1) && <rect x={CX - 30} y={partPositions[0].y - 8} width="60" height="56" fill={COLORS.highlight} rx="4" stroke={COLORS.highlightStroke} strokeWidth="1" />}
        <polygon
          points={`${CX - 16},${partPositions[0].y} ${CX + 16},${partPositions[0].y} ${CX + 20},${partPositions[0].y + 5} ${CX + 20},${partPositions[0].y + 43} ${CX + 16},${partPositions[0].y + 48} ${CX - 16},${partPositions[0].y + 48} ${CX - 20},${partPositions[0].y + 43} ${CX - 20},${partPositions[0].y + 5}`}
          fill="url(#bodyGrad)"
        />
        {/* Hex facet lines */}
        <line x1={CX - 10} y1={partPositions[0].y} x2={CX - 10} y2={partPositions[0].y + 48} stroke="#999" strokeWidth="0.3" />
        <line x1={CX + 10} y1={partPositions[0].y} x2={CX + 10} y2={partPositions[0].y + 48} stroke="#666" strokeWidth="0.3" />
      </g>

      {/* === PART 2: MAIN BODY === */}
      <g
        onMouseEnter={() => setHoveredPart(2)}
        onMouseLeave={() => setHoveredPart(null)}
        style={{ cursor: "pointer" }}
      >
        {isHovered(2) && <rect x={CX - 38} y={partPositions[1].y - 8} width="76" height="82" fill={COLORS.highlight} rx="4" stroke={COLORS.highlightStroke} strokeWidth="1" />}
        <rect x={CX - 30} y={partPositions[1].y} width="60" height="70" fill="url(#bodyGrad)" rx="3" />
        {/* Index marks */}
        {[...Array(7)].map((_, i) => (
          <line key={i} x1={CX - 30} y1={partPositions[1].y + 5 + i * 9} x2={CX - 24} y2={partPositions[1].y + 5 + i * 9} stroke="#999" strokeWidth="0.4" />
        ))}
        {/* Thread lines on lower portion */}
        {[...Array(5)].map((_, i) => (
          <line key={`t${i}`} x1={CX - 30} y1={partPositions[1].y + 50 + i * 4} x2={CX + 30} y2={partPositions[1].y + 50 + i * 4} stroke="#AAA" strokeWidth="0.25" strokeDasharray="1.5,2.5" />
        ))}
        {/* Reading window */}
        <rect x={CX - 32} y={partPositions[1].y + 18} width="5" height="18" fill="#555" rx="1" />
        <line x1={CX - 29.5} y1={partPositions[1].y + 18} x2={CX - 29.5} y2={partPositions[1].y + 36} stroke="#FF4444" strokeWidth="0.8" />
      </g>

      {/* === PART 3: CAM LOCK LEVER === */}
      <g
        onMouseEnter={() => setHoveredPart(3)}
        onMouseLeave={() => setHoveredPart(null)}
        style={{ cursor: "pointer" }}
      >
        {isHovered(3) && <rect x={CX - 18} y={partPositions[2].y - 24} width="36" height="55" fill={COLORS.highlight} rx="4" stroke={COLORS.highlightStroke} strokeWidth="1" />}
        <rect x={CX - 5} y={partPositions[2].y - 18} width="10" height="30" fill={COLORS.cam} rx="2" />
        <circle cx={CX} cy={partPositions[2].y - 18} r="7" fill={COLORS.camHighlight} stroke="#666" strokeWidth="0.5" />
        <ellipse cx={CX} cy={partPositions[2].y + 14} rx="10" ry="5" fill={COLORS.cam} stroke="#555" strokeWidth="0.5" />
        {/* Eccentric indicator */}
        <circle cx={CX} cy={partPositions[2].y + 14} r="2" fill="#555" />
      </g>

      {/* === PART 4: DEPTH COLLAR === */}
      <g
        onMouseEnter={() => setHoveredPart(4)}
        onMouseLeave={() => setHoveredPart(null)}
        style={{ cursor: "pointer" }}
      >
        {isHovered(4) && <rect x={CX - 48} y={partPositions[3].y - 8} width="96" height="52" fill={COLORS.highlight} rx="4" stroke={COLORS.highlightStroke} strokeWidth="1" />}
        <rect x={CX - 40} y={partPositions[3].y} width="80" height="40" fill="url(#collarGrad)" rx="4" />
        {/* Knurl pattern */}
        {[...Array(22)].map((_, i) => (
          <line key={`dk${i}`} x1={CX - 38 + i * 3.6} y1={partPositions[3].y} x2={CX - 38 + i * 3.6} y2={partPositions[3].y + 40} stroke="#2A2A2A" strokeWidth="0.5" />
        ))}
        {/* Graduation marks */}
        {[...Array(12)].map((_, i) => (
          <line key={`dg${i}`} x1={CX - 38 + i * 6.6} y1={partPositions[3].y + 35} x2={CX - 38 + i * 6.6} y2={partPositions[3].y + 40} stroke="#888" strokeWidth="0.4" />
        ))}
      </g>

      {/* === PART 5: RATCHET RING === */}
      <g
        onMouseEnter={() => setHoveredPart(5)}
        onMouseLeave={() => setHoveredPart(null)}
        style={{ cursor: "pointer" }}
      >
        {isHovered(5) && <rect x={CX - 42} y={partPositions[4].y - 6} width="84" height="18" fill={COLORS.highlight} rx="4" stroke={COLORS.highlightStroke} strokeWidth="1" />}
        <rect x={CX - 36} y={partPositions[4].y} width="72" height="8" fill={COLORS.ratchet} rx="1" />
        {/* Ratchet teeth */}
        {[...Array(36)].map((_, i) => (
          <line key={`rt${i}`} x1={CX - 35 + i * 2} y1={partPositions[4].y} x2={CX - 34 + i * 2} y2={partPositions[4].y + 8} stroke="#777" strokeWidth="0.3" />
        ))}
      </g>

      {/* === PART 6: SPRING PAWL === */}
      <g
        onMouseEnter={() => setHoveredPart(6)}
        onMouseLeave={() => setHoveredPart(null)}
        style={{ cursor: "pointer" }}
      >
        {isHovered(6) && <rect x={CX - 20} y={partPositions[5].y - 8} width="40" height="38" fill={COLORS.highlight} rx="4" stroke={COLORS.highlightStroke} strokeWidth="1" />}
        <path
          d={`M${CX - 8},${partPositions[5].y} Q${CX},${partPositions[5].y - 5} ${CX + 5},${partPositions[5].y + 3} Q${CX + 10},${partPositions[5].y + 10} ${CX},${partPositions[5].y + 8} Z`}
          fill={COLORS.spring} stroke="#999" strokeWidth="0.5"
        />
        <line x1={CX} y1={partPositions[5].y + 8} x2={CX} y2={partPositions[5].y + 22} stroke={COLORS.spring} strokeWidth="2" />
        {/* Coil spring indication */}
        {[...Array(4)].map((_, i) => (
          <ellipse key={`sp${i}`} cx={CX} cy={partPositions[5].y + 12 + i * 3} rx="4" ry="1.5" fill="none" stroke={COLORS.spring} strokeWidth="0.7" />
        ))}
      </g>

      {/* === PART 7: DATUM SHOULDER === */}
      <g
        onMouseEnter={() => setHoveredPart(7)}
        onMouseLeave={() => setHoveredPart(null)}
        style={{ cursor: "pointer" }}
      >
        {isHovered(7) && <rect x={CX - 40} y={partPositions[6].y - 6} width="80" height="22" fill={COLORS.highlight} rx="4" stroke={COLORS.highlightStroke} strokeWidth="1" />}
        <rect x={CX - 34} y={partPositions[6].y} width="68" height="10" fill={COLORS.body} stroke="#888" strokeWidth="1" />
        <line x1={CX - 34} y1={partPositions[6].y + 5} x2={CX + 34} y2={partPositions[6].y + 5} stroke="#FF4444" strokeWidth="1.2" strokeDasharray="4,2" />
        <text x={CX - 34} y={partPositions[6].y + 22} fill="#FF6B6B" fontSize="7" fontFamily="monospace" textAnchor="middle">▲ REFERENCE</text>
      </g>

      {/* === PART 8: BEARINGS === */}
      <g
        onMouseEnter={() => setHoveredPart(8)}
        onMouseLeave={() => setHoveredPart(null)}
        style={{ cursor: "pointer" }}
      >
        {isHovered(8) && <rect x={CX - 38} y={partPositions[7].y - 10} width="76" height="40" fill={COLORS.highlight} rx="4" stroke={COLORS.highlightStroke} strokeWidth="1" />}
        {/* Top bearing */}
        <ellipse cx={CX} cy={partPositions[7].y} rx="30" ry="7" fill="none" stroke={COLORS.bearing} strokeWidth="2.5" />
        <ellipse cx={CX} cy={partPositions[7].y} rx="16" ry="4" fill="none" stroke={COLORS.bearingInner} strokeWidth="1.5" />
        {/* Ball indicators */}
        {[...Array(8)].map((_, i) => {
          const angle = (i / 8) * Math.PI * 2;
          const rx = 23; const ry = 5.5;
          return <circle key={`b1${i}`} cx={CX + Math.cos(angle) * rx} cy={partPositions[7].y + Math.sin(angle) * ry} r="1.2" fill={COLORS.bearing} />;
        })}
        {/* Bottom bearing */}
        <ellipse cx={CX} cy={partPositions[7].y + 16} rx="30" ry="7" fill="none" stroke={COLORS.bearing} strokeWidth="2.5" />
        <ellipse cx={CX} cy={partPositions[7].y + 16} rx="16" ry="4" fill="none" stroke={COLORS.bearingInner} strokeWidth="1.5" />
        {[...Array(8)].map((_, i) => {
          const angle = (i / 8) * Math.PI * 2;
          const rx = 23; const ry = 5.5;
          return <circle key={`b2${i}`} cx={CX + Math.cos(angle) * rx} cy={partPositions[7].y + 16 + Math.sin(angle) * ry} r="1.2" fill={COLORS.bearing} />;
        })}
      </g>

      {/* === PART 9: FOOT CARRIER === */}
      <g
        onMouseEnter={() => setHoveredPart(9)}
        onMouseLeave={() => setHoveredPart(null)}
        style={{ cursor: "pointer" }}
      >
        {isHovered(9) && <rect x={CX - 42} y={partPositions[8].y - 6} width="84" height="26" fill={COLORS.highlight} rx="4" stroke={COLORS.highlightStroke} strokeWidth="1" />}
        <rect x={CX - 36} y={partPositions[8].y} width="72" height="16" fill={COLORS.footCarrier} rx="3" />
        {/* Chip ejection slots */}
        <rect x={CX - 16} y={partPositions[8].y} width="5" height="16" fill={COLORS.bg} rx="1" />
        <rect x={CX + 11} y={partPositions[8].y} width="5" height="16" fill={COLORS.bg} rx="1" />
      </g>

      {/* === PART 10: UHMW FOOT === */}
      <g
        onMouseEnter={() => setHoveredPart(10)}
        onMouseLeave={() => setHoveredPart(null)}
        style={{ cursor: "pointer" }}
      >
        {isHovered(10) && <rect x={CX - 46} y={partPositions[9].y - 6} width="92" height="22" fill={COLORS.highlight} rx="4" stroke={COLORS.highlightStroke} strokeWidth="1" />}
        <rect x={CX - 40} y={partPositions[9].y} width="80" height="12" fill="url(#footGrad)" rx="3" stroke="#CCC" strokeWidth="0.5" />
      </g>

      {/* === PART 11: SNAP RING === */}
      <g
        onMouseEnter={() => setHoveredPart(11)}
        onMouseLeave={() => setHoveredPart(null)}
        style={{ cursor: "pointer" }}
      >
        {isHovered(11) && <rect x={CX - 34} y={partPositions[10].y - 10} width="68" height="22" fill={COLORS.highlight} rx="4" stroke={COLORS.highlightStroke} strokeWidth="1" />}
        <ellipse cx={CX} cy={partPositions[10].y} rx="26" ry="6" fill="none" stroke={COLORS.snapRing} strokeWidth="3.5" />
        {/* Gap in snap ring */}
        <rect x={CX - 2} y={partPositions[10].y - 7} width="4" height="14" fill={COLORS.bg} />
        {/* Lug holes */}
        <circle cx={CX - 5} cy={partPositions[10].y} r="1.5" fill={COLORS.bg} stroke={COLORS.snapRing} strokeWidth="0.5" />
        <circle cx={CX + 5} cy={partPositions[10].y} r="1.5" fill={COLORS.bg} stroke={COLORS.snapRing} strokeWidth="0.5" />
      </g>

      {/* === PART 12: CUTTER HEAD === */}
      <g
        onMouseEnter={() => setHoveredPart(12)}
        onMouseLeave={() => setHoveredPart(null)}
        style={{ cursor: "pointer" }}
      >
        {isHovered(12) && <rect x={CX - 40} y={partPositions[11].y - 8} width="80" height="68" fill={COLORS.highlight} rx="4" stroke={COLORS.highlightStroke} strokeWidth="1" />}
        <path
          d={`M${CX - 22},${partPositions[11].y} L${CX - 28},${partPositions[11].y + 12} L${CX - 32},${partPositions[11].y + 35} L${CX - 22},${partPositions[11].y + 55} L${CX + 22},${partPositions[11].y + 55} L${CX + 32},${partPositions[11].y + 35} L${CX + 28},${partPositions[11].y + 12} L${CX + 22},${partPositions[11].y}`}
          fill="url(#cutterGrad)"
        />
        {/* Thread lines at top */}
        {[...Array(4)].map((_, i) => (
          <line key={`ct${i}`} x1={CX - 22} y1={partPositions[11].y + 2 + i * 3} x2={CX + 22} y2={partPositions[11].y + 2 + i * 3} stroke="#888" strokeWidth="0.3" strokeDasharray="1.5,2" />
        ))}
        {/* Carbide inserts */}
        <rect x={CX - 32} y={partPositions[11].y + 30} width="10" height="6" fill={COLORS.cutterCarbide} rx="1" transform={`rotate(-12, ${CX - 27}, ${partPositions[11].y + 33})`} />
        <rect x={CX + 22} y={partPositions[11].y + 30} width="10" height="6" fill={COLORS.cutterCarbide} rx="1" transform={`rotate(12, ${CX + 27}, ${partPositions[11].y + 33})`} />
        {/* 82° angle indication */}
        <line x1={CX - 10} y1={partPositions[11].y + 50} x2={CX - 20} y2={partPositions[11].y + 38} stroke="#888" strokeWidth="0.5" strokeDasharray="2,1" />
        <line x1={CX + 10} y1={partPositions[11].y + 50} x2={CX + 20} y2={partPositions[11].y + 38} stroke="#888" strokeWidth="0.5" strokeDasharray="2,1" />
        <text x={CX} y={partPositions[11].y + 48} textAnchor="middle" fill="#888" fontSize="6" fontFamily="monospace">82°</text>
      </g>

      {/* === PART 13: SPLIT COLLET === */}
      <g
        onMouseEnter={() => setHoveredPart(13)}
        onMouseLeave={() => setHoveredPart(null)}
        style={{ cursor: "pointer" }}
      >
        {isHovered(13) && <rect x={CX - 20} y={partPositions[12].y - 6} width="40" height="36" fill={COLORS.highlight} rx="4" stroke={COLORS.highlightStroke} strokeWidth="1" />}
        <path
          d={`M${CX - 14},${partPositions[12].y} L${CX - 17},${partPositions[12].y + 12} L${CX - 16},${partPositions[12].y + 24} L${CX - 12},${partPositions[12].y + 28} L${CX + 12},${partPositions[12].y + 28} L${CX + 16},${partPositions[12].y + 24} L${CX + 17},${partPositions[12].y + 12} L${CX + 14},${partPositions[12].y}`}
          fill={COLORS.collet}
        />
        {/* Split lines (3-jaw) */}
        <line x1={CX - 6} y1={partPositions[12].y} x2={CX - 7} y2={partPositions[12].y + 28} stroke={COLORS.bg} strokeWidth="1" />
        <line x1={CX + 6} y1={partPositions[12].y} x2={CX + 7} y2={partPositions[12].y + 28} stroke={COLORS.bg} strokeWidth="1" />
        {/* Taper indication */}
        <line x1={CX - 14} y1={partPositions[12].y} x2={CX - 17} y2={partPositions[12].y + 12} stroke="#AAA" strokeWidth="0.3" strokeDasharray="2,1" />
        <text x={CX - 22} y={partPositions[12].y + 8} fill="#888" fontSize="5" fontFamily="monospace">7°</text>
      </g>

      {/* === PART 14: KNURLED NUT === */}
      <g
        onMouseEnter={() => setHoveredPart(14)}
        onMouseLeave={() => setHoveredPart(null)}
        style={{ cursor: "pointer" }}
      >
        {isHovered(14) && <rect x={CX - 20} y={partPositions[13].y - 6} width="40" height="24" fill={COLORS.highlight} rx="4" stroke={COLORS.highlightStroke} strokeWidth="1" />}
        <rect x={CX - 16} y={partPositions[13].y} width="32" height="14" fill="url(#brassGrad)" rx="2" />
        {[...Array(9)].map((_, i) => (
          <line key={`kn${i}`} x1={CX - 14 + i * 3.5} y1={partPositions[13].y} x2={CX - 14 + i * 3.5} y2={partPositions[13].y + 14} stroke="#9A7A3A" strokeWidth="0.5" />
        ))}
      </g>

      {/* === PART 15: DRILL BIT === */}
      <g
        onMouseEnter={() => setHoveredPart(15)}
        onMouseLeave={() => setHoveredPart(null)}
        style={{ cursor: "pointer" }}
      >
        {isHovered(15) && <rect x={CX - 12} y={partPositions[14].y - 6} width="24" height="80" fill={COLORS.highlight} rx="4" stroke={COLORS.highlightStroke} strokeWidth="1" />}
        <rect x={CX - 3} y={partPositions[14].y} width="6" height="58" fill={COLORS.drill} rx="1" />
        <polygon points={`${CX - 3},${partPositions[14].y + 58} ${CX},${partPositions[14].y + 72} ${CX + 3},${partPositions[14].y + 58}`} fill={COLORS.drill} />
        {/* Flute helical lines */}
        <line x1={CX - 1.5} y1={partPositions[14].y + 3} x2={CX + 1.5} y2={partPositions[14].y + 55} stroke="#B0B3B5" strokeWidth="0.4" />
        <line x1={CX + 1.5} y1={partPositions[14].y + 3} x2={CX - 1.5} y2={partPositions[14].y + 55} stroke="#B0B3B5" strokeWidth="0.4" />
      </g>

      {/* === LABELS & PART NUMBERS === */}
      {PARTS_DATA.map((part, i) => {
        const py = partPositions[i].y;
        const active = isHovered(part.id);
        return (
          <g key={`label-${part.id}`}>
            {/* Part number circle */}
            <circle
              cx={NUM_X}
              cy={py + 6}
              r="11"
              fill={active ? COLORS.accent : COLORS.accentDim}
              style={{ transition: "fill 0.2s" }}
            />
            <text
              x={NUM_X}
              y={py + 10}
              textAnchor="middle"
              fill="white"
              fontSize="10"
              fontFamily="monospace"
              fontWeight="bold"
            >
              {part.id}
            </text>

            {/* Leader line from number to part */}
            <line
              x1={NUM_X + 12}
              y1={py + 6}
              x2={CX - 45}
              y2={py + 6}
              stroke={active ? COLORS.accent : COLORS.gridLine}
              strokeWidth={active ? "1" : "0.6"}
              strokeDasharray={active ? "none" : "3,3"}
              style={{ transition: "all 0.2s" }}
            />

            {/* Leader line from part to label */}
            <line
              x1={CX + 45}
              y1={py + 6}
              x2={LABEL_X - 5}
              y2={py + 6}
              stroke={active ? COLORS.accent : COLORS.gridLine}
              strokeWidth={active ? "1" : "0.6"}
              strokeDasharray={active ? "none" : "3,3"}
              style={{ transition: "all 0.2s" }}
            />

            {/* Label text */}
            <text
              x={LABEL_X}
              y={py + 4}
              fill={active ? COLORS.accent : COLORS.text}
              fontSize="10"
              fontFamily="monospace"
              fontWeight="bold"
              style={{ transition: "fill 0.2s" }}
            >
              {part.label}
            </text>
            <text
              x={LABEL_X}
              y={py + 16}
              fill={COLORS.textDim}
              fontSize="8"
              fontFamily="monospace"
            >
              {part.material}
            </text>
            {active && (
              <text
                x={LABEL_X}
                y={py + 27}
                fill={COLORS.accent}
                fontSize="7.5"
                fontFamily="monospace"
                opacity="0.85"
              >
                {part.detail}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}

export default function CountersinkDiagram() {
  const [view, setView] = useState("exploded");
  const [hoveredPart, setHoveredPart] = useState(null);

  return (
    <div style={{
      background: COLORS.bg,
      minHeight: "100vh",
      padding: "24px 16px",
      fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
      color: COLORS.text,
    }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <h1 style={{
          fontSize: 22,
          fontWeight: 800,
          letterSpacing: 4,
          color: COLORS.text,
          margin: "0 0 4px 0",
        }}>
          BESPOKE PRECISION CLICK-LOCK
        </h1>
        <p style={{
          color: COLORS.textDim,
          fontSize: 12,
          margin: "0 0 16px 0",
          letterSpacing: 2,
        }}>
          TOOL-LESS COUNTERSINK SYSTEM — ENGINEERING DIAGRAM
        </p>

        {/* View toggle */}
        <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
          {["assembled", "exploded"].map(v => (
            <button
              key={v}
              onClick={() => setView(v)}
              style={{
                padding: "8px 24px",
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

      {/* Diagram area */}
      <div style={{
        background: COLORS.grid,
        borderRadius: 12,
        border: `1px solid ${COLORS.gridLine}`,
        padding: 20,
        maxWidth: view === "exploded" ? 740 : 520,
        margin: "0 auto",
        position: "relative",
        overflow: "hidden",
        transition: "max-width 0.3s",
      }}>
        {/* Grid background */}
        <div style={{
          position: "absolute", inset: 0, opacity: 0.12,
          backgroundImage: `linear-gradient(${COLORS.gridLine} 1px, transparent 1px), linear-gradient(90deg, ${COLORS.gridLine} 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }} />

        <div style={{ position: "relative", zIndex: 1 }}>
          {view === "assembled"
            ? <AssembledView />
            : <ExplodedView hoveredPart={hoveredPart} setHoveredPart={setHoveredPart} />
          }
        </div>
      </div>

      {/* Hover info panel (exploded view only) */}
      {view === "exploded" && hoveredPart && (
        <div style={{
          maxWidth: 740,
          margin: "12px auto 0",
          background: COLORS.grid,
          border: `1px solid ${COLORS.accent}44`,
          borderRadius: 8,
          padding: "12px 16px",
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}>
          <div style={{
            background: COLORS.accentDim,
            borderRadius: "50%",
            width: 32,
            height: 32,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            fontSize: 14,
            fontWeight: "bold",
          }}>
            {hoveredPart}
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: "bold", color: COLORS.accent }}>
              {PARTS_DATA[hoveredPart - 1].label}
            </div>
            <div style={{ fontSize: 11, color: COLORS.textDim, marginTop: 2 }}>
              {PARTS_DATA[hoveredPart - 1].material} — {PARTS_DATA[hoveredPart - 1].detail}
            </div>
          </div>
        </div>
      )}

      {/* Feature cards */}
      <div style={{
        maxWidth: view === "exploded" ? 740 : 520,
        margin: "16px auto 0",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        gap: 8,
        transition: "max-width 0.3s",
      }}>
        {[
          { icon: "⚙️", title: "60 CLICKS/REV", desc: "0.017mm resolution" },
          { icon: "🔒", title: "CAM LOCK", desc: "No magnets, no tools" },
          { icon: "📐", title: "FIXED DATUM", desc: "Depth survives bit swap" },
          { icon: "🛡️", title: "UHMW FOOT", desc: "Zero marring guaranteed" },
        ].map((item, i) => (
          <div key={i} style={{
            background: COLORS.grid,
            border: `1px solid ${COLORS.gridLine}`,
            borderRadius: 8,
            padding: "10px 12px",
            textAlign: "center",
          }}>
            <div style={{ fontSize: 18 }}>{item.icon}</div>
            <div style={{ fontSize: 9, fontWeight: "bold", color: COLORS.accent, letterSpacing: 1, marginTop: 4 }}>{item.title}</div>
            <div style={{ fontSize: 8, color: COLORS.textDim, marginTop: 2 }}>{item.desc}</div>
          </div>
        ))}
      </div>

      {/* Instruction hint */}
      {view === "exploded" && (
        <p style={{
          textAlign: "center",
          color: COLORS.textDim,
          fontSize: 10,
          marginTop: 12,
          letterSpacing: 1,
          opacity: 0.7,
        }}>
          HOVER OVER ANY PART FOR DETAILS
        </p>
      )}

      <p style={{
        textAlign: "center",
        color: COLORS.textDim,
        fontSize: 10,
        marginTop: 8,
        letterSpacing: 1,
      }}>
        BESPOKE WOODCRAFT STUDIO © 2026 — FOR PROTOTYPE USE ONLY
      </p>
    </div>
  );
}
