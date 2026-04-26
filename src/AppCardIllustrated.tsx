import { Box, Card, CardActionArea, Typography } from '@mui/material'
import { type ReactNode } from 'react'

// Společný wrapper – všechny ilustrace sdílí viewBox 200×160
const Svg = ({ children }: { children: ReactNode }) => (
  <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg"
    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
    {children}
  </svg>
)

// ── Průkazka ─────────────────────────────────────────────────────────────────
// Abstrakce: průkaz = obdélník + velký kruh (identita osoby)
const IllustrationPrukazka = () => (
  <Svg>
    {/* karta za – natočená */}
    <rect x="18" y="18" width="150" height="94" rx="18"
      fill="rgba(255,255,255,0.12)" transform="rotate(-7 93 65)" />
    {/* hlavní karta */}
    <rect x="34" y="28" width="156" height="98" rx="18"
      fill="rgba(255,255,255,0.24)" stroke="rgba(255,255,255,0.48)" strokeWidth="1.5" />
    {/* velký kruh identity – záměrně přesahuje přes hranu karty */}
    <circle cx="76" cy="77" r="34" fill="rgba(255,255,255,0.36)" />
    <circle cx="76" cy="72" r="16" fill="rgba(255,255,255,0.55)" />
    <path d="M50 111 Q76 96 102 111" fill="rgba(255,255,255,0.40)" />
    {/* datová pole – tři čisté obdélníky */}
    <rect x="122" y="54" width="56" height="9" rx="4.5" fill="rgba(255,255,255,0.65)" />
    <rect x="122" y="71" width="42" height="6" rx="3"   fill="rgba(255,255,255,0.35)" />
    <rect x="122" y="84" width="50" height="6" rx="3"   fill="rgba(255,255,255,0.25)" />
    {/* akcent – tečka vpravo nahoře */}
    <circle cx="176" cy="42" r="7" fill="rgba(255,255,255,0.38)" />
  </Svg>
)

// ── Dokumenty ────────────────────────────────────────────────────────────────
// Abstrakce: tři listy papíru seskládané za sebou
const IllustrationDokumenty = () => (
  <Svg>
    {/* třetí list – nejdál */}
    <rect x="20" y="10" width="120" height="150" rx="12"
      fill="rgba(255,255,255,0.10)" transform="rotate(-9 80 85)" />
    {/* druhý list */}
    <rect x="30" y="8" width="120" height="150" rx="12"
      fill="rgba(255,255,255,0.16)" transform="rotate(-3 90 83)" />
    {/* přední list */}
    <rect x="46" y="12" width="120" height="148" rx="12"
      fill="rgba(255,255,255,0.26)" stroke="rgba(255,255,255,0.50)" strokeWidth="1.5" />
    {/* rohový překlad (dog-ear) */}
    <path d="M166 12 L166 38 L140 12 Z" fill="rgba(255,255,255,0.45)" />
    <path d="M140 12 L166 38" stroke="rgba(255,255,255,0.30)" strokeWidth="1" />
    {/* řádky textu – tři silné pruhy různých délek */}
    <rect x="62" y="52" width="84" height="9" rx="4.5" fill="rgba(255,255,255,0.62)" />
    <rect x="62" y="70" width="68" height="6" rx="3"   fill="rgba(255,255,255,0.38)" />
    <rect x="62" y="83" width="76" height="6" rx="3"   fill="rgba(255,255,255,0.30)" />
    <rect x="62" y="96" width="58" height="6" rx="3"   fill="rgba(255,255,255,0.22)" />
    {/* podpisová linie */}
    <line x1="62" y1="128" x2="146" y2="128"
      stroke="rgba(255,255,255,0.38)" strokeWidth="1.5" strokeDasharray="5 4" />
  </Svg>
)

// ── Strava ───────────────────────────────────────────────────────────────────
// Dominanta: tři velké S-křivky páry stoupající z misky
const IllustrationStrava = () => (
  <Svg>
    {/* levá S-křivka – nejširší swing */}
    <path d="M62 170 C38 140 86 110 62 80 C38 50 86 20 62 -10"
      stroke="rgba(255,255,255,0.38)" strokeWidth="5" strokeLinecap="round" fill="none" />
    {/* středová S-křivka – nejsilnější */}
    <path d="M100 170 C76 140 124 110 100 80 C76 50 124 20 100 -10"
      stroke="rgba(255,255,255,0.55)" strokeWidth="6" strokeLinecap="round" fill="none" />
    {/* pravá S-křivka */}
    <path d="M138 170 C114 140 162 110 138 80 C114 50 162 20 138 -10"
      stroke="rgba(255,255,255,0.38)" strokeWidth="5" strokeLinecap="round" fill="none" />
    {/* miska – jednoduchý oblouk dole */}
    <path d="M34 148 Q100 182 166 148"
      stroke="rgba(255,255,255,0.55)" strokeWidth="4" strokeLinecap="round" fill="none" />
    <path d="M34 148 Q100 148 166 148 Q166 155 100 162 Q34 155 34 148 Z"
      fill="rgba(255,255,255,0.20)" />
    {/* nožičky misky */}
    <line x1="80" y1="162" x2="76" y2="172" stroke="rgba(255,255,255,0.32)" strokeWidth="3" strokeLinecap="round" />
    <line x1="120" y1="162" x2="124" y2="172" stroke="rgba(255,255,255,0.32)" strokeWidth="3" strokeLinecap="round" />
  </Svg>
)

// ── Procedury ────────────────────────────────────────────────────────────────
// Dominanta: pět velkých botanických listů kolem středu (spa/wellness)
const IllustrationProcedury = () => (
  <Svg>
    {/* list nahoru */}
    <path d="M100 80 C116 56 118 24 100 8 C82 24 84 56 100 80 Z"
      fill="rgba(255,255,255,0.22)" stroke="rgba(255,255,255,0.38)" strokeWidth="1" />
    {/* list vpravo-nahoru */}
    <path d="M100 80 C126 74 148 52 148 28 C124 22 104 46 100 80 Z"
      fill="rgba(255,255,255,0.26)" stroke="rgba(255,255,255,0.40)" strokeWidth="1" />
    {/* list vpravo-dolu */}
    <path d="M100 80 C128 86 154 112 140 134 C116 136 96 106 100 80 Z"
      fill="rgba(255,255,255,0.22)" stroke="rgba(255,255,255,0.36)" strokeWidth="1" />
    {/* list vlevo-dolu */}
    <path d="M100 80 C72 86 46 112 60 134 C84 136 104 106 100 80 Z"
      fill="rgba(255,255,255,0.22)" stroke="rgba(255,255,255,0.36)" strokeWidth="1" />
    {/* list vlevo-nahoru */}
    <path d="M100 80 C74 74 52 52 52 28 C76 22 96 46 100 80 Z"
      fill="rgba(255,255,255,0.26)" stroke="rgba(255,255,255,0.40)" strokeWidth="1" />
    {/* žilky listů – jemné středové linie */}
    <line x1="100" y1="80" x2="100" y2="10" stroke="rgba(255,255,255,0.28)" strokeWidth="1" strokeLinecap="round" />
    <line x1="100" y1="80" x2="147" y2="29" stroke="rgba(255,255,255,0.24)" strokeWidth="1" strokeLinecap="round" />
    <line x1="100" y1="80" x2="139" y2="133" stroke="rgba(255,255,255,0.20)" strokeWidth="1" strokeLinecap="round" />
    <line x1="100" y1="80" x2="61" y2="133" stroke="rgba(255,255,255,0.20)" strokeWidth="1" strokeLinecap="round" />
    <line x1="100" y1="80" x2="53" y2="29" stroke="rgba(255,255,255,0.24)" strokeWidth="1" strokeLinecap="round" />
    {/* středový kruh */}
    <circle cx="100" cy="80" r="14" fill="rgba(255,255,255,0.42)" />
    <circle cx="100" cy="80" r="6"  fill="rgba(255,255,255,0.70)" />
  </Svg>
)

// ── Ceník ────────────────────────────────────────────────────────────────────
// Abstrakce: velká jmenovka (tag) nakloněná + hvězdička + čáry
const IllustrationCenik = () => (
  <Svg>
    {/* stín jmenovky */}
    <rect x="38" y="28" width="124" height="108" rx="18"
      fill="rgba(0,0,0,0.08)" transform="rotate(8 100 82)" />
    {/* hlavní jmenovka */}
    <rect x="30" y="18" width="124" height="108" rx="18"
      fill="rgba(255,255,255,0.24)" stroke="rgba(255,255,255,0.50)" strokeWidth="1.5"
      transform="rotate(-6 92 72)" />
    {/* průchozí díra nahoře */}
    <circle cx="78" cy="26" r="9" fill="rgba(255,255,255,0.00)"
      stroke="rgba(255,255,255,0.55)" strokeWidth="2.5"
      transform="rotate(-6 92 72)" />
    {/* provázek */}
    <path d="M74 18 Q58 8 46 16" stroke="rgba(255,255,255,0.40)"
      strokeWidth="2" strokeLinecap="round" fill="none" />
    {/* cenové řádky */}
    <rect x="50" y="62" width="84" height="10" rx="5"  fill="rgba(255,255,255,0.62)" transform="rotate(-6 92 67)" />
    <rect x="50" y="80" width="62" height="7"  rx="3.5" fill="rgba(255,255,255,0.38)" transform="rotate(-6 92 83)" />
    <rect x="50" y="94" width="72" height="7"  rx="3.5" fill="rgba(255,255,255,0.26)" transform="rotate(-6 92 97)" />
    {/* hvězdička – čtyřcípá */}
    <path d="M162 32 L165 22 L168 32 L178 35 L168 38 L165 48 L162 38 L152 35 Z"
      fill="rgba(255,255,255,0.55)" />
    {/* malá hvězdička */}
    <path d="M40 112 L41.5 107 L43 112 L48 113.5 L43 115 L41.5 120 L40 115 L35 113.5 Z"
      fill="rgba(255,255,255,0.38)" />
    {/* akcent kruh vpravo dole */}
    <circle cx="168" cy="118" r="16" fill="rgba(255,255,255,0.16)"
      stroke="rgba(255,255,255,0.30)" strokeWidth="1.5" />
    <circle cx="168" cy="118" r="8"  fill="rgba(255,255,255,0.24)" />
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
