import { Box, Card, CardActionArea, Typography } from '@mui/material'
import { type ReactNode } from 'react'

// Společný wrapper
const Svg = ({ children }: { children: ReactNode }) => (
  <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg"
    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
    {children}
  </svg>
)

// ── Průkazka – recepce: pult, postava, průkaz, monitor, rostlina ─────────────
const IllustrationPrukazka = () => (
  <Svg>
    {/* strop */}
    <rect x="0" y="0" width="200" height="24" fill="rgba(255,255,255,0.20)" />
    {/* závěsná lampa */}
    <line x1="110" y1="0" x2="110" y2="16" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
    <path d="M97 16 L110 30 L123 16 Z" fill="rgba(255,255,255,0.50)" />
    {/* pozadí – stěna */}
    <rect x="0" y="24" width="200" height="84" fill="rgba(255,255,255,0.06)" />
    {/* okno – skleněné tabule */}
    <rect x="20" y="28" width="46" height="72" fill="rgba(255,255,255,0.10)" stroke="rgba(255,255,255,0.20)" strokeWidth="1" />
    <rect x="78" y="28" width="46" height="72" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
    <rect x="136" y="28" width="46" height="72" fill="rgba(255,255,255,0.10)" stroke="rgba(255,255,255,0.20)" strokeWidth="1" />
    {/* město v pozadí */}
    <rect x="24"  y="52" width="14" height="48" fill="rgba(255,255,255,0.14)" />
    <rect x="40"  y="42" width="10" height="58" fill="rgba(255,255,255,0.18)" />
    <rect x="82"  y="48" width="16" height="52" fill="rgba(255,255,255,0.14)" />
    <rect x="100" y="38" width="12" height="62" fill="rgba(255,255,255,0.16)" />
    <rect x="140" y="46" width="18" height="54" fill="rgba(255,255,255,0.14)" />
    <rect x="162" y="36" width="12" height="64" fill="rgba(255,255,255,0.18)" />
    {/* recepční pult – deska */}
    <rect x="0" y="108" width="200" height="12" rx="2" fill="rgba(255,255,255,0.55)" />
    {/* pult – čelní panel */}
    <rect x="0" y="120" width="200" height="40" fill="rgba(255,255,255,0.40)" />
    {/* monitor na pultu */}
    <rect x="28" y="80" width="34" height="26" rx="3" fill="rgba(255,255,255,0.48)" />
    <rect x="31" y="83" width="28" height="16" rx="1" fill="rgba(255,255,255,0.26)" />
    <rect x="42" y="106" width="12" height="4" rx="1" fill="rgba(255,255,255,0.38)" />
    {/* klávesnice */}
    <rect x="28" y="110" width="34" height="6" rx="2" fill="rgba(255,255,255,0.36)" />
    {/* postava za pultem */}
    <circle cx="116" cy="82" r="13" fill="rgba(255,255,255,0.55)" />
    <rect x="103" y="95" width="26" height="22" rx="5" fill="rgba(255,255,255,0.45)" />
    {/* průkazka – výrazná, podávaná přes pult */}
    <rect x="136" y="92" width="42" height="28" rx="5" fill="rgba(255,255,255,0.78)" />
    <circle cx="147" cy="103" r="6" fill="rgba(255,255,255,0.45)" />
    <rect x="156" y="99" width="16" height="3.5" rx="1.75" fill="rgba(255,255,255,0.45)" />
    <rect x="156" y="106" width="12" height="2.5" rx="1.25" fill="rgba(255,255,255,0.35)" />
    <rect x="138" y="113" width="38" height="4" rx="1" fill="rgba(255,255,255,0.28)" />
    {/* rostlina vlevo na pultu */}
    <rect x="6" y="98" width="14" height="10" rx="3" fill="rgba(255,255,255,0.45)" />
    <ellipse cx="13" cy="93" rx="11" ry="9" fill="rgba(255,255,255,0.38)" />
    <line x1="13" y1="84" x2="13" y2="98" stroke="rgba(255,255,255,0.30)" strokeWidth="1.5" />
  </Svg>
)

// ── Dokumenty – archiv: police se šanony, stůl, monitor, lampa ──────────────
const IllustrationDokumenty = () => (
  <Svg>
    {/* strop */}
    <rect x="0" y="0" width="200" height="22" fill="rgba(255,255,255,0.20)" />
    {/* lampa vlevo */}
    <line x1="148" y1="0" x2="148" y2="14" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
    <path d="M136 14 L148 28 L160 14 Z" fill="rgba(255,255,255,0.48)" />
    {/* zeď */}
    <rect x="0" y="22" width="200" height="86" fill="rgba(255,255,255,0.05)" />
    {/* archivní police – levá */}
    <rect x="2" y="26" width="52" height="82" rx="3" fill="rgba(255,255,255,0.16)" />
    <rect x="2" y="56" width="52" height="2.5" fill="rgba(255,255,255,0.24)" />
    <rect x="2" y="82" width="52" height="2.5" fill="rgba(255,255,255,0.20)" />
    {/* šanony na horní polici */}
    <rect x="5"  y="30" width="9" height="24" rx="2" fill="rgba(255,255,255,0.38)" />
    <rect x="16" y="30" width="9" height="24" rx="2" fill="rgba(255,255,255,0.28)" />
    <rect x="27" y="30" width="9" height="24" rx="2" fill="rgba(255,255,255,0.42)" />
    <rect x="38" y="30" width="9" height="24" rx="2" fill="rgba(255,255,255,0.32)" />
    {/* šanony na střední polici */}
    <rect x="5"  y="60" width="9" height="20" rx="2" fill="rgba(255,255,255,0.30)" />
    <rect x="16" y="60" width="9" height="20" rx="2" fill="rgba(255,255,255,0.40)" />
    <rect x="27" y="60" width="9" height="20" rx="2" fill="rgba(255,255,255,0.26)" />
    <rect x="38" y="60" width="9" height="20" rx="2" fill="rgba(255,255,255,0.36)" />
    {/* stůl – deska */}
    <rect x="54" y="108" width="146" height="11" rx="2" fill="rgba(255,255,255,0.55)" />
    {/* nohy stolu */}
    <rect x="70"  y="119" width="7" height="41" rx="2" fill="rgba(255,255,255,0.38)" />
    <rect x="186" y="119" width="7" height="41" rx="2" fill="rgba(255,255,255,0.38)" />
    {/* monitor */}
    <rect x="150" y="76" width="42" height="30" rx="3" fill="rgba(255,255,255,0.50)" />
    <rect x="153" y="79" width="36" height="20" rx="1" fill="rgba(255,255,255,0.28)" />
    <rect x="167" y="106" width="14" height="4" rx="1" fill="rgba(255,255,255,0.38)" />
    {/* stohovné dokumenty */}
    <rect x="80" y="92" width="56" height="16" rx="3" fill="rgba(255,255,255,0.38)" />
    <rect x="82" y="85" width="56" height="16" rx="3" fill="rgba(255,255,255,0.48)" />
    <rect x="84" y="78" width="56" height="16" rx="3" fill="rgba(255,255,255,0.60)" />
    {/* záložka */}
    <rect x="114" y="76" width="7" height="12" rx="2" fill="rgba(255,255,255,0.80)" />
    {/* stolní lampa */}
    <rect x="136" y="107" width="8" height="6" rx="2" fill="rgba(255,255,255,0.42)" />
    <line x1="140" y1="107" x2="128" y2="84" stroke="rgba(255,255,255,0.48)" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="128" y1="84" x2="116" y2="94" stroke="rgba(255,255,255,0.42)" strokeWidth="2.5" strokeLinecap="round" />
    <ellipse cx="113" cy="96" rx="11" ry="5" fill="rgba(255,255,255,0.48)" />
  </Svg>
)

// ── Strava – výdejna: sporák, pára, pult, talíře, kuchař ────────────────────
const IllustrationStrava = () => (
  <Svg>
    {/* strop */}
    <rect x="0" y="0" width="200" height="22" fill="rgba(255,255,255,0.22)" />
    {/* digestoř nad sporákem */}
    <path d="M54 22 L44 56 L156 56 L146 22 Z" fill="rgba(255,255,255,0.24)" />
    <rect x="48" y="53" width="104" height="6" rx="2" fill="rgba(255,255,255,0.32)" />
    {/* kuchyňská zeď */}
    <rect x="0" y="22" width="200" height="86" fill="rgba(255,255,255,0.05)" />
    {/* dlaždice na zdi – mřížka */}
    <line x1="0"   y1="42" x2="200" y2="42" stroke="rgba(255,255,255,0.10)" strokeWidth="1" />
    <line x1="0"   y1="62" x2="200" y2="62" stroke="rgba(255,255,255,0.10)" strokeWidth="1" />
    <line x1="40"  y1="22" x2="40"  y2="108" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
    <line x1="80"  y1="22" x2="80"  y2="108" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
    <line x1="120" y1="22" x2="120" y2="108" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
    <line x1="160" y1="22" x2="160" y2="108" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
    {/* sporák / velký hrnec */}
    <rect x="6" y="72" width="58" height="36" rx="4" fill="rgba(255,255,255,0.30)" />
    <ellipse cx="35" cy="72" rx="28" ry="9" fill="rgba(255,255,255,0.44)" />
    <ellipse cx="35" cy="70" rx="20" ry="6" fill="rgba(255,255,255,0.58)" />
    {/* pára */}
    <path d="M22 60 C18 50 26 42 22 32" stroke="rgba(255,255,255,0.50)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <path d="M35 56 C31 46 39 38 35 28" stroke="rgba(255,255,255,0.60)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <path d="M48 60 C44 50 52 42 48 32" stroke="rgba(255,255,255,0.45)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    {/* výdejní pult – deska */}
    <rect x="0" y="108" width="200" height="12" rx="2" fill="rgba(255,255,255,0.55)" />
    <rect x="0" y="120" width="200" height="40" fill="rgba(255,255,255,0.42)" />
    {/* tác s talíři */}
    <rect x="68" y="94" width="72" height="14" rx="3" fill="rgba(255,255,255,0.42)" />
    <ellipse cx="86"  cy="101" rx="11" ry="7" fill="rgba(255,255,255,0.62)" />
    <ellipse cx="86"  cy="100" rx="6"  ry="4" fill="rgba(255,255,255,0.40)" />
    <ellipse cx="108" cy="101" rx="11" ry="7" fill="rgba(255,255,255,0.62)" />
    <ellipse cx="108" cy="100" rx="6"  ry="4" fill="rgba(255,255,255,0.40)" />
    <ellipse cx="128" cy="101" rx="9"  ry="6" fill="rgba(255,255,255,0.55)" />
    {/* kuchař */}
    <circle cx="170" cy="80" r="13" fill="rgba(255,255,255,0.55)" />
    <rect x="158" y="93" width="24" height="22" rx="5" fill="rgba(255,255,255,0.45)" />
    <rect x="163" y="67" width="14" height="9" rx="5" fill="rgba(255,255,255,0.65)" />
    {/* vařečka */}
    <line x1="156" y1="92" x2="142" y2="70" stroke="rgba(255,255,255,0.52)" strokeWidth="2.5" strokeLinecap="round" />
    <ellipse cx="139" cy="68" rx="6" ry="4" fill="rgba(255,255,255,0.45)" />
  </Svg>
)

// ── Procedury – spa místnost: masážní stůl, rostliny, svíčky, klidná atmosféra
const IllustrationProcedury = () => (
  <Svg>
    {/* strop */}
    <rect x="0" y="0" width="200" height="22" fill="rgba(255,255,255,0.18)" />
    {/* ambientní světlo na stropě */}
    <ellipse cx="100" cy="6" rx="40" ry="12" fill="rgba(255,255,255,0.16)" />
    <ellipse cx="100" cy="6" rx="20" ry="8" fill="rgba(255,255,255,0.24)" />
    {/* stěna */}
    <rect x="0" y="22" width="200" height="86" fill="rgba(255,255,255,0.05)" />
    {/* okno */}
    <rect x="128" y="28" width="62" height="72" rx="4" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.24)" strokeWidth="1.2" />
    <line x1="159" y1="28" x2="159" y2="100" stroke="rgba(255,255,255,0.20)" strokeWidth="1" />
    <line x1="128" y1="64" x2="190" y2="64" stroke="rgba(255,255,255,0.16)" strokeWidth="1" />
    {/* kopce/příroda za oknem */}
    <path d="M130 100 Q148 60 166 100 Z" fill="rgba(255,255,255,0.16)" />
    <path d="M154 100 Q172 50 190 100 Z" fill="rgba(255,255,255,0.12)" />
    {/* masážní stůl – hlavní objekt */}
    <rect x="18" y="96" width="148" height="18" rx="9" fill="rgba(255,255,255,0.58)" />
    {/* polštář na hlavě */}
    <rect x="142" y="90" width="24" height="14" rx="7" fill="rgba(255,255,255,0.50)" />
    {/* nohy stolu */}
    <rect x="34"  y="114" width="7" height="46" rx="3" fill="rgba(255,255,255,0.38)" />
    <rect x="145" y="114" width="7" height="46" rx="3" fill="rgba(255,255,255,0.38)" />
    {/* osoba na stole – tělo */}
    <ellipse cx="96" cy="92" rx="50" ry="8" fill="rgba(255,255,255,0.36)" />
    {/* hlava */}
    <circle cx="152" cy="88" r="11" fill="rgba(255,255,255,0.48)" />
    {/* ručník */}
    <rect x="36" y="90" width="108" height="10" rx="5" fill="rgba(255,255,255,0.28)" />
    {/* velká rostlina vlevo */}
    <rect x="4" y="104" width="16" height="22" rx="4" fill="rgba(255,255,255,0.42)" />
    <ellipse cx="12" cy="98" rx="13" ry="12" fill="rgba(255,255,255,0.38)" />
    <ellipse cx="12" cy="98" rx="6"  ry="10" fill="rgba(255,255,255,0.26)" />
    <line x1="12" y1="86" x2="12" y2="104" stroke="rgba(255,255,255,0.28)" strokeWidth="1.5" />
    {/* svíčka 1 */}
    <rect x="112" y="86" width="8" height="22" rx="3" fill="rgba(255,255,255,0.45)" />
    <path d="M116 86 Q113 80 116 75 Q119 80 116 86 Z" fill="rgba(255,255,255,0.72)" />
    {/* svíčka 2 – menší */}
    <rect x="122" y="92" width="6" height="16" rx="2.5" fill="rgba(255,255,255,0.40)" />
    <path d="M125 92 Q123 87 125 83 Q127 87 125 92 Z" fill="rgba(255,255,255,0.65)" />
    {/* podstavec svíček */}
    <rect x="106" y="108" width="28" height="5" rx="2" fill="rgba(255,255,255,0.48)" />
  </Svg>
)

// ── Ceník – prodejna: police s produkty, pult, košík, cenovka ───────────────
const IllustrationCenik = () => (
  <Svg>
    {/* strop */}
    <rect x="0" y="0" width="200" height="22" fill="rgba(255,255,255,0.22)" />
    {/* lampa vlevo */}
    <line x1="48" y1="0" x2="48" y2="14" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
    <path d="M36 14 L48 28 L60 14 Z" fill="rgba(255,255,255,0.50)" />
    {/* zeď */}
    <rect x="0" y="22" width="200" height="86" fill="rgba(255,255,255,0.05)" />
    {/* zadní police – tři regály */}
    <rect x="0"   y="22" width="60"  height="86" fill="rgba(255,255,255,0.10)" />
    <rect x="70"  y="22" width="60"  height="86" fill="rgba(255,255,255,0.08)" />
    <rect x="140" y="22" width="60"  height="86" fill="rgba(255,255,255,0.10)" />
    {/* police – policky */}
    <rect x="2"   y="48" width="56" height="3" fill="rgba(255,255,255,0.24)" />
    <rect x="2"   y="72" width="56" height="3" fill="rgba(255,255,255,0.20)" />
    <rect x="72"  y="48" width="56" height="3" fill="rgba(255,255,255,0.22)" />
    <rect x="72"  y="72" width="56" height="3" fill="rgba(255,255,255,0.18)" />
    <rect x="142" y="48" width="56" height="3" fill="rgba(255,255,255,0.24)" />
    <rect x="142" y="72" width="56" height="3" fill="rgba(255,255,255,0.20)" />
    {/* produkty – horní police */}
    <rect x="5"  y="30" width="9"  height="18" rx="2" fill="rgba(255,255,255,0.40)" />
    <rect x="17" y="28" width="9"  height="20" rx="2" fill="rgba(255,255,255,0.32)" />
    <rect x="29" y="30" width="9"  height="18" rx="2" fill="rgba(255,255,255,0.38)" />
    <rect x="42" y="26" width="9"  height="22" rx="2" fill="rgba(255,255,255,0.28)" />
    <rect x="75" y="28" width="10" height="20" rx="2" fill="rgba(255,255,255,0.36)" />
    <rect x="88" y="30" width="10" height="18" rx="2" fill="rgba(255,255,255,0.28)" />
    <rect x="145" y="28" width="9" height="20" rx="2" fill="rgba(255,255,255,0.38)" />
    <rect x="158" y="26" width="9" height="22" rx="2" fill="rgba(255,255,255,0.30)" />
    <rect x="171" y="30" width="9" height="18" rx="2" fill="rgba(255,255,255,0.36)" />
    {/* produkty – střední police */}
    <ellipse cx="12"  cy="66" rx="8" ry="6" fill="rgba(255,255,255,0.36)" />
    <rect x="22"  y="56" width="12" height="16" rx="3" fill="rgba(255,255,255,0.42)" />
    <rect x="37"  y="58" width="10" height="14" rx="2" fill="rgba(255,255,255,0.30)" />
    <ellipse cx="82"  cy="64" rx="9" ry="7" fill="rgba(255,255,255,0.34)" />
    <rect x="95"  y="56" width="12" height="16" rx="3" fill="rgba(255,255,255,0.40)" />
    <ellipse cx="155" cy="64" rx="9" ry="7" fill="rgba(255,255,255,0.36)" />
    <rect x="167" y="56" width="10" height="16" rx="2" fill="rgba(255,255,255,0.30)" />
    <rect x="180" y="58" width="9"  height="14" rx="2" fill="rgba(255,255,255,0.38)" />
    {/* pokladní pult */}
    <rect x="0" y="108" width="200" height="12" rx="2" fill="rgba(255,255,255,0.58)" />
    <rect x="0" y="120" width="200" height="40" fill="rgba(255,255,255,0.44)" />
    {/* terminál / pokladna */}
    <rect x="136" y="80" width="36" height="28" rx="3" fill="rgba(255,255,255,0.52)" />
    <rect x="139" y="83" width="30" height="18" rx="2" fill="rgba(255,255,255,0.30)" />
    <rect x="140" y="106" width="28" height="4" rx="1" fill="rgba(255,255,255,0.42)" />
    {/* nákupní košík */}
    <path d="M54 86 L60 108 L96 108 L102 86 Z"
      fill="rgba(255,255,255,0.40)" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" />
    <line x1="66" y1="86" x2="68" y2="108" stroke="rgba(255,255,255,0.28)" strokeWidth="1" />
    <line x1="78" y1="86" x2="78" y2="108" stroke="rgba(255,255,255,0.28)" strokeWidth="1" />
    <line x1="90" y1="86" x2="88" y2="108" stroke="rgba(255,255,255,0.28)" strokeWidth="1" />
    <line x1="55" y1="97" x2="101" y2="97" stroke="rgba(255,255,255,0.28)" strokeWidth="1" />
    <path d="M60 86 Q78 73 96 86" stroke="rgba(255,255,255,0.52)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    {/* cenovka – výrazná */}
    <rect x="8" y="78" width="38" height="24" rx="5" fill="rgba(255,255,255,0.72)" />
    <circle cx="17" cy="83" r="3.5" stroke="rgba(255,255,255,0.45)" strokeWidth="1.2" fill="none" />
    <rect x="23" y="81" width="18" height="3.5" rx="1.75" fill="rgba(255,255,255,0.48)" />
    <rect x="23" y="88" width="12" height="2.5" rx="1.25" fill="rgba(255,255,255,0.35)" />
    <rect x="23" y="93" width="16" height="2.5" rx="1.25" fill="rgba(255,255,255,0.28)" />
  </Svg>
)

// ─────────────────────────────────────────────────────────────────────────────

type IllustrationKey = 'prukazka' | 'dokumenty' | 'strava' | 'procedury' | 'cenik'

const illustrations: Record<IllustrationKey, ReactNode> = {
  prukazka:  <IllustrationPrukazka />,
  dokumenty: <IllustrationDokumenty />,
  strava:    <IllustrationStrava />,
  procedury: <IllustrationProcedury />,
  cenik:     <IllustrationCenik />,
}

interface AppCardIllustratedProps {
  title: string
  subtitle: string
  illustration: IllustrationKey
  gradient: string
  href?: string
}

export default function AppCardIllustrated({ title, subtitle, illustration, gradient, href }: AppCardIllustratedProps) {
  return (
    <Card sx={{
      border: 'none', height: '100%', overflow: 'hidden', background: '#fff',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      '&:hover': {
        transform: 'translateY(-4px) scale(1.013)',
        boxShadow: '0 18px 44px rgba(0,0,0,0.15)',
      },
    }}>
      <CardActionArea href={href ?? '#'} sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
        <Box sx={{
          background: gradient, height: 170,
          position: 'relative', overflow: 'hidden', flexShrink: 0,
        }}>
          {/* dot pattern */}
          <Box sx={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)',
            backgroundSize: '22px 22px',
          }} />
          {illustrations[illustration]}
        </Box>

        <Box sx={{ p: 2.5, flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 0.5 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#1C1B1F', lineHeight: 1.2 }}>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'rgba(28,27,31,0.55)', lineHeight: 1.45, fontWeight: 500 }}>
            {subtitle}
          </Typography>
        </Box>
      </CardActionArea>
    </Card>
  )
}
