import { useId } from 'react'

// Illustrated card artwork in the brand palette. Each variant is a small SVG
// scene used where the live site shows a photo. Swap for real photography by
// replacing <CardArt variant=... /> with an <img> when assets are available.

const DEEP = ['#6B1414', '#9C2B1F'] // maroon -> brick
const WARM = ['#FF6452', '#FA3E32'] // rose -> red
const SOFT = ['#FFF3F0', '#FFD9D2'] // cream -> blush

function Scene({ variant }) {
  const w = 'rgba(255,255,255,'
  switch (variant) {
    case 'challenge': // map pins + routes
      return (
        <>
          <path d={`M0 210 Q 100 170 200 205 T 400 195`} fill="none" stroke={`${w}0.35)`} strokeWidth="2" strokeDasharray="6 8" />
          <path d={`M0 245 Q 120 210 240 240 T 400 235`} fill="none" stroke={`${w}0.2)`} strokeWidth="2" strokeDasharray="4 10" />
          {[
            [90, 150, 22],
            [210, 110, 30],
            [315, 165, 24],
          ].map(([x, y, r]) => (
            <g key={x}>
              <path d={`M${x} ${y + r * 1.6} C ${x - r} ${y + r * 0.4} ${x - r} ${y - r} ${x} ${y - r} C ${x + r} ${y - r} ${x + r} ${y + r * 0.4} ${x} ${y + r * 1.6} Z`} fill="white" opacity="0.92" />
              <circle cx={x} cy={y} r={r * 0.42} fill="#9C2B1F" />
            </g>
          ))}
          <ellipse cx="90" cy="192" rx="26" ry="5" fill={`${w}0.18)`} />
          <ellipse cx="210" cy="162" rx="34" ry="6" fill={`${w}0.18)`} />
          <ellipse cx="315" cy="206" rx="28" ry="5" fill={`${w}0.18)`} />
        </>
      )
    case 'summit': // stage beams + crowd
      return (
        <>
          {[-60, -20, 20, 60].map((a) => (
            <path key={a} d={`M200 40 L${200 + a * 4} 300 L${200 + a * 4 + 50} 300 Z`} fill={`${w}0.10)`} />
          ))}
          <circle cx="200" cy="46" r="16" fill="white" opacity="0.95" />
          {[0, 1, 2, 3].map((r) => (
            <circle key={r} cx="200" cy="46" r={30 + r * 18} fill="none" stroke={`${w}${0.28 - r * 0.06})`} strokeWidth="2" />
          ))}
          {Array.from({ length: 14 }, (_, i) => (
            <circle key={i} cx={30 + i * 27} cy={270 + (i % 3) * 9} r="7" fill={`${w}${i % 2 ? 0.5 : 0.75})`} />
          ))}
        </>
      )
    case 'philippines': // sun over sea, outrigger sail
      return (
        <>
          <circle cx="315" cy="80" r="42" fill="white" opacity="0.9" />
          {Array.from({ length: 8 }, (_, i) => {
            const a = (i * Math.PI) / 4
            return (
              <line key={i} x1={315 + Math.cos(a) * 56} y1={80 + Math.sin(a) * 56} x2={315 + Math.cos(a) * 70} y2={80 + Math.sin(a) * 70} stroke={`${w}0.8)`} strokeWidth="4" strokeLinecap="round" />
            )
          })}
          <path d="M120 205 L120 120 L185 205 Z" fill="white" opacity="0.92" />
          <path d="M85 212 L230 212 L205 238 L110 238 Z" fill="#6B1414" opacity="0.85" />
          <path d="M0 250 Q 60 235 120 250 T 240 250 T 360 250 T 480 250 L 480 300 L 0 300 Z" fill={`${w}0.25)`} />
          <path d="M0 272 Q 70 258 140 272 T 280 272 T 420 272 L 420 300 L 0 300 Z" fill={`${w}0.35)`} />
        </>
      )
    case 'greece': // cycladic hill village + waves
      return (
        <>
          <path d="M40 300 Q 200 130 400 290 L 400 300 Z" fill={`${w}0.2)`} />
          {[
            [150, 190, 42, 30],
            [205, 168, 46, 34],
            [262, 190, 40, 28],
          ].map(([x, y, bw, bh]) => (
            <g key={x}>
              <rect x={x} y={y} width={bw} height={bh} rx="4" fill="white" opacity="0.94" />
              <path d={`M${x} ${y} Q ${x + bw / 2} ${y - bh * 0.7} ${x + bw} ${y}`} fill="#9C2B1F" />
              <rect x={x + bw / 2 - 4} y={y + bh - 14} width="8" height="14" rx="2" fill="#6B1414" opacity="0.6" />
            </g>
          ))}
          <circle cx="70" cy="70" r="26" fill="white" opacity="0.85" />
          <path d="M0 268 Q 50 256 100 268 T 200 268 T 300 268 T 400 268 L 400 300 L 0 300 Z" fill={`${w}0.4)`} />
        </>
      )
    case 'design': // lightbulb + paint splats (echoes live site card)
      return (
        <>
          {[
            [60, 60, 26, 0.25],
            [340, 90, 34, 0.2],
            [90, 240, 20, 0.3],
            [330, 235, 16, 0.35],
          ].map(([x, y, r, o]) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r={r} fill={`${w}${o})`} />
          ))}
          <circle cx="200" cy="128" r="58" fill="none" stroke="white" strokeWidth="7" opacity="0.95" />
          <path d="M178 176 L222 176 L214 224 L186 224 Z" fill="white" opacity="0.95" />
          <rect x="184" y="228" width="32" height="8" rx="4" fill="white" opacity="0.8" />
          <path d="M186 128 Q 200 100 214 128 T 200 156" fill="none" stroke="white" strokeWidth="5" strokeLinecap="round" opacity="0.9" />
          {Array.from({ length: 6 }, (_, i) => {
            const a = -Math.PI / 2 + (i - 2.5) * 0.42
            return (
              <line key={i} x1={200 + Math.cos(a) * 74} y1={128 + Math.sin(a) * 74} x2={200 + Math.cos(a) * 94} y2={128 + Math.sin(a) * 94} stroke="white" strokeWidth="5" strokeLinecap="round" opacity="0.85" />
            )
          })}
        </>
      )
    case 'business': // ascending bars + trend arrow
      return (
        <>
          {[
            [70, 190, 60],
            [150, 150, 100],
            [230, 110, 140],
            [310, 70, 180],
          ].map(([x, y, h], i) => (
            <rect key={x} x={x} y={y} width="48" height={h} rx="8" fill="#FA3E32" opacity={0.3 + i * 0.16} />
          ))}
          <path d="M60 170 L170 120 L250 145 L345 55" fill="none" stroke="#6B1414" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M345 55 L310 52 M345 55 L344 90" stroke="#6B1414" strokeWidth="7" strokeLinecap="round" />
        </>
      )
    case 'askology': // speech bubble with ?
      return (
        <>
          <circle cx="330" cy="70" r="30" fill={`${w}0.2)`} />
          <circle cx="70" cy="230" r="22" fill={`${w}0.25)`} />
          <rect x="105" y="70" width="190" height="130" rx="28" fill="white" opacity="0.95" />
          <path d="M150 196 L150 240 L196 198 Z" fill="white" opacity="0.95" />
          <text x="200" y="165" textAnchor="middle" fontFamily="Space Grotesk, sans-serif" fontSize="86" fontWeight="700" fill="#9C2B1F">
            ?
          </text>
        </>
      )
    case 'globe': // globe grid + orbit + spark
      return (
        <>
          <circle cx="200" cy="150" r="85" fill="none" stroke="white" strokeWidth="5" opacity="0.9" />
          <ellipse cx="200" cy="150" rx="85" ry="34" fill="none" stroke={`${w}0.75)`} strokeWidth="3" />
          <ellipse cx="200" cy="150" rx="34" ry="85" fill="none" stroke={`${w}0.75)`} strokeWidth="3" />
          <line x1="115" y1="150" x2="285" y2="150" stroke={`${w}0.75)`} strokeWidth="3" />
          <ellipse cx="200" cy="150" rx="128" ry="46" fill="none" stroke={`${w}0.35)`} strokeWidth="2" transform="rotate(-18 200 150)" />
          <circle cx="318" cy="106" r="10" fill="white" />
          <path d="M84 84 l7 16 16 7 -16 7 -7 16 -7 -16 -16 -7 16 -7 Z" fill="white" opacity="0.9" />
        </>
      )
    case 'identity': // two overlapping profiles
      return (
        <>
          <circle cx="160" cy="150" r="72" fill="white" opacity="0.9" />
          <circle cx="245" cy="150" r="72" fill="none" stroke="white" strokeWidth="6" opacity="0.9" />
          <circle cx="140" cy="132" r="9" fill="#9C2B1F" />
          <path d="M112 176 Q 140 196 168 176" fill="none" stroke="#9C2B1F" strokeWidth="6" strokeLinecap="round" />
          <circle cx="266" cy="132" r="9" fill={`${w}0.9)`} />
          <path d="M238 176 Q 266 196 294 176" fill="none" stroke={`${w}0.9)`} strokeWidth="6" strokeLinecap="round" />
        </>
      )
    case 'legacy': // framed landscape photo
      return (
        <>
          <rect x="92" y="58" width="216" height="164" rx="10" fill="#6B1414" />
          <rect x="110" y="76" width="180" height="112" rx="4" fill="#FFF3F0" />
          <circle cx="150" cy="106" r="14" fill="#FA3E32" opacity="0.85" />
          <path d="M110 188 L166 132 L206 168 L238 140 L290 188 Z" fill="#FF6452" opacity="0.8" />
          <line x1="128" y1="206" x2="272" y2="206" stroke="#FFF3F0" strokeWidth="6" strokeLinecap="round" opacity="0.7" />
          <circle cx="330" cy="240" r="18" fill="#FA3E32" opacity="0.25" />
        </>
      )
    case 'courage': // flame
      return (
        <>
          <circle cx="82" cy="82" r="26" fill={`${w}0.18)`} />
          <circle cx="330" cy="220" r="30" fill={`${w}0.18)`} />
          <path d="M200 44 C 240 100 268 128 268 182 C 268 232 238 262 200 262 C 162 262 132 232 132 182 C 132 148 150 122 162 108 C 158 136 170 148 178 150 C 168 116 182 76 200 44 Z" fill="white" opacity="0.95" />
          <path d="M200 152 C 218 180 230 192 230 214 C 230 238 216 250 200 250 C 184 250 170 238 170 214 C 170 196 182 180 200 152 Z" fill="#9C2B1F" />
        </>
      )
    case 'video': // play button
      return (
        <>
          <rect x="80" y="66" width="240" height="168" rx="24" fill={`${w}0.16)`} />
          <circle cx="200" cy="150" r="56" fill="white" opacity="0.95" />
          <path d="M184 120 L236 150 L184 180 Z" fill="#9C2B1F" />
          <circle cx="200" cy="150" r="74" fill="none" stroke={`${w}0.5)`} strokeWidth="3" strokeDasharray="4 10" />
        </>
      )
    case 'press': // article page
      return (
        <>
          <rect x="120" y="52" width="160" height="196" rx="12" fill="white" opacity="0.96" />
          <rect x="138" y="74" width="124" height="44" rx="6" fill="#FA3E32" opacity="0.85" />
          {[136, 152, 168, 184, 200].map((y) => (
            <line key={y} x1="138" y1={y + 4} x2={y % 32 === 8 ? 226 : 262} y2={y + 4} stroke="#9C2B1F" strokeWidth="7" strokeLinecap="round" opacity="0.35" />
          ))}
          <circle cx="310" cy="90" r="22" fill={`${w}0.25)`} />
        </>
      )
    case 'camera': // camera
      return (
        <>
          <rect x="94" y="102" width="212" height="136" rx="20" fill="white" opacity="0.95" />
          <rect x="150" y="80" width="100" height="34" rx="10" fill="white" opacity="0.95" />
          <circle cx="200" cy="170" r="46" fill="#9C2B1F" />
          <circle cx="200" cy="170" r="28" fill="none" stroke={`${w}0.85)`} strokeWidth="6" />
          <circle cx="272" cy="128" r="9" fill="#9C2B1F" opacity="0.7" />
          <circle cx="330" cy="70" r="20" fill={`${w}0.2)`} />
        </>
      )
    case 'portrait': // person silhouette
      return (
        <>
          <circle cx="200" cy="118" r="52" fill="white" opacity="0.95" />
          <path d="M96 300 C 96 216 144 192 200 192 C 256 192 304 216 304 300 Z" fill="white" opacity="0.95" />
        </>
      )
    default:
      return <circle cx="200" cy="150" r="60" fill={`${w}0.4)`} />
  }
}

const BACKGROUNDS = {
  challenge: DEEP,
  summit: DEEP,
  philippines: WARM,
  greece: WARM,
  design: WARM,
  business: SOFT,
  askology: DEEP,
  globe: DEEP,
  identity: WARM,
  legacy: SOFT,
  courage: DEEP,
  video: WARM,
  press: WARM,
  camera: DEEP,
  portrait: WARM,
}

function CardArt({ variant = 'globe', className = 'h-48 w-full' }) {
  const id = useId()
  const [from, to] = BACKGROUNDS[variant] ?? WARM
  return (
    <svg
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      className={`${className} block`}
      role="img"
      aria-label={`${variant} illustration`}
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={from} />
          <stop offset="100%" stopColor={to} />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill={`url(#${id})`} />
      <Scene variant={variant} />
    </svg>
  )
}

export default CardArt
