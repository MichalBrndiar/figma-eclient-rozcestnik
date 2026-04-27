import { createPortal } from 'react-dom'
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Box, Typography } from '@mui/material'
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

// ── Per-effect animation configs ───────────────────────────────────────────────

const EASE_STANDARD = [0.22, 1, 0.36, 1] as const
const EASE_SHARP = [0.55, 0, 1, 0.45] as const

const EFFECTS = [
  // 0: Radial burst – circle z hamburgeru
  {
    panel: {
      initial: { clipPath: 'circle(0px at 36px 30px)' },
      animate: { clipPath: 'circle(200% at 36px 30px)' },
      exit:    { clipPath: 'circle(0px at 36px 30px)' },
      transition:     { duration: 0.78, ease: EASE_STANDARD },
      exitTransition: { duration: 0.4,  ease: EASE_SHARP },
      extraStyle: {},
    },
    items: (i: number) => ({
      initial: { opacity: 0, x: -20 },
      animate: { opacity: 1, x: 0 },
      transition: { delay: 0.28 + i * 0.07, duration: 0.38, ease: EASE_STANDARD },
    }),
  },

  // 1: 3D page fold – panel se přetočí jako stránka
  {
    panel: {
      initial: { rotateY: -90, opacity: 0.6 },
      animate: { rotateY: 0,   opacity: 1 },
      exit:    { rotateY: -90, opacity: 0.6 },
      transition:     { duration: 0.7, ease: EASE_STANDARD },
      exitTransition: { duration: 0.35, ease: EASE_SHARP },
      extraStyle: { transformOrigin: 'left center', transformPerspective: 900 },
    },
    items: (i: number) => ({
      initial: { opacity: 0, y: -18, rotateX: 30 },
      animate: { opacity: 1, y: 0,   rotateX: 0 },
      transition: { delay: 0.22 + i * 0.065, duration: 0.42, ease: EASE_STANDARD },
    }),
  },

  // 2: Elastic spring – panel se natáhne s přestřelením
  {
    panel: {
      initial: { scaleX: 0, opacity: 0.4 },
      animate: { scaleX: 1, opacity: 1 },
      exit:    { scaleX: 0, opacity: 0 },
      transition:     { type: 'spring' as const, damping: 11, stiffness: 110 },
      exitTransition: { duration: 0.26, ease: EASE_SHARP },
      extraStyle: { transformOrigin: 'left center' },
    },
    items: (i: number) => ({
      initial: { opacity: 0, scale: 0.78 },
      animate: { opacity: 1, scale: 1 },
      transition: { type: 'spring' as const, delay: 0.1 + i * 0.06, damping: 14, stiffness: 260 },
    }),
  },
]

// ── Component ──────────────────────────────────────────────────────────────────

export default function NavPanel({ open, onClose }: NavPanelProps) {
  const [effectIdx, setEffectIdx] = useState(0)
  const prevOpen = useRef(false)

  useEffect(() => {
    if (open && !prevOpen.current) {
      setEffectIdx(i => (i + 1) % EFFECTS.length)
    }
    prevOpen.current = open
  }, [open])

  const eff = EFFECTS[effectIdx]

  const panelStyle: React.CSSProperties = {
    position: 'fixed', top: 0, left: 0, bottom: 0,
    width: 'min(320px, 88vw)',
    zIndex: 1501,
    background: 'rgba(248,248,252,0.97)',
    backdropFilter: 'blur(20px)',
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'auto',
    boxShadow: '4px 0 32px rgba(0,0,0,0.18)',
    ...eff.panel.extraStyle,
  }

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
            key={`panel-${effectIdx}`}
            initial={eff.panel.initial}
            animate={eff.panel.animate}
            exit={{ ...eff.panel.exit, transition: eff.panel.exitTransition }}
            transition={eff.panel.transition}
            style={panelStyle}
          >
            {/* Header – Úvodní stránka */}
            <Box
              onClick={() => navigate('/', onClose)}
              sx={{
                px: 2, pt: 3.5, pb: 2, display: 'flex', alignItems: 'center', gap: 1,
                cursor: 'pointer',
                transition: 'background 0.15s',
                '&:hover':  { background: 'rgba(123,104,200,0.07)' },
                '&:active': { background: 'rgba(123,104,200,0.14)' },
              }}
            >
              <Box sx={{
                background: 'linear-gradient(135deg, #7B68C8 0%, #9D8FDC 100%)',
                color: '#fff', width: 40, height: 40, borderRadius: '12px',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <Home sx={{ fontSize: 20 }} />
              </Box>
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
              {NAV_APPS.map((app, i) => {
                const itemAnim = eff.items(i)
                return (
                  <motion.div
                    key={app.href}
                    initial={itemAnim.initial}
                    animate={itemAnim.animate}
                    transition={itemAnim.transition}
                  >
                    <Box
                      onClick={() => navigate(app.href, onClose)}
                      sx={{
                        display: 'flex', alignItems: 'center', gap: 1.5,
                        p: 1.25, borderRadius: '14px',
                        background: app.gradient,
                        cursor: 'pointer',
                        transition: 'transform 0.15s ease, box-shadow 0.15s ease',
                        '&:hover':  { transform: 'translateX(4px)', boxShadow: '0 6px 20px rgba(0,0,0,0.18)' },
                        '&:active': { transform: 'scale(0.98)' },
                      }}
                    >
                      <Box sx={{
                        width: 40, height: 40, flexShrink: 0, borderRadius: '12px',
                        background: 'rgba(255,255,255,0.22)', backdropFilter: 'blur(4px)',
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
                )
              })}
            </Box>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body,
  )
}
