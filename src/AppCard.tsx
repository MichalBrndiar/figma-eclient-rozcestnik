import { Box, Card, CardActionArea, Typography } from '@mui/material'
import type { SvgIconComponent } from '@mui/icons-material'

interface AppCardProps {
  title: string
  subtitle: string
  Icon: SvgIconComponent
  gradient: string
  iconColor: string
  href?: string
}

export default function AppCard({ title, subtitle, Icon, gradient, iconColor, href }: AppCardProps) {
  return (
    <Card
      sx={{
        background: gradient,
        border: 'none',
        height: '100%',
        transition: 'transform 0.18s ease, box-shadow 0.18s ease',
        '&:hover': {
          transform: 'translateY(-4px) scale(1.015)',
          boxShadow: '0 12px 32px 0 rgba(103,80,164,0.18)',
        },
      }}
    >
      <CardActionArea
        href={href ?? '#'}
        sx={{ p: { xs: 2.5, sm: 3 }, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 1.5 }}
      >
        <Box
          sx={{
            width: 56,
            height: 56,
            borderRadius: '16px',
            background: 'rgba(255,255,255,0.55)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(4px)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          }}
        >
          <Icon sx={{ fontSize: 30, color: iconColor }} />
        </Box>

        <Box>
          <Typography variant="h6" sx={{ lineHeight: 1.25, mb: 0.5, color: '#1C1B1F' }}>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'rgba(28,27,31,0.65)', lineHeight: 1.4 }}>
            {subtitle}
          </Typography>
        </Box>
      </CardActionArea>
    </Card>
  )
}
