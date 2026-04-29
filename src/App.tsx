import { useState, useEffect } from 'react'
import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material'
import LayoutBento from './layouts/LayoutBento'
import LayoutIllustrated from './layouts/LayoutIllustrated'
import LayoutMono from './layouts/LayoutMono'
import LayoutSwitcher from './LayoutSwitcher'
import { getLayout, type LayoutVariant } from './useLayout'
import CenikPage from './pages/CenikPage'
import ClientCardPage from './pages/ClientCardPage'

type Page = 'hub' | 'cenik' | 'client-card'
const getPage = (): Page => {
  const p = window.location.pathname
  if (p.startsWith('/cenik'))       return 'cenik'
  if (p.startsWith('/client-card')) return 'client-card'
  return 'hub'
}

export default function App() {
  const [layout, setLayout] = useState<LayoutVariant>(getLayout)
  const [page, setPage]     = useState<Page>(getPage)

  useEffect(() => {
    const handler = () => { setLayout(getLayout()); setPage(getPage()) }
    window.addEventListener('popstate', handler)
    return () => window.removeEventListener('popstate', handler)
  }, [])

  if (page === 'cenik')   return <CenikPage />
  if (page === 'client-card') return <ClientCardPage />

  const isMono = layout === 'mono'
  const appBarBg   = isMono ? 'rgba(216,242,248,0.88)' : 'rgba(243,238,249,0.88)'
  const appBarBdr  = isMono ? 'rgba(20,132,168,0.10)'  : 'rgba(103,80,164,0.09)'
  const logoBg     = isMono ? 'linear-gradient(135deg, #1484A8 0%, #2CB4D2 100%)' : 'linear-gradient(135deg, #7B68C8 0%, #9D8FDC 100%)'
  const logoShadow = isMono ? 'rgba(20,132,168,0.35)' : 'rgba(123,104,200,0.35)'

  return (
    <Box sx={{
      minHeight: '100vh',
      background: isMono
        ? 'linear-gradient(160deg, #D8F2F8 0%, #C8EAF5 100%)'
        : 'linear-gradient(160deg, #F3EEF9 0%, #E8F0FE 100%)',
    }}>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{ background: appBarBg, backdropFilter: 'blur(14px)', borderBottom: `1px solid ${appBarBdr}` }}
      >
        <Toolbar sx={{ gap: 1.5 }}>
          <Box sx={{
            width: 36, height: 36, borderRadius: '12px',
            background: logoBg,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: `0 2px 8px ${logoShadow}`,
          }}>
            <Typography sx={{ color: '#fff', fontWeight: 800, fontSize: 16, lineHeight: 1 }}>e</Typography>
          </Box>
          <Typography variant="h6" sx={{ color: '#1C1B1F', flexGrow: 1, letterSpacing: '-0.3px' }}>
            eClient
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ py: { xs: 3, sm: 4 }, px: { xs: 2, sm: 3 }, pb: { xs: 3, md: 5 } }}>
        {layout === 'illustrated' ? <LayoutIllustrated /> : layout === 'mono' ? <LayoutMono /> : <LayoutBento />}
      </Container>

      <LayoutSwitcher />
    </Box>
  )
}
