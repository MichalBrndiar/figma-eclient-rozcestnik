import {
  AppBar,
  Box,
  Container,
  Grid,
  Toolbar,
  Typography,
} from '@mui/material'
import {
  Home,
  Badge,
  Description,
  Restaurant,
  Spa,
  Storefront,
} from '@mui/icons-material'
import AppCard from './AppCard'

const apps = [
  {
    title: 'Homepage',
    subtitle: 'Hlavní přehled a novinky',
    Icon: Home,
    gradient: 'linear-gradient(135deg, #D0E8FF 0%, #B8D8FF 100%)',
    iconColor: '#1565C0',
    href: '#homepage',
  },
  {
    title: 'Průkazka',
    subtitle: 'Váš digitální průkaz klienta',
    Icon: Badge,
    gradient: 'linear-gradient(135deg, #E8D5F5 0%, #D4B8F0 100%)',
    iconColor: '#6A1B9A',
    href: '#prukazka',
  },
  {
    title: 'Dokumenty',
    subtitle: 'Smlouvy, formuláře a přílohy',
    Icon: Description,
    gradient: 'linear-gradient(135deg, #FFF3D0 0%, #FFE4A0 100%)',
    iconColor: '#E65100',
    href: '#dokumenty',
  },
  {
    title: 'Objednání stravy',
    subtitle: 'Jídelníček a výběr jídel',
    Icon: Restaurant,
    gradient: 'linear-gradient(135deg, #C8F0D8 0%, #A8E6BC 100%)',
    iconColor: '#2E7D32',
    href: '#strava',
  },
  {
    title: 'Objednání procedur',
    subtitle: 'Rehabilitace a terapeutické procedury',
    Icon: Spa,
    gradient: 'linear-gradient(135deg, #FFD6E8 0%, #FFB8D4 100%)',
    iconColor: '#AD1457',
    href: '#procedury',
  },
  {
    title: 'Ceníkové položky',
    subtitle: 'Doplňkové služby a zboží',
    Icon: Storefront,
    gradient: 'linear-gradient(135deg, #D6E8FF 0%, #B8D0F8 100%)',
    iconColor: '#1A237E',
    href: '#cenik',
  },
]

export default function App() {
  return (
    <Box sx={{ minHeight: '100vh', background: 'linear-gradient(160deg, #F6F0FB 0%, #EBF4FF 100%)' }}>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{ background: 'rgba(246,240,251,0.85)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(103,80,164,0.08)' }}
      >
        <Toolbar sx={{ gap: 1.5 }}>
          <Box
            sx={{
              width: 36,
              height: 36,
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #6750A4 0%, #9C7EDB 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography sx={{ color: '#fff', fontWeight: 800, fontSize: 16, lineHeight: 1 }}>e</Typography>
          </Box>
          <Typography variant="h6" sx={{ color: '#1C1B1F', flexGrow: 1, letterSpacing: '-0.3px' }}>
            eClient
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ py: { xs: 3, sm: 5 }, px: { xs: 2, sm: 3 } }}>
        <Box sx={{ mb: { xs: 3, sm: 5 } }}>
          <Typography
            variant="h4"
            sx={{
              color: '#1C1B1F',
              mb: 0.75,
              background: 'linear-gradient(135deg, #6750A4 0%, #1565C0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Vítejte v&nbsp;eClientu
          </Typography>
          <Typography variant="subtitle1" sx={{ color: 'rgba(28,27,31,0.55)', fontWeight: 500 }}>
            Vyberte službu, kterou chcete použít
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 2, sm: 2.5 }}>
          {apps.map((app) => (
            <Grid key={app.href} size={{ xs: 12, sm: 6, md: 4 }}>
              <AppCard {...app} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
