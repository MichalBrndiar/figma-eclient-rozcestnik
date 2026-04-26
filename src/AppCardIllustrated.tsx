import { Box, Card, CardActionArea, Typography } from '@mui/material'
import { type ReactNode } from 'react'

// Společný wrapper
const Svg = ({ children }: { children: ReactNode }) => (
  <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg"
    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
    {children}
  </svg>
)

// ── Průkazka – nakloněná ID karta ────────────────────────────────────────────
const IllustrationPrukazka = () => (
  <Svg>
    {/* dekorativní jiskřičky */}
    <circle cx="92" cy="38" r="2" fill="rgba(255,255,255,0.3)" />
    <circle cx="175" cy="118" r="1.5" fill="rgba(255,255,255,0.2)" />
    <path d="M 168,34 L 168,44 M 163,39 L 173,39"
      stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeLinecap="round" />
    {/* průkaz */}
    <g transform="rotate(-12 138 78)">
      <rect x="106" y="56" width="64" height="44" rx="5"
        stroke="rgba(255,255,255,0.85)" strokeWidth="2.5" fill="none" />
      <circle cx="124" cy="74" r="9"
        stroke="rgba(255,255,255,0.6)" strokeWidth="2" fill="none" />
      <line x1="140" y1="68" x2="162" y2="68"
        stroke="rgba(255,255,255,0.55)" strokeWidth="2" strokeLinecap="round" />
      <line x1="140" y1="78" x2="156" y2="78"
        stroke="rgba(255,255,255,0.4)" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="140" y1="87" x2="150" y2="87"
        stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" />
    </g>
  </Svg>
)

// ── Dokumenty – překrývající se dokumenty ────────────────────────────────────
const IllustrationDokumenty = () => (
  <Svg>
    {/* dekorativní jiskřičky */}
    <circle cx="98" cy="35" r="1.5" fill="rgba(255,255,255,0.25)" />
    <circle cx="178" cy="112" r="2" fill="rgba(255,255,255,0.2)" />
    <path d="M 100,120 L 100,128 M 96,124 L 104,124"
      stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round" />
    {/* dokumenty */}
    <g transform="rotate(-10 140 78)">
      {/* zadní dokument */}
      <rect x="114" y="46" width="48" height="64" rx="3"
        stroke="rgba(255,255,255,0.4)" strokeWidth="2" fill="none" />
      {/* přední dokument */}
      <rect x="122" y="54" width="48" height="64" rx="3"
        stroke="rgba(255,255,255,0.85)" strokeWidth="2.5" fill="none" />
      {/* záložka */}
      <rect x="152" y="50" width="12" height="8" rx="1.5"
        stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none" />
      {/* řádky */}
      <line x1="132" y1="70" x2="160" y2="70"
        stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" />
      <line x1="132" y1="80" x2="156" y2="80"
        stroke="rgba(255,255,255,0.4)" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="132" y1="90" x2="150" y2="90"
        stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" />
      {/* odrážka */}
      <circle cx="132" cy="100" r="2"
        fill="rgba(255,255,255,0.35)" />
      <line x1="138" y1="100" x2="154" y2="100"
        stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" />
    </g>
  </Svg>
)

// ── Strava – talíř s příborem ───────────────────────────────────────────────
const IllustrationStrava = () => (
  <Svg>
    {/* dekorativní jiskřičky */}
    <circle cx="100" cy="36" r="2" fill="rgba(255,255,255,0.25)" />
    <circle cx="172" cy="42" r="1.5" fill="rgba(255,255,255,0.2)" />
    <path d="M 170,112 L 170,120 M 166,116 L 174,116"
      stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round" />
    {/* talíř */}
    <circle cx="138" cy="80" r="30"
      stroke="rgba(255,255,255,0.85)" strokeWidth="2.5" fill="none" />
    <circle cx="138" cy="80" r="19"
      stroke="rgba(255,255,255,0.5)" strokeWidth="1.8" fill="none" />
    {/* vidlička */}
    <g transform="translate(108, 80)">
      <line x1="0" y1="-26" x2="0" y2="26"
        stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" />
      <line x1="-4" y1="-26" x2="-4" y2="-14"
        stroke="rgba(255,255,255,0.6)" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="4" y1="-26" x2="4" y2="-14"
        stroke="rgba(255,255,255,0.6)" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M -4,-14 Q 0,-8 4,-14"
        stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none" />
    </g>
    {/* nůž */}
    <g transform="translate(168, 80)">
      <line x1="0" y1="-26" x2="0" y2="26"
        stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" />
      <path d="M 0,-26 C 6,-24 6,-12 0,-10"
        stroke="rgba(255,255,255,0.6)" strokeWidth="1.8" fill="none" strokeLinecap="round" />
    </g>
  </Svg>
)

// ── Procedury – jiskřivé hvězdičky ──────────────────────────────────────────
const IllustrationProcedury = () => (
  <Svg>
    {/* dekorativní tečky */}
    <circle cx="100" cy="48" r="1.5" fill="rgba(255,255,255,0.2)" />
    <circle cx="172" cy="120" r="2" fill="rgba(255,255,255,0.25)" />
    <circle cx="108" cy="128" r="1.5" fill="rgba(255,255,255,0.15)" />
    {/* velká hvězda */}
    <path d="M 132,42 Q 140,62 160,70 Q 140,78 132,98 Q 124,78 104,70 Q 124,62 132,42 Z"
      stroke="rgba(255,255,255,0.85)" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
    {/* střední hvězda */}
    <path d="M 160,96 Q 164,104 172,108 Q 164,112 160,120 Q 156,112 148,108 Q 156,104 160,96 Z"
      stroke="rgba(255,255,255,0.6)" strokeWidth="2" fill="none" strokeLinejoin="round" />
    {/* malá hvězda */}
    <path d="M 108,104 Q 111,109 116,112 Q 111,115 108,120 Q 105,115 100,112 Q 105,109 108,104 Z"
      stroke="rgba(255,255,255,0.4)" strokeWidth="1.8" fill="none" strokeLinejoin="round" />
  </Svg>
)

// ── Ceník – nákupní taška se smajlíkem ──────────────────────────────────────
const IllustrationCenik = () => (
  <Svg>
    {/* dekorativní jiskřičky */}
    <circle cx="98" cy="40" r="2" fill="rgba(255,255,255,0.25)" />
    <circle cx="175" cy="116" r="1.5" fill="rgba(255,255,255,0.2)" />
    <path d="M 106,120 L 106,128 M 102,124 L 110,124"
      stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round" />
    {/* taška */}
    <g transform="rotate(-8 140 82)">
      {/* tělo */}
      <rect x="116" y="62" width="48" height="50" rx="5"
        stroke="rgba(255,255,255,0.85)" strokeWidth="2.5" fill="none" />
      {/* ucho */}
      <path d="M 128,62 C 128,46 152,46 152,62"
        stroke="rgba(255,255,255,0.6)" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* oko L */}
      <circle cx="132" cy="82" r="2.5"
        fill="rgba(255,255,255,0.6)" />
      {/* oko R */}
      <circle cx="148" cy="82" r="2.5"
        fill="rgba(255,255,255,0.6)" />
      {/* úsměv */}
      <path d="M 132,92 Q 140,100 148,92"
        stroke="rgba(255,255,255,0.55)" strokeWidth="2" fill="none" strokeLinecap="round" />
    </g>
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
