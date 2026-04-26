import { Box, Chip, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import WbSunnyRounded from '@mui/icons-material/WbSunnyRounded'
import Brightness3Rounded from '@mui/icons-material/Brightness3Rounded'
import NightsStayRounded from '@mui/icons-material/NightsStayRounded'
import RestaurantRounded from '@mui/icons-material/RestaurantRounded'
import SpaRounded from '@mui/icons-material/SpaRounded'
import NotificationsRounded from '@mui/icons-material/NotificationsRounded'

function getGreeting() {
  const h = new Date().getHours()
  if (h >= 5 && h < 12) return { text: 'Dobré ráno', Icon: WbSunnyRounded, color: '#FDE68A' }
  if (h >= 12 && h < 18) return { text: 'Dobré odpoledne', Icon: Brightness3Rounded, color: '#FED7AA' }
  return { text: 'Dobrý večer', Icon: NightsStayRounded, color: '#C4B5FD' }
}

function formatDate() {
  return new Date().toLocaleDateString('cs-CZ', { weekday: 'long', day: 'numeric', month: 'long' })
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (d: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: d, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
}

export default function DashboardCard() {
  const { text, Icon, color } = getGreeting()

  return (
    <Box
      sx={{
        position: 'relative',
        borderRadius: '24px',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #4C1D95 0%, #7C3AED 40%, #2563EB 100%)',
        p: { xs: 3, sm: 3.5 },
        boxShadow: '0 12px 40px rgba(124,58,237,0.40)',
      }}
    >
      {/* dot pattern */}
      <Box sx={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: 'radial-gradient(rgba(255,255,255,0.10) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      {/* blob dekorace */}
      <Box sx={{ position: 'absolute', top: -60, right: -60, width: 240, height: 240, borderRadius: '50%', background: 'rgba(255,255,255,0.07)', pointerEvents: 'none' }} />
      <Box sx={{ position: 'absolute', bottom: -50, right: 80, width: 160, height: 160, borderRadius: '50%', background: 'rgba(99,102,241,0.35)', pointerEvents: 'none' }} />
      <Box sx={{ position: 'absolute', top: 20, left: -60, width: 180, height: 180, borderRadius: '50%', background: 'rgba(219,39,119,0.18)', pointerEvents: 'none' }} />

      {/* pozdrav řádek */}
      <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1.5 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Icon sx={{ fontSize: 20, color }} />
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.75)', fontWeight: 600, letterSpacing: 0.3 }}>
              {text}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, background: 'rgba(255,255,255,0.15)', borderRadius: '20px', px: 1.5, py: 0.5 }}>
            <NotificationsRounded sx={{ fontSize: 16, color: 'rgba(255,255,255,0.8)' }} />
            <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.8)', fontWeight: 700 }}>2</Typography>
          </Box>
        </Box>
      </motion.div>

      {/* jméno + datum */}
      <motion.div custom={0.08} variants={fadeUp} initial="hidden" animate="visible">
        <Typography variant="h5" sx={{ color: '#fff', fontWeight: 800, mb: 0.25, letterSpacing: '-0.3px' }}>
          Jan Novák
        </Typography>
        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', fontWeight: 500, mb: 2.5, textTransform: 'capitalize' }}>
          {formatDate()}
        </Typography>
      </motion.div>

      {/* rychlé info chipy */}
      <motion.div custom={0.16} variants={fadeUp} initial="hidden" animate="visible">
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          <Chip
            icon={<RestaurantRounded sx={{ fontSize: '16px !important', color: '#2E7D32 !important' }} />}
            label="Oběd: Svíčková"
            size="small"
            sx={{ background: 'rgba(255,255,255,0.92)', fontWeight: 700, fontSize: '0.72rem', color: '#1C1B1F', borderRadius: '12px' }}
          />
          <Chip
            icon={<SpaRounded sx={{ fontSize: '16px !important', color: '#AD1457 !important' }} />}
            label="Procedura: Masáž 14:00"
            size="small"
            sx={{ background: 'rgba(255,255,255,0.92)', fontWeight: 700, fontSize: '0.72rem', color: '#1C1B1F', borderRadius: '12px' }}
          />
        </Box>
      </motion.div>
    </Box>
  )
}
