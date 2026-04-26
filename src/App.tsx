import { useState, useEffect } from 'react'
import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material'
import LayoutBento from './layouts/LayoutBento'
import LayoutIllustrated from './layouts/LayoutIllustrated'
import LayoutMono from './layouts/LayoutMono'
import BottomNav from './BottomNav'
import LayoutSwitcher from './LayoutSwitcher'
import { getLayout, type LayoutVariant } from './useLayout'
import CenikPage from './pages/CenikPage'

type Page = 'hub' | 'cenik'
const getPage = (): Page => (window.location.pathname.startsWith('/cenik') ? 'cenik' : 'hub')

export default function App() {
  const [layout, setLayout] = useState<LayoutVariant>(getLayout)
  const [page, setPage]     = useState<Page>(getPage)

  useEffect(() => {
    const handler = () => { setLayout(getLayout()); setPage(getPage()) }
    window.addEventListener('popstate', handler)
    return () => window.removeEventListener('popstate', handler)
  }, [])

  if (page === 'cenik') return <CenikPage />

  const isMono = layout === 'mono'

  return (
    <Box sx={{
      minHeight: '100vh',
      background: isMono
        ? 'linear-gradient(160deg, #EAE4F6 0%, #DDD5F0 100%)'
        : 'linear-gradient(160deg, #F3EEF9 0%, #E8F0FE 100%)',
    }}>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{ background: 'rgba(243,238,249,0.88)', backdropFilter: 'blur(14px)', borderBottom: '1px solid rgba(103,80,164,0.09)' }}
      >
        <Toolbar sx={{ gap: 1.5 }}>
          <Box sx={{
            width: 36, height: 36, borderRadius: '12px',
            background: 'linear-gradient(135deg, #7B68C8 0%, #9D8FDC 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(123,104,200,0.35)',
          }}>
            <Typography sx={{ color: '#fff', fontWeight: 800, fontSize: 16, lineHeight: 1 }}>e</Typography>
          </Box>
          <Typography variant="h6" sx={{ color: '#1C1B1F', flexGrow: 1, letterSpacing: '-0.3px' }}>
            eClient
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ py: { xs: 3, sm: 4 }, px: { xs: 2, sm: 3 }, pb: { xs: '96px', md: 5 } }}>
        {layout === 'illustrated' ? <LayoutIllustrated /> : layout === 'mono' ? <LayoutMono /> : <LayoutBento />}
      </Container>

      <BottomNav />
      <LayoutSwitcher />
    </Box>
  )
}
