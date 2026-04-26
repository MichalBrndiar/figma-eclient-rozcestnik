import { Box, Card, CardActionArea, Typography } from '@mui/material'
import { type ReactNode } from 'react'

// Společný wrapper
const Svg = ({ children }: { children: ReactNode }) => (
  <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg"
    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
    {children}
  </svg>
)

// ── Průkazka – recepce s výhledem na město ────────────────────────────────
const IllustrationPrukazka = () => (
  <Svg>
    {/* strop */}
    <rect x="0" y="0" width="200" height="20" fill="rgba(255,255,255,0.20)" />
    {/* závěsná lampa */}
    <rect x="100" y="0" width="2" height="14" fill="rgba(255,255,255,0.30)" />
    <path d="M88 14 L101 30 L114 14 Z" fill="rgba(255,255,255,0.45)" />
    {/* skyline – jedna vrstva */}
    <rect x="8" y="52" width="22" height="56" fill="rgba(255,255,255,0.15)" />
    <rect x="36" y="38" width="16" height="70" fill="rgba(255,255,255,0.18)" />
    <rect x="80" y="44" width="26" height="64" fill="rgba(255,255,255,0.14)" />
    <rect x="120" y="34" width="18" height="74" fill="rgba(255,255,255,0.17)" />
    <rect x="160" y="48" width="24" height="60" fill="rgba(255,255,255,0.15)" />
    {/* oblak */}
    <ellipse cx="62" cy="40" rx="18" ry="8" fill="rgba(255,255,255,0.75)" />
    <ellipse cx="76" cy="38" rx="14" ry="9" fill="rgba(255,255,255,0.70)" />
    {/* recepční pult */}
    <rect x="0" y="108" width="200" height="12" fill="rgba(255,255,255,0.55)" />
    <rect x="0" y="120" width="200" height="40" fill="rgba(255,255,255,0.35)" />
    {/* monitor */}
    <rect x="18" y="76" width="40" height="30" rx="3" fill="rgba(255,255,255,0.48)" />
    <rect x="22" y="80" width="32" height="20" fill="rgba(255,255,255,0.22)" />
    <rect x="34" y="106" width="16" height="4" fill="rgba(255,255,255,0.38)" />
    {/* postava */}
    <circle cx="110" cy="78" r="16" fill="rgba(255,255,255,0.50)" />
    <rect x="94" y="94" width="32" height="20" rx="8" fill="rgba(255,255,255,0.40)" />
    {/* průkazka – velká, výrazná */}
    <rect x="146" y="82" width="48" height="34" rx="6" fill="rgba(255,255,255,0.80)" />
    <circle cx="160" cy="96" r="8" fill="rgba(255,255,255,0.40)" />
    <rect x="172" y="92" width="16" height="4" rx="2" fill="rgba(255,255,255,0.40)" />
    <rect x="172" y="100" width="12" height="3" rx="1.5" fill="rgba(255,255,255,0.30)" />
    {/* rostlina */}
    <rect x="4" y="94" width="14" height="16" rx="4" fill="rgba(255,255,255,0.45)" />
    <circle cx="11" cy="86" r="11" fill="rgba(255,255,255,0.32)" />
  </Svg>
)

// ── Dokumenty – kancelář s archivem a stolem ──────────────────────────────
const IllustrationDokumenty = () => (
  <Svg>
    {/* strop */}
    <rect x="0" y="0" width="200" height="20" fill="rgba(255,255,255,0.20)" />
    {/* závěsná lampa */}
    <rect x="140" y="0" width="2" height="14" fill="rgba(255,255,255,0.30)" />
    <path d="M128 14 L141 30 L154 14 Z" fill="rgba(255,255,255,0.45)" />
    {/* archivní skříň */}
    <rect x="4" y="24" width="54" height="84" rx="3" fill="rgba(255,255,255,0.15)" />
    <rect x="4" y="54" width="54" height="3" fill="rgba(255,255,255,0.22)" />
    <rect x="4" y="80" width="54" height="3" fill="rgba(255,255,255,0.20)" />
    {/* šanony – horní */}
    <rect x="8" y="28" width="11" height="24" rx="2" fill="rgba(255,255,255,0.42)" />
    <rect x="21" y="28" width="11" height="24" rx="2" fill="rgba(255,255,255,0.30)" />
    <rect x="34" y="28" width="11" height="24" rx="2" fill="rgba(255,255,255,0.46)" />
    {/* šanony – dolní */}
    <rect x="8" y="58" width="11" height="20" rx="2" fill="rgba(255,255,255,0.34)" />
    <rect x="21" y="58" width="11" height="20" rx="2" fill="rgba(255,255,255,0.44)" />
    <rect x="34" y="58" width="11" height="20" rx="2" fill="rgba(255,255,255,0.28)" />
    {/* stůl */}
    <rect x="64" y="108" width="134" height="12" rx="2" fill="rgba(255,255,255,0.55)" />
    <rect x="78" y="120" width="8" height="40" fill="rgba(255,255,255,0.32)" />
    <rect x="182" y="120" width="8" height="40" fill="rgba(255,255,255,0.32)" />
    {/* monitor */}
    <rect x="150" y="74" width="42" height="32" rx="3" fill="rgba(255,255,255,0.48)" />
    <rect x="154" y="78" width="34" height="22" fill="rgba(255,255,255,0.22)" />
    <rect x="166" y="106" width="18" height="4" fill="rgba(255,255,255,0.38)" />
    {/* dokumenty */}
    <rect x="84" y="86" width="52" height="16" rx="3" fill="rgba(255,255,255,0.42)" />
    <rect x="86" y="78" width="52" height="16" rx="3" fill="rgba(255,255,255,0.56)" />
    <rect x="114" y="76" width="8" height="12" rx="2" fill="rgba(255,255,255,0.78)" />
    {/* stolní lampa */}
    <rect x="70" y="102" width="14" height="8" rx="3" fill="rgba(255,255,255,0.40)" />
    <rect x="75" y="78" width="4" height="26" rx="2" fill="rgba(255,255,255,0.38)" />
    <path d="M66 78 L77 64 L88 78 Z" fill="rgba(255,255,255,0.50)" />
  </Svg>
)

// ── Strava – kuchyně s výdejem jídla ──────────────────────────────────────
const IllustrationStrava = () => (
  <Svg>
    {/* strop */}
    <rect x="0" y="0" width="200" height="20" fill="rgba(255,255,255,0.20)" />
    {/* závěsná lampa */}
    <rect x="160" y="0" width="2" height="14" fill="rgba(255,255,255,0.30)" />
    <path d="M148 14 L161 30 L174 14 Z" fill="rgba(255,255,255,0.45)" />
    {/* digestoř */}
    <path d="M50 20 L40 58 L140 58 L130 20 Z" fill="rgba(255,255,255,0.20)" />
    <rect x="38" y="56" width="104" height="6" rx="2" fill="rgba(255,255,255,0.28)" />
    {/* hrnec */}
    <rect x="16" y="72" width="48" height="36" rx="4" fill="rgba(255,255,255,0.28)" />
    <ellipse cx="40" cy="72" rx="24" ry="8" fill="rgba(255,255,255,0.45)" />
    <ellipse cx="40" cy="70" rx="16" ry="5" fill="rgba(255,255,255,0.55)" />
    {/* pára */}
    <ellipse cx="32" cy="46" rx="8" ry="14" fill="rgba(255,255,255,0.22)" />
    <ellipse cx="48" cy="40" rx="10" ry="12" fill="rgba(255,255,255,0.18)" />
    {/* výdejní pult */}
    <rect x="0" y="108" width="200" height="12" fill="rgba(255,255,255,0.55)" />
    <rect x="0" y="120" width="200" height="40" fill="rgba(255,255,255,0.38)" />
    {/* tác s talíři */}
    <rect x="72" y="92" width="64" height="16" rx="3" fill="rgba(255,255,255,0.38)" />
    <ellipse cx="90" cy="100" rx="12" ry="8" fill="rgba(255,255,255,0.58)" />
    <ellipse cx="118" cy="100" rx="12" ry="8" fill="rgba(255,255,255,0.58)" />
    {/* kuchař */}
    <circle cx="170" cy="78" r="16" fill="rgba(255,255,255,0.50)" />
    <rect x="154" y="94" width="32" height="20" rx="8" fill="rgba(255,255,255,0.40)" />
    <rect x="162" y="62" width="16" height="12" rx="6" fill="rgba(255,255,255,0.60)" />
  </Svg>
)

// ── Procedury – spa místnost s výhledem ───────────────────────────────────
const IllustrationProcedury = () => (
  <Svg>
    {/* strop + ambientní záře */}
    <rect x="0" y="0" width="200" height="20" fill="rgba(255,255,255,0.18)" />
    <ellipse cx="100" cy="8" rx="36" ry="14" fill="rgba(255,255,255,0.16)" />
    {/* okno s přírodou */}
    <rect x="132" y="26" width="60" height="74" rx="4" fill="rgba(255,255,255,0.12)" />
    <path d="M134 100 Q160 54 192 100 Z" fill="rgba(255,255,255,0.14)" />
    <ellipse cx="164" cy="38" rx="16" ry="6" fill="rgba(255,255,255,0.50)" />
    {/* masážní stůl */}
    <rect x="20" y="96" width="140" height="18" rx="9" fill="rgba(255,255,255,0.55)" />
    <rect x="136" y="90" width="24" height="14" rx="7" fill="rgba(255,255,255,0.46)" />
    <rect x="36" y="114" width="8" height="46" rx="3" fill="rgba(255,255,255,0.32)" />
    <rect x="140" y="114" width="8" height="46" rx="3" fill="rgba(255,255,255,0.32)" />
    {/* osoba */}
    <ellipse cx="90" cy="92" rx="46" ry="7" fill="rgba(255,255,255,0.30)" />
    <circle cx="148" cy="86" r="12" fill="rgba(255,255,255,0.44)" />
    {/* svíčka */}
    <rect x="8" y="88" width="10" height="24" rx="4" fill="rgba(255,255,255,0.44)" />
    <path d="M13 88 Q10 80 13 73 Q16 80 13 88 Z" fill="rgba(255,255,255,0.70)" />
    {/* rostlina */}
    <rect x="4" y="116" width="16" height="18" rx="4" fill="rgba(255,255,255,0.42)" />
    <ellipse cx="12" cy="108" rx="13" ry="12" fill="rgba(255,255,255,0.34)" />
  </Svg>
)

// ── Ceník – prodejna s regály a pokladnou ─────────────────────────────────
const IllustrationCenik = () => (
  <Svg>
    {/* strop */}
    <rect x="0" y="0" width="200" height="20" fill="rgba(255,255,255,0.20)" />
    {/* závěsná lampa */}
    <rect x="56" y="0" width="2" height="14" fill="rgba(255,255,255,0.30)" />
    <path d="M44 14 L57 30 L70 14 Z" fill="rgba(255,255,255,0.45)" />
    {/* regály */}
    <rect x="2" y="22" width="80" height="86" fill="rgba(255,255,255,0.10)" />
    <rect x="92" y="22" width="50" height="86" fill="rgba(255,255,255,0.08)" />
    <rect x="4" y="48" width="76" height="3" fill="rgba(255,255,255,0.20)" />
    <rect x="4" y="74" width="76" height="3" fill="rgba(255,255,255,0.18)" />
    <rect x="94" y="48" width="46" height="3" fill="rgba(255,255,255,0.20)" />
    <rect x="94" y="74" width="46" height="3" fill="rgba(255,255,255,0.18)" />
    {/* produkty */}
    <rect x="8" y="28" width="12" height="18" rx="2" fill="rgba(255,255,255,0.40)" />
    <rect x="24" y="26" width="12" height="20" rx="2" fill="rgba(255,255,255,0.30)" />
    <rect x="40" y="28" width="12" height="18" rx="2" fill="rgba(255,255,255,0.38)" />
    <rect x="98" y="28" width="12" height="18" rx="2" fill="rgba(255,255,255,0.36)" />
    <ellipse cx="16" cy="64" rx="10" ry="7" fill="rgba(255,255,255,0.34)" />
    <rect x="32" y="54" width="14" height="16" rx="3" fill="rgba(255,255,255,0.42)" />
    {/* pokladní pult */}
    <rect x="0" y="108" width="200" height="12" rx="2" fill="rgba(255,255,255,0.55)" />
    <rect x="0" y="120" width="200" height="40" fill="rgba(255,255,255,0.40)" />
    {/* terminál */}
    <rect x="148" y="76" width="40" height="30" rx="3" fill="rgba(255,255,255,0.50)" />
    <rect x="152" y="80" width="32" height="20" fill="rgba(255,255,255,0.25)" />
    <rect x="160" y="106" width="18" height="4" fill="rgba(255,255,255,0.38)" />
    {/* nákupní košík */}
    <path d="M68 86 L74 108 L110 108 L116 86 Z" fill="rgba(255,255,255,0.35)" />
    <path d="M76 86 Q92 70 108 86 L104 86 Q92 74 80 86 Z" fill="rgba(255,255,255,0.42)" />
    {/* cenovka */}
    <rect x="8" y="80" width="38" height="24" rx="5" fill="rgba(255,255,255,0.72)" />
    <circle cx="18" cy="88" r="5" fill="rgba(255,255,255,0.38)" />
    <rect x="26" y="85" width="14" height="4" rx="2" fill="rgba(255,255,255,0.42)" />
    <rect x="26" y="92" width="10" height="3" rx="1.5" fill="rgba(255,255,255,0.30)" />
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
