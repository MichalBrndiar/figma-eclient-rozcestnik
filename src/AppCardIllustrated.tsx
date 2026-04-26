import { Box, Card, CardActionArea, Typography } from '@mui/material'
import { type ReactNode } from 'react'

// ── mini SVG ilustrace ──────────────────────────────────────────────────────

const IllustrationPrukazka = () => (
  <svg viewBox="0 0 200 130" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
    <rect x="28" y="22" width="144" height="90" rx="12" fill="rgba(255,255,255,0.18)" />
    <rect x="28" y="22" width="144" height="90" rx="12" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
    <circle cx="65" cy="58" r="18" fill="rgba(255,255,255,0.22)" />
    <circle cx="65" cy="52" r="9" fill="rgba(255,255,255,0.40)" />
    <path d="M48 76 Q65 68 82 76" stroke="rgba(255,255,255,0.40)" strokeWidth="2" strokeLinecap="round" fill="none" />
    <rect x="92" y="46" width="56" height="5" rx="2.5" fill="rgba(255,255,255,0.50)" />
    <rect x="92" y="57" width="40" height="4" rx="2" fill="rgba(255,255,255,0.30)" />
    <rect x="92" y="67" width="48" height="4" rx="2" fill="rgba(255,255,255,0.25)" />
    <rect x="38" y="98" width="30" height="6" rx="3" fill="rgba(255,255,255,0.20)" />
    <circle cx="155" cy="34" r="6" fill="rgba(255,255,255,0.30)" />
    <circle cx="158" cy="38" r="3" fill="rgba(255,255,255,0.20)" />
  </svg>
)

const IllustrationDokumenty = () => (
  <svg viewBox="0 0 200 130" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
    <rect x="56" y="35" width="80" height="96" rx="8" fill="rgba(255,255,255,0.12)" transform="rotate(-8 56 35)" />
    <rect x="42" y="28" width="80" height="96" rx="8" fill="rgba(255,255,255,0.16)" transform="rotate(-3 42 28)" />
    <rect x="50" y="18" width="96" height="112" rx="10" fill="rgba(255,255,255,0.22)" />
    <rect x="50" y="18" width="96" height="112" rx="10" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
    <rect x="64" y="40" width="68" height="5" rx="2.5" fill="rgba(255,255,255,0.55)" />
    <rect x="64" y="52" width="56" height="3.5" rx="1.75" fill="rgba(255,255,255,0.35)" />
    <rect x="64" y="62" width="60" height="3.5" rx="1.75" fill="rgba(255,255,255,0.30)" />
    <rect x="64" y="72" width="50" height="3.5" rx="1.75" fill="rgba(255,255,255,0.25)" />
    <rect x="64" y="88" width="44" height="7" rx="3.5" fill="rgba(255,255,255,0.20)" />
    <path d="M64 108 L128 108" stroke="rgba(255,255,255,0.30)" strokeWidth="1.5" strokeDasharray="4 3" />
  </svg>
)

const IllustrationStrava = () => (
  <svg viewBox="0 0 200 130" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
    <circle cx="100" cy="68" r="46" fill="rgba(255,255,255,0.15)" />
    <circle cx="100" cy="68" r="46" stroke="rgba(255,255,255,0.30)" strokeWidth="1.5" />
    <circle cx="100" cy="68" r="34" fill="rgba(255,255,255,0.12)" />
    <ellipse cx="88" cy="62" rx="10" ry="7" fill="rgba(255,255,255,0.40)" />
    <ellipse cx="112" cy="58" rx="8" ry="6" fill="rgba(255,255,255,0.30)" />
    <ellipse cx="100" cy="76" rx="9" ry="6" fill="rgba(255,255,255,0.35)" />
    <ellipse cx="85" cy="78" rx="6" ry="4" fill="rgba(255,255,255,0.25)" />
    <path d="M152 20 L152 50" stroke="rgba(255,255,255,0.40)" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M148 20 L148 35 Q148 40 152 42" stroke="rgba(255,255,255,0.30)" strokeWidth="2" strokeLinecap="round" fill="none" />
    <path d="M156 20 L156 35 Q156 40 152 42" stroke="rgba(255,255,255,0.30)" strokeWidth="2" strokeLinecap="round" fill="none" />
    <path d="M42 28 Q42 22 42 20 L42 50" stroke="rgba(255,255,255,0.35)" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
)

const IllustrationProcedury = () => (
  <svg viewBox="0 0 200 130" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
    <ellipse cx="100" cy="78" rx="18" ry="8" fill="rgba(255,255,255,0.20)" />
    {/* okvětní lístky */}
    <ellipse cx="100" cy="52" rx="12" ry="28" fill="rgba(255,255,255,0.22)" />
    <ellipse cx="100" cy="52" rx="12" ry="28" fill="rgba(255,255,255,0.22)" transform="rotate(60 100 78)" />
    <ellipse cx="100" cy="52" rx="12" ry="28" fill="rgba(255,255,255,0.22)" transform="rotate(120 100 78)" />
    <ellipse cx="100" cy="52" rx="12" ry="28" fill="rgba(255,255,255,0.18)" transform="rotate(180 100 78)" />
    <ellipse cx="100" cy="52" rx="12" ry="28" fill="rgba(255,255,255,0.18)" transform="rotate(240 100 78)" />
    <ellipse cx="100" cy="52" rx="12" ry="28" fill="rgba(255,255,255,0.18)" transform="rotate(300 100 78)" />
    <circle cx="100" cy="78" r="10" fill="rgba(255,255,255,0.40)" />
    {/* sparkle tečky */}
    <circle cx="152" cy="30" r="3" fill="rgba(255,255,255,0.45)" />
    <circle cx="44" cy="38" r="2.5" fill="rgba(255,255,255,0.35)" />
    <circle cx="160" cy="90" r="2" fill="rgba(255,255,255,0.30)" />
    <circle cx="38" cy="95" r="3" fill="rgba(255,255,255,0.25)" />
  </svg>
)

const IllustrationCenik = () => (
  <svg viewBox="0 0 200 130" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
    {/* nákupní taška */}
    <path d="M68 52 L72 92 Q72 98 78 98 L122 98 Q128 98 128 92 L132 52 Z" fill="rgba(255,255,255,0.20)" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
    <path d="M82 52 Q82 36 100 36 Q118 36 118 52" stroke="rgba(255,255,255,0.45)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <circle cx="89" cy="72" r="5" fill="rgba(255,255,255,0.40)" />
    <circle cx="111" cy="72" r="5" fill="rgba(255,255,255,0.40)" />
    <rect x="92" y="79" width="16" height="3" rx="1.5" fill="rgba(255,255,255,0.30)" />
    {/* cenová jmenovka */}
    <rect x="130" y="22" width="38" height="24" rx="6" fill="rgba(255,255,255,0.22)" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" />
    <circle cx="138" cy="30" r="3" fill="rgba(255,255,255,0.40)" />
    <rect x="143" y="28" width="18" height="3" rx="1.5" fill="rgba(255,255,255,0.40)" />
    <rect x="143" y="34" width="12" height="2.5" rx="1.25" fill="rgba(255,255,255,0.25)" />
    {/* sparkles */}
    <path d="M40 48 L42 44 L44 48 L48 50 L44 52 L42 56 L40 52 L36 50 Z" fill="rgba(255,255,255,0.30)" />
    <path d="M158 85 L159.5 82 L161 85 L164 86.5 L161 88 L159.5 91 L158 88 L155 86.5 Z" fill="rgba(255,255,255,0.25)" />
  </svg>
)

// ── mapa ilustrací ──────────────────────────────────────────────────────────

type IllustrationKey = 'prukazka' | 'dokumenty' | 'strava' | 'procedury' | 'cenik'

const illustrations: Record<IllustrationKey, ReactNode> = {
  prukazka: <IllustrationPrukazka />,
  dokumenty: <IllustrationDokumenty />,
  strava: <IllustrationStrava />,
  procedury: <IllustrationProcedury />,
  cenik: <IllustrationCenik />,
}

// ── komponenta karty ────────────────────────────────────────────────────────

interface AppCardIllustratedProps {
  title: string
  subtitle: string
  illustration: IllustrationKey
  gradient: string
  href?: string
}

export default function AppCardIllustrated({ title, subtitle, illustration, gradient, href }: AppCardIllustratedProps) {
  return (
    <Card
      sx={{
        border: 'none',
        height: '100%',
        overflow: 'hidden',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        background: '#fff',
        '&:hover': {
          transform: 'translateY(-4px) scale(1.013)',
          boxShadow: '0 16px 40px rgba(0,0,0,0.14)',
        },
      }}
    >
      <CardActionArea href={href ?? '#'} sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
        {/* ilustrační oblast */}
        <Box
          sx={{
            background: gradient,
            height: 140,
            position: 'relative',
            overflow: 'hidden',
            flexShrink: 0,
          }}
        >
          {/* dot pattern */}
          <Box sx={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.16) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }} />
          {illustrations[illustration]}
        </Box>

        {/* textový obsah */}
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
