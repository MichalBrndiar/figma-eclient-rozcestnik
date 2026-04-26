import { Box, Card, CardActionArea, Typography } from '@mui/material'
import type { SvgIconComponent } from '@mui/icons-material'

export type CardVariant = 'normal' | 'featured' | 'wide'

interface AppCardProps {
  title: string
  subtitle: string
  Icon: SvgIconComponent
  gradient: string
  href?: string
  variant?: CardVariant
}

export default function AppCard({ title, subtitle, Icon, gradient, href, variant = 'normal' }: AppCardProps) {
  const isFeatured = variant === 'featured'
  const isWide = variant === 'wide'

  const handleClick = (e: React.MouseEvent) => {
    if (href?.startsWith('/')) {
      e.preventDefault()
      const url = new URL(window.location.href)
      url.pathname = href
      window.history.pushState(null, '', url.toString())
      window.dispatchEvent(new PopStateEvent('popstate'))
    }
  }

  return (
    <Card
      sx={{
        background: gradient,
        border: 'none',
        height: '100%',
        minHeight: isFeatured ? { sm: 200 } : isWide ? 130 : { sm: 160 },
        position: 'relative',
        overflow: 'hidden',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        '&:hover': {
          transform: 'translateY(-3px) scale(1.012)',
          boxShadow: '0 16px 40px rgba(0,0,0,0.22)',
        },
      }}
    >
      {/* dot pattern overlay */}
      <Box sx={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)',
        backgroundSize: '22px 22px',
      }} />

      {/* decorative circle */}
      <Box sx={{
        position: 'absolute',
        bottom: isWide ? -30 : -40,
        right: isWide ? -20 : -30,
        width: isFeatured ? 140 : 110,
        height: isFeatured ? 140 : 110,
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.08)',
        pointerEvents: 'none',
      }} />
      <Box sx={{
        position: 'absolute',
        top: -30,
        left: isWide ? 'auto' : -20,
        right: isWide ? '35%' : 'auto',
        width: 90,
        height: 90,
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.06)',
        pointerEvents: 'none',
      }} />

      <CardActionArea
        href={href ?? '#'}
        onClick={handleClick}
        sx={{
          p: { xs: 2.5, sm: isFeatured ? 3 : 2.5 },
          height: '100%',
          display: 'flex',
          flexDirection: isWide ? 'row' : 'column',
          alignItems: isWide ? 'center' : 'flex-start',
          gap: isWide ? 2.5 : 2,
        }}
      >
        <Box sx={{
          width: isFeatured ? 64 : 52,
          height: isFeatured ? 64 : 52,
          flexShrink: 0,
          borderRadius: isFeatured ? '20px' : '16px',
          background: 'rgba(255,255,255,0.2)',
          backdropFilter: 'blur(4px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 12px rgba(0,0,0,0.12)',
        }}>
          <Icon sx={{ fontSize: isFeatured ? 34 : 28, color: '#fff' }} />
        </Box>

        <Box sx={{ flex: 1 }}>
          <Typography
            variant={isFeatured ? 'h6' : 'subtitle1'}
            sx={{ color: '#fff', fontWeight: 800, lineHeight: 1.2, mb: 0.5 }}
          >
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.45, fontWeight: 500 }}>
            {subtitle}
          </Typography>
        </Box>
      </CardActionArea>
    </Card>
  )
}
