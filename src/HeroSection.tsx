import { Box, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import WbSunnyRounded from '@mui/icons-material/WbSunnyRounded'
import Brightness3Rounded from '@mui/icons-material/Brightness3Rounded'
import NightsStayRounded from '@mui/icons-material/NightsStayRounded'

function getGreeting(): { text: string; Icon: typeof WbSunnyRounded; color: string } {
  const h = new Date().getHours()
  if (h >= 5 && h < 12) return { text: 'Dobré ráno', Icon: WbSunnyRounded, color: '#F59E0B' }
  if (h >= 12 && h < 18) return { text: 'Dobré odpoledne', Icon: Brightness3Rounded, color: '#F97316' }
  return { text: 'Dobrý večer', Icon: NightsStayRounded, color: '#6366F1' }
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
}

export default function HeroSection() {
  const { text, Icon, color } = getGreeting()

  return (
    <Box sx={{ position: 'relative', mb: { xs: 3, sm: 5 }, overflow: 'hidden' }}>
      {/* dekorativní blob */}
      <Box
        sx={{
          position: 'absolute',
          top: -60,
          right: -80,
          width: 260,
          height: 260,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(103,80,164,0.18) 0%, rgba(103,80,164,0) 70%)',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 20,
          left: -100,
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(21,101,192,0.12) 0%, rgba(21,101,192,0) 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* pozdrav */}
      <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
          <Icon sx={{ fontSize: 22, color }} />
          <Typography variant="body2" sx={{ color: 'rgba(28,27,31,0.5)', fontWeight: 600, letterSpacing: 0.3 }}>
            {text}
          </Typography>
        </Box>
      </motion.div>

      <motion.div custom={0.1} variants={fadeUp} initial="hidden" animate="visible">
        <Typography
          variant="h4"
          sx={{
            mb: 0.75,
            background: 'linear-gradient(135deg, #6750A4 0%, #1565C0 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Vítejte v&nbsp;eClientu
        </Typography>
      </motion.div>

      <motion.div custom={0.18} variants={fadeUp} initial="hidden" animate="visible">
        <Typography variant="subtitle1" sx={{ color: 'rgba(28,27,31,0.5)', fontWeight: 500 }}>
          Vyberte službu, kterou chcete použít
        </Typography>
      </motion.div>
    </Box>
  )
}
