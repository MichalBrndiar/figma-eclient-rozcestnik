import { Box, Card, CardActionArea, Typography } from '@mui/material'
import { type ReactNode } from 'react'
import { Icon } from '@iconify/react'

const IllustrationIcon = ({ icon }: { icon: string }) => (
  <Box sx={{
    position: 'absolute', inset: 0,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  }}>
    <Box sx={{
      position: 'absolute',
      width: 130, height: 130,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.07)',
    }} />
    <Icon icon={icon} style={{ fontSize: 96, color: 'rgba(255,255,255,0.88)', position: 'relative' }} />
  </Box>
)

// ── Průkazka ──────────────────────────────────────────────────────────────────
const IllustrationPrukazka  = () => <IllustrationIcon icon="mdi:id-card" />
// ── Dokumenty ────────────────────────────────────────────────────────────────
const IllustrationDokumenty = () => <IllustrationIcon icon="mdi:file-multiple" />
// ── Strava ───────────────────────────────────────────────────────────────────
const IllustrationStrava    = () => <IllustrationIcon icon="mdi:silverware-fork-knife" />
// ── Procedury ────────────────────────────────────────────────────────────────
const IllustrationProcedury = () => <IllustrationIcon icon="mdi:spa" />
// ── Ceník ─────────────────────────────────────────────────────────────────────
const IllustrationCenik     = () => <IllustrationIcon icon="mdi:tag-multiple" />
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
  const handleClick = (e: React.MouseEvent) => {
    if (href?.startsWith('/')) {
      e.preventDefault()
      window.history.pushState(null, '', href)
      window.dispatchEvent(new PopStateEvent('popstate'))
    }
  }

  return (
    <Card sx={{
      border: 'none', height: '100%', overflow: 'hidden', background: '#fff',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      '&:hover': {
        transform: 'translateY(-4px) scale(1.013)',
        boxShadow: '0 18px 44px rgba(0,0,0,0.15)',
      },
    }}>
      <CardActionArea href={href ?? '#'} onClick={handleClick} sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
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
