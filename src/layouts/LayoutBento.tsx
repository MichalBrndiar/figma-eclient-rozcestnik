import { Grid, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import AppCard from '../AppCard'
import DashboardCard from '../DashboardCard'
import { NAV_APPS } from '../navApps'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}
const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.44, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
}

export default function LayoutBento() {
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

        {NAV_APPS.map((app) => (
          <Grid key={app.href} size={{ xs: app.size.xs, sm: app.size.sm }}>
            <motion.div variants={cardVariants} style={{ height: '100%' }}>
              <AppCard
                title={app.title}
                subtitle={app.subtitle}
                Icon={app.Icon}
                gradient={app.gradient}
                href={app.href}
                variant={app.variant}
              />
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </motion.div>
  )
}
