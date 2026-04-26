import { Box, Card, CardActionArea, Typography } from '@mui/material'
import { type ReactNode } from 'react'

// Společný wrapper
const Svg = ({ children }: { children: ReactNode }) => (
  <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg"
    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
    {children}
  </svg>
)

// ── Průkazka – line-art průkaz s lanyard ────────────────────────────────────
const IllustrationPrukazka = () => (
  <Svg>
    {/* lanyard */}
    <path d="M 56,0 C 54,22 60,38 72,46 C 84,54 100,48 102,38 C 104,28 94,24 88,32 C 82,40 88,52 100,56"
      stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    {/* průkaz */}
    <rect x="66" y="58" width="68" height="48" rx="5"
      stroke="rgba(255,255,255,0.8)" strokeWidth="2" fill="none"/>
    {/* foto */}
    <circle cx="88" cy="78" r="9"
      stroke="rgba(255,255,255,0.65)" strokeWidth="1.5" fill="none"/>
    {/* jméno */}
    <line x1="104" y1="74" x2="126" y2="74"
      stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round"/>
    {/* detail */}
    <line x1="104" y1="82" x2="120" y2="82"
      stroke="rgba(255,255,255,0.45)" strokeWidth="1.3" strokeLinecap="round"/>
  </Svg>
)

// ── Dokumenty – line-art dokumenty ──────────────────────────────────────────
const IllustrationDokumenty = () => (
  <Svg>
    {/* dekorativní křivka */}
    <path d="M 0,32 C 22,24 46,38 70,30 C 94,22 140,18 172,28 C 188,34 200,26 200,26"
      stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    {/* zadní papír */}
    <rect x="62" y="44" width="54" height="72" rx="3"
      stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" fill="none"/>
    {/* přední papír */}
    <rect x="76" y="54" width="54" height="72" rx="3"
      stroke="rgba(255,255,255,0.8)" strokeWidth="2" fill="none"/>
    {/* řádky */}
    <line x1="86" y1="70" x2="120" y2="70"
      stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="86" y1="80" x2="116" y2="80"
      stroke="rgba(255,255,255,0.5)" strokeWidth="1.3" strokeLinecap="round"/>
    <line x1="86" y1="90" x2="110" y2="90"
      stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" strokeLinecap="round"/>
  </Svg>
)

// ── Strava – line-art talíř s příborem ─────────────────────────────────────
const IllustrationStrava = () => (
  <Svg>
    {/* vlna – levá */}
    <path d="M 0,82 C 18,76 34,88 50,80 C 58,76 64,80 70,80"
      stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    {/* vlna – pravá */}
    <path d="M 130,80 C 136,80 142,76 150,80 C 166,88 182,76 200,82"
      stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    {/* talíř vnější */}
    <circle cx="100" cy="80" r="30"
      stroke="rgba(255,255,255,0.8)" strokeWidth="2" fill="none"/>
    {/* talíř střed */}
    <circle cx="100" cy="80" r="20"
      stroke="rgba(255,255,255,0.65)" strokeWidth="1.5" fill="none"/>
    {/* talíř vnitřní */}
    <circle cx="100" cy="80" r="9"
      stroke="rgba(255,255,255,0.45)" strokeWidth="1.3" fill="none"/>
    {/* vidlička */}
    <path d="M 78,52 L 78,108 M 74,52 L 74,66 M 76,52 L 76,67 M 80,52 L 80,67 M 82,52 L 82,66 M 74,66 Q 78,74 82,66"
      stroke="rgba(255,255,255,0.75)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    {/* nůž */}
    <path d="M 122,52 L 122,108 M 122,52 C 128,54 128,68 122,70"
      stroke="rgba(255,255,255,0.75)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
)

// ── Procedury – line-art lotos ─────────────────────────────────────────────
const IllustrationProcedury = () => (
  <Svg>
    {/* vlna – levá */}
    <path d="M 0,107 C 18,101 36,111 56,103 C 68,99 78,103 88,105"
      stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    {/* vlna – pravá */}
    <path d="M 112,105 C 122,103 132,99 144,103 C 164,111 182,101 200,107"
      stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    {/* horní lístek */}
    <path d="M 100,105 C 94,83 92,59 100,41 C 108,59 106,83 100,105"
      stroke="rgba(255,255,255,0.8)" strokeWidth="2" fill="none" strokeLinejoin="round"/>
    {/* levý horní lístek */}
    <path d="M 100,105 C 82,89 68,73 62,57 C 76,65 90,81 100,105"
      stroke="rgba(255,255,255,0.75)" strokeWidth="1.8" fill="none" strokeLinejoin="round"/>
    {/* pravý horní lístek */}
    <path d="M 100,105 C 118,89 132,73 138,57 C 124,65 110,81 100,105"
      stroke="rgba(255,255,255,0.75)" strokeWidth="1.8" fill="none" strokeLinejoin="round"/>
    {/* levý dolní lístek */}
    <path d="M 100,105 C 80,99 58,93 44,83 C 56,99 78,107 100,105"
      stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
    {/* pravý dolní lístek */}
    <path d="M 100,105 C 120,99 142,93 156,83 C 144,99 122,107 100,105"
      stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
  </Svg>
)

// ── Ceník – line-art cenovka ───────────────────────────────────────────────
const IllustrationCenik = () => (
  <Svg>
    {/* stuha – levá */}
    <path d="M 0,70 C 16,62 34,76 50,68 C 60,64 66,68 72,72"
      stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    {/* stuha – pravá */}
    <path d="M 132,80 C 140,80 148,76 158,80 C 174,88 190,76 200,82"
      stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    {/* cenovka */}
    <path d="M 80,58 L 128,58 C 132,58 134,60 134,64 L 134,96 C 134,100 132,102 128,102 L 80,102 L 66,80 L 80,58 Z"
      stroke="rgba(255,255,255,0.8)" strokeWidth="2" fill="none" strokeLinejoin="round"/>
    {/* otvor */}
    <circle cx="82" cy="80" r="4"
      stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" fill="none"/>
    {/* cena */}
    <line x1="96" y1="76" x2="124" y2="76"
      stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round"/>
    {/* detail */}
    <line x1="96" y1="86" x2="118" y2="86"
      stroke="rgba(255,255,255,0.45)" strokeWidth="1.3" strokeLinecap="round"/>
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
