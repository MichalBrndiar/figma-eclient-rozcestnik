import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Box, Typography, IconButton } from '@mui/material'
import { Home } from '@mui/icons-material'
import { NAV_APPS } from './navApps'

interface NavPanelProps {
  open: boolean
  onClose: () => void
}

function navigate(href: string, onClose: () => void) {
  onClose()
  const url = new URL(window.location.href)
  url.pathname = href.startsWith('/') ? href : '/'
  url.hash = href.startsWith('#') ? href : (href.startsWith('/') ? '' : href)
  window.history.pushState(null, '', url.toString())
  window.dispatchEvent(new PopStateEvent('popstate'))
}

export default function NavPanel({ open, onClose }: NavPanelProps) {
  return createPortal(
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={onClose}
            style={{
              position: 'fixed', inset: 0, zIndex: 1500,
              background: 'rgba(0,0,0,0.38)',
              backdropFilter: 'blur(2px)',
            }}
          />

          {/* Panel */}
          <motion.div
            key="panel"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 320 }}
            style={{
              position: 'fixed', top: 0, left: 0, bottom: 0,
              width: 'min(320px, 88vw)',
              zIndex: 1501,
              background: 'rgba(248,248,252,0.97)',
              backdropFilter: 'blur(20px)',
              display: 'flex',
              flexDirection: 'column',
              overflowY: 'auto',
              boxShadow: '4px 0 32px rgba(0,0,0,0.18)',
            }}
          >
            {/* Header */}
            <Box sx={{ px: 2, pt: 3.5, pb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
              <IconButton
                onClick={() => navigate('/', onClose)}
                sx={{
                  background: 'linear-gradient(135deg, #7B68C8 0%, #9D8FDC 100%)',
                  color: '#fff', width: 40, height: 40, borderRadius: '12px',
                  '&:hover': { background: 'linear-gradient(135deg, #6a58b8 0%, #8c7fcc 100%)' },
                }}
              >
                <Home sx={{ fontSize: 20 }} />
              </IconButton>
              <Box>
                <Typography sx={{ fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(28,27,31,0.38)', lineHeight: 1 }}>
                  eClient
                </Typography>
                <Typography sx={{ fontWeight: 800, fontSize: '1rem', color: '#1C1B1F', letterSpacing: '-0.3px', lineHeight: 1.2 }}>
                  Úvodní stránka
                </Typography>
              </Box>
            </Box>

            {/* Nav items */}
            <Box sx={{ px: 1.5, pb: 2, display: 'flex', flexDirection: 'column', gap: 0.75 }}>
              {NAV_APPS.map((app, i) => (
                <motion.div
                  key={app.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 + i * 0.045, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Box
                    onClick={() => navigate(app.href, onClose)}
                    sx={{
                      display: 'flex', alignItems: 'center', gap: 1.5,
                      p: 1.25,
                      borderRadius: '14px',
                      background: app.gradient,
                      cursor: 'pointer',
                      transition: 'transform 0.15s ease, box-shadow 0.15s ease',
                      '&:hover': {
                        transform: 'translateX(4px)',
                        boxShadow: '0 6px 20px rgba(0,0,0,0.18)',
                      },
                      '&:active': { transform: 'scale(0.98)' },
                    }}
                  >
                    <Box sx={{
                      width: 40, height: 40, flexShrink: 0,
                      borderRadius: '12px',
                      background: 'rgba(255,255,255,0.22)',
                      backdropFilter: 'blur(4px)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    }}>
                      <app.Icon sx={{ fontSize: 22, color: '#fff' }} />
                    </Box>
                    <Typography sx={{ color: '#fff', fontWeight: 800, fontSize: '0.95rem', lineHeight: 1.2 }}>
                      {app.title}
                    </Typography>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body,
  )
}
