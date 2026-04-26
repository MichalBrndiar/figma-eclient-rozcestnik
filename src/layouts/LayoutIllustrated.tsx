import { Grid, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import AppCardIllustrated from '../AppCardIllustrated'
import DashboardCard from '../DashboardCard'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}
const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.44, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
}

const apps = [
  {
    title: 'Průkazka',
    subtitle: 'Váš digitální průkaz a osobní údaje klienta',
    illustration: 'prukazka' as const,
    gradient: 'linear-gradient(135deg, #7B68C8 0%, #9D8FDC 100%)',
    href: '#prukazka',
  },
  {
    title: 'Dokumenty',
    subtitle: 'Smlouvy, formuláře a přílohy',
    illustration: 'dokumenty' as const,
    gradient: 'linear-gradient(135deg, #C8784A 0%, #DBA96A 100%)',
    href: '#dokumenty',
  },
  {
    title: 'Objednání stravy',
    subtitle: 'Jídelníček a výběr jídel na každý den',
    illustration: 'strava' as const,
    gradient: 'linear-gradient(135deg, #3A9E80 0%, #62BFA0 100%)',
    href: '#strava',
  },
  {
    title: 'Objednání procedur',
    subtitle: 'Rehabilitace, masáže a terapeutické procedury',
    illustration: 'procedury' as const,
    gradient: 'linear-gradient(135deg, #B85C8A 0%, #D48CB0 100%)',
    href: '#procedury',
  },
  {
    title: 'Ceníkové položky',
    subtitle: 'Doplňkové služby, hygienické potřeby a zboží z nabídky',
    illustration: 'cenik' as const,
    gradient: 'linear-gradient(135deg, #4A7EC0 0%, #7B8DD4 100%)',
    href: '#cenik',
  },
]

export default function LayoutIllustrated() {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <Grid container spacing={{ xs: 1.5, sm: 2 }}>
        <Grid size={{ xs: 12 }}>
          <motion.div variants={cardVariants}>
            <DashboardCard />
          </motion.div>
        </Grid>

        <Grid size={{ xs: 12 }}>
          <motion.div variants={cardVariants}>
            <Typography variant="overline" sx={{ color: 'rgba(28,27,31,0.4)', fontWeight: 700, letterSpacing: 1.2 }}>
              Služby
            </Typography>
          </motion.div>
        </Grid>

        {apps.map((app) => (
          <Grid key={app.href} size={{ xs: 12, sm: 6, md: 4 }}>
            <motion.div variants={cardVariants} style={{ height: '100%' }}>
              <AppCardIllustrated {...app} />
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </motion.div>
  )
}
