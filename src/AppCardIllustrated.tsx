import { Box, Card, CardActionArea, Typography } from '@mui/material'
import { Icon } from '@iconify/react'

type IllustrationKey = 'prukazka' | 'dokumenty' | 'strava' | 'procedury' | 'cenik'

const iconMap: Record<IllustrationKey, string> = {
  prukazka:  'fluent-emoji:identification-card',
  dokumenty: 'fluent-emoji:open-file-folder',
  strava:    'fluent-emoji:fork-and-knife-with-plate',
  procedury: 'fluent-emoji:woman-in-lotus-position',
  cenik:     'fluent-emoji:shopping-bags',
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
    <Card
      sx={{
        border: 'none',
        height: '100%',
        overflow: 'hidden',
        background: '#fff',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        '&:hover': {
          transform: 'translateY(-4px) scale(1.013)',
          boxShadow: '0 18px 44px rgba(0,0,0,0.15)',
          '& .card-icon': { transform: 'scale(1.12) rotate(-4deg)' },
        },
      }}
    >
      <CardActionArea href={href ?? '#'} sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
        {/* ilustrační oblast */}
        <Box
          sx={{
            background: gradient,
            height: 170,
            position: 'relative',
            overflow: 'hidden',
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* dot pattern */}
          <Box sx={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.16) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }} />
          {/* dekorativní glow kruh za ikonou */}
          <Box sx={{
            position: 'absolute',
            width: 140, height: 140,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.14)',
            filter: 'blur(18px)',
          }} />
          {/* druhý menší kruh */}
          <Box sx={{
            position: 'absolute',
            width: 90, height: 90,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.18)',
            filter: 'blur(8px)',
          }} />
          {/* emoji ikona */}
          <Box
            className="card-icon"
            sx={{
              position: 'relative',
              fontSize: 96,
              lineHeight: 1,
              transition: 'transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1)',
              filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.20))',
              userSelect: 'none',
            }}
          >
            <Icon icon={iconMap[illustration]} width={96} height={96} />
          </Box>
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
