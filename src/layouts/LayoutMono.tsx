import { Grid, Typography } from '@mui/material'
import { Badge, Description, Restaurant, Spa, Storefront } from '@mui/icons-material'
import { motion } from 'framer-motion'
import AppCard, { type CardVariant } from '../AppCard'
import DashboardCard from '../DashboardCard'

// ── Monochromatic palette – only blue shades ──────────────────────────────
// base hue: 215° (deep azure blue)
const MONO = {
  deepest: 'linear-gradient(135deg, #0D2A5E 0%, #1A4499 100%)',   // very deep navy
  deep:    'linear-gradient(135deg, #1A3D8F 0%, #2D5CB8 100%)',   // deep blue
  primary: 'linear-gradient(135deg, #2756B0 0%, #3D72CC 100%)',   // primary blue
  medium:  'linear-gradient(135deg, #3868C0 0%, #5488D8 100%)',   // medium blue
  light:   'linear-gradient(135deg, #4A7EC8 0%, #6699E0 100%)',   // light blue
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}
const cardVariants = {
  hidden:   { opacity: 0, y: 24 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.44, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
}

interface AppDef {
  title:    string
  subtitle: string
  Icon:     typeof Badge
  gradient: string
  href:     string
  variant:  CardVariant
  size:     { xs: number; sm: number }
}

const apps: AppDef[] = [
  {
    title:    'Průkazka',
    subtitle: 'Váš digitální průkaz a osobní údaje klienta',
    Icon:     Badge,
    gradient: MONO.deepest,
    href:     '#prukazka',
    variant:  'featured',
    size:     { xs: 12, sm: 7 },
  },
  {
    title:    'Dokumenty',
    subtitle: 'Smlouvy, formuláře a přílohy',
    Icon:     Description,
    gradient: MONO.light,
    href:     '#dokumenty',
    variant:  'normal',
    size:     { xs: 12, sm: 5 },
  },
  {
    title:    'Objednání stravy',
    subtitle: 'Jídelníček a výběr jídel na každý den',
    Icon:     Restaurant,
    gradient: MONO.medium,
    href:     '#strava',
    variant:  'normal',
    size:     { xs: 12, sm: 5 },
  },
  {
    title:    'Objednání procedur',
    subtitle: 'Rehabilitace, masáže a terapeutické procedury',
    Icon:     Spa,
    gradient: MONO.deep,
    href:     '#procedury',
    variant:  'featured',
    size:     { xs: 12, sm: 7 },
  },
  {
    title:    'Ceníkové položky',
    subtitle: 'Doplňkové služby, hygienické potřeby a zboží z nabídky',
    Icon:     Storefront,
    gradient: MONO.primary,
    href:     '/cenik',
    variant:  'wide',
    size:     { xs: 12, sm: 12 },
  },
]

export default function LayoutMono() {
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
