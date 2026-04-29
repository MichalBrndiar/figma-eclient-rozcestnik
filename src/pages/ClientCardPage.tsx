import { useState, useEffect } from 'react'
import {
  AppBar, Box, Card, Chip, Container,
  IconButton, Stack, Toolbar, Tooltip, Typography,
} from '@mui/material'
import {
  ArrowBackIosRounded, ArrowForwardIosRounded,
  HomeRounded, Menu as MenuIcon,
} from '@mui/icons-material'
import { Icon } from '@iconify/react'
import { motion, AnimatePresence } from 'framer-motion'
import NavPanel from '../NavPanel'
import { NAV_APPS } from '../navApps'
import { getLayout } from '../useLayout'
import { CLIENT } from '../client'

// ── Data ──────────────────────────────────────────────────────────────────────

interface Appointment {
  isoDate: string
  name: string
  location: string
  time: string
  type: string
}


const APPOINTMENTS: Appointment[] = [
  { isoDate: '2026-04-30', name: 'Masáž čokoládová', location: 'Masérna 1 dveře K205',    time: '12:15', type: 'masaz'     },
  { isoDate: '2026-05-04', name: 'Vizity',            location: 'Ošetřovna',               time: '10:00', type: 'vizity'    },
  { isoDate: '2026-05-04', name: 'Diadynamik 30 min', location: 'Elektroléčba 1 dveře 103',time: '13:15', type: 'elektro'   },
  { isoDate: '2026-05-05', name: 'Vizity',            location: 'Ošetřovna',               time: '11:00', type: 'vizity'    },
  { isoDate: '2026-05-06', name: 'Diadynamik 30 min', location: 'Elektroléčba 1 dveře 103',time: '09:45', type: 'elektro'   },
  { isoDate: '2026-05-07', name: 'Diadynamik 30 min', location: 'Elektroléčba 1 dveře 103',time: '13:00', type: 'elektro'   },
  { isoDate: '2026-05-11', name: 'Vizity',            location: 'Ošetřovna',               time: '10:00', type: 'vizity'    },
  { isoDate: '2026-05-12', name: 'Vizity',            location: 'Ošetřovna',               time: '11:00', type: 'vizity'    },
  { isoDate: '2026-05-13', name: 'Laboratoř – odběr', location: 'Odběrové místo Petra',   time: '07:45', type: 'laborator' },
  { isoDate: '2026-05-13', name: 'Diadynamik 30 min', location: 'Elektroléčba 1 dveře 103',time: '09:45', type: 'elektro'   },
  { isoDate: '2026-05-18', name: 'Vizity',            location: 'Ošetřovna',               time: '10:00', type: 'vizity'    },
  { isoDate: '2026-05-19', name: 'Diadynamik 30 min', location: 'Elektroléčba 1 dveře 103',time: '10:00', type: 'elektro'   },
  { isoDate: '2026-05-19', name: 'Vodoléčba',         location: 'Bazén pavilon B',         time: '14:30', type: 'vodo'      },
  { isoDate: '2026-05-20', name: 'Vizity',            location: 'Ošetřovna',               time: '09:00', type: 'vizity'    },
]

// ── Type → color + icon ───────────────────────────────────────────────────────

const TYPE_META: Record<string, { color: string; icon: string; colorMono: string }> = {
  vizity:    { color: '#3A9E80', colorMono: '#2ABACC', icon: 'mdi:stethoscope'     },
  masaz:     { color: '#B85C8A', colorMono: '#0E8EA0', icon: 'mdi:spa'             },
  elektro:   { color: '#4A7EC0', colorMono: '#1484A8', icon: 'mdi:lightning-bolt'  },
  laborator: { color: '#C8784A', colorMono: '#38C8E0', icon: 'mdi:test-tube'       },
  vodo:      { color: '#2CB4D2', colorMono: '#0B7CA8', icon: 'mdi:pool'            },
}
const DEFAULT_META = { color: '#7B68C8', colorMono: '#1484A8', icon: 'mdi:calendar-clock' }

// ── Helpers ───────────────────────────────────────────────────────────────────

const CS_DAYS_LONG  = ['neděle','pondělí','úterý','středa','čtvrtek','pátek','sobota']
const CS_MONTHS_GEN = [
  'ledna','února','března','dubna','května','června',
  'července','srpna','září','října','listopadu','prosince',
]

function parseISO(s: string): Date {
  const [y, m, d] = s.split('-').map(Number)
  return new Date(y, m - 1, d)
}

function fmtDayHeading(d: Date): string {
  const dd   = `${d.getDate()}`.padStart(2, '0')
  const mm   = `${d.getMonth() + 1}`.padStart(2, '0')
  const day  = CS_DAYS_LONG[d.getDay()]
  return `${dd}.${mm}. · ${day}`
}

function fmtStayDate(iso: string): string {
  const d = parseISO(iso)
  return `${d.getDate()}. ${CS_MONTHS_GEN[d.getMonth()]} ${d.getFullYear()}`
}

function fmtRangeLabel(from: Date, to: Date): string {
  const fd = from.getDate(), fm = CS_MONTHS_GEN[from.getMonth()], fy = from.getFullYear()
  const td = to.getDate(),   tm = CS_MONTHS_GEN[to.getMonth()],   ty = to.getFullYear()
  if (fy === ty) return `${fd}. ${fm} – ${td}. ${tm} ${ty}`
  return `${fd}. ${fm} ${fy} – ${td}. ${tm} ${ty}`
}

const PAGE_DAYS = 20

function addDays(d: Date, n: number): Date {
  const r = new Date(d); r.setDate(r.getDate() + n); return r
}

interface DateGroup { isoDate: string; date: Date; items: Appointment[] }

function groupByDate(list: Appointment[], from: Date, to: Date): DateGroup[] {
  const map = new Map<string, DateGroup>()
  for (const a of list) {
    const d = parseISO(a.isoDate)
    if (d < from || d > to) continue
    const g = map.get(a.isoDate)
    if (g) g.items.push(a)
    else map.set(a.isoDate, { isoDate: a.isoDate, date: d, items: [a] })
  }
  return Array.from(map.values()).sort((a, b) => a.isoDate.localeCompare(b.isoDate))
}

// ── Theme ─────────────────────────────────────────────────────────────────────

const THEME = {
  default: {
    bg:         'linear-gradient(160deg, #F3EEF9 0%, #E8F0FE 100%)',
    appBarBg:   'rgba(243,238,249,0.88)',
    appBarBdr:  'rgba(103,80,164,0.09)',
    logoBg:     'linear-gradient(135deg, #7B68C8 0%, #9D8FDC 100%)',
    logoShadow: 'rgba(123,104,200,0.35)',
    heroBg:     'linear-gradient(135deg, #7B68C8 0%, #9D8FDC 100%)',
    cardShadow: '0 2px 12px 0 rgba(103,80,164,0.10)',
    navBtnBg:   'linear-gradient(135deg, #7B68C8 0%, #9D8FDC 100%)',
    navBtnShadow:'rgba(123,104,200,0.35)',
    chipBg:     'rgba(123,104,200,0.08)',
    chipColor:  '#5B4FA0',
  },
  mono: {
    bg:         'linear-gradient(160deg, #D8F2F8 0%, #C8EAF5 100%)',
    appBarBg:   'rgba(216,242,248,0.88)',
    appBarBdr:  'rgba(20,132,168,0.10)',
    logoBg:     'linear-gradient(135deg, #1484A8 0%, #2CB4D2 100%)',
    logoShadow: 'rgba(20,132,168,0.35)',
    heroBg:     'linear-gradient(135deg, #074E6A 0%, #1484A8 100%)',
    cardShadow: '0 2px 12px 0 rgba(20,132,168,0.10)',
    navBtnBg:   'linear-gradient(135deg, #1484A8 0%, #2CB4D2 100%)',
    navBtnShadow:'rgba(20,132,168,0.35)',
    chipBg:     'rgba(20,132,168,0.08)',
    chipColor:  '#0D6E8E',
  },
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function ClientCardPage() {
  const [navOpen,    setNavOpen]    = useState(false)
  const [layout,     setLayout]     = useState(getLayout)
  const [pageIndex,  setPageIndex]  = useState(0)

  useEffect(() => {
    const h = () => setLayout(getLayout())
    window.addEventListener('popstate', h)
    return () => window.removeEventListener('popstate', h)
  }, [])

  const isMono = layout === 'mono'
  const t      = isMono ? THEME.mono : THEME.default

  const stayFrom  = parseISO(CLIENT.stayFrom)
  const stayTo    = parseISO(CLIENT.stayTo)
  const viewFrom  = addDays(stayFrom, pageIndex * PAGE_DAYS)
  const viewTo    = addDays(viewFrom, PAGE_DAYS - 1)
  const clampedTo = viewTo > stayTo ? stayTo : viewTo
  const canPrev   = pageIndex > 0
  const canNext   = viewTo < stayTo
  const groups    = groupByDate(APPOINTMENTS, viewFrom, clampedTo)

  const goHome = () => {
    const url = new URL(window.location.href)
    url.pathname = '/'; url.hash = ''
    window.history.pushState(null, '', url.toString())
    window.dispatchEvent(new PopStateEvent('popstate'))
  }

  const navTo = (href: string) => {
    const url = new URL(window.location.href)
    url.pathname = href.startsWith('/') ? href : '/'
    url.hash     = href.startsWith('#') ? href : ''
    window.history.pushState(null, '', url.toString())
    window.dispatchEvent(new PopStateEvent('popstate'))
  }

  return (
    <Box sx={{ minHeight: '100vh', background: t.bg }}>

      {/* ── AppBar ── */}
      <AppBar position="sticky" elevation={0} sx={{ background: t.appBarBg, backdropFilter: 'blur(14px)', borderBottom: `1px solid ${t.appBarBdr}` }}>
        <Toolbar sx={{ gap: 1 }}>
          <IconButton edge="start" onClick={() => setNavOpen(true)} sx={{ color: '#1C1B1F', display: { xs: 'flex', sm: 'none' } }}>
            <MenuIcon />
          </IconButton>

          <Box sx={{ width: 36, height: 36, borderRadius: '12px', background: t.logoBg, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 2px 8px ${t.logoShadow}` }}>
            <Icon icon="mdi:card-account-details" style={{ fontSize: 20, color: '#fff' }} />
          </Box>
          <Typography variant="h6" sx={{ color: '#1C1B1F', flexGrow: 1, letterSpacing: '-0.3px' }}>
            Průkazka
          </Typography>

          {/* Desktop nav */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', gap: 0.5 }}>
            <Tooltip title="Zpět na rozcestník" arrow placement="bottom">
              <IconButton size="small" onClick={goHome} sx={{ width: 34, height: 34, borderRadius: '10px', background: t.navBtnBg, transition: 'transform .15s, box-shadow .15s', '&:hover': { transform: 'translateY(-2px)', boxShadow: `0 4px 12px ${t.navBtnShadow}` } }}>
                <HomeRounded sx={{ fontSize: 17, color: '#fff' }} />
              </IconButton>
            </Tooltip>
            {NAV_APPS.map(app => (
              <Tooltip key={app.href} title={app.title} arrow placement="bottom">
                <IconButton size="small" onClick={() => navTo(app.href)} sx={{ width: 34, height: 34, borderRadius: '10px', background: isMono ? app.gradientMono : app.gradient, transition: 'transform .15s, box-shadow .15s', '&:hover': { transform: 'translateY(-2px)', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' } }}>
                  <app.Icon sx={{ fontSize: 17, color: '#fff' }} />
                </IconButton>
              </Tooltip>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ py: { xs: 3, sm: 4 }, px: { xs: 2, sm: 3 }, pb: { xs: 3, md: 5 } }}>

        {/* ── Client hero card ── */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
          <Card sx={{ mb: 3, overflow: 'hidden', boxShadow: t.cardShadow }}>
            <Box sx={{ background: t.heroBg, px: 2.5, py: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box sx={{ width: 52, height: 52, borderRadius: '18px', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon icon="mdi:account" style={{ fontSize: 30, color: '#fff' }} />
              </Box>
              <Box>
                <Typography variant="h6" sx={{ color: '#fff', fontWeight: 800, lineHeight: 1.2 }}>
                  {CLIENT.name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.75)', fontWeight: 500 }}>
                  {CLIENT.room}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ px: 2.5, py: 1.5, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Box>
                <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Příjezd
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 700 }}>
                  {fmtStayDate(CLIENT.stayFrom)}
                </Typography>
              </Box>
              <Box sx={{ width: '1px', background: 'divider', alignSelf: 'stretch' }} />
              <Box>
                <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Odjezd
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 700 }}>
                  {fmtStayDate(CLIENT.stayTo)}
                </Typography>
              </Box>
            </Box>
          </Card>
        </motion.div>

        {/* ── Date range navigator ── */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.06 }}>
          <Card sx={{ mb: 3, px: 1.5, py: 1, display: 'flex', alignItems: 'center', gap: 1, boxShadow: t.cardShadow }}>
            <IconButton
              size="small" disabled={!canPrev}
              onClick={() => setPageIndex(i => i - 1)}
              sx={{ borderRadius: '10px', '&:not(:disabled)': { background: t.chipBg } }}
            >
              <ArrowBackIosRounded fontSize="small" sx={{ color: canPrev ? t.chipColor : undefined }} />
            </IconButton>

            <Typography variant="body2" sx={{ flexGrow: 1, textAlign: 'center', fontWeight: 600, color: '#1C1B1F' }}>
              {fmtRangeLabel(viewFrom, clampedTo)}
            </Typography>

            <IconButton
              size="small" disabled={!canNext}
              onClick={() => setPageIndex(i => i + 1)}
              sx={{ borderRadius: '10px', '&:not(:disabled)': { background: t.chipBg } }}
            >
              <ArrowForwardIosRounded fontSize="small" sx={{ color: canNext ? t.chipColor : undefined }} />
            </IconButton>
          </Card>
        </motion.div>

        {/* ── Appointment groups ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={pageIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
          >
            {groups.length === 0 ? (
              <Card sx={{ p: 4, textAlign: 'center', boxShadow: t.cardShadow }}>
                <Icon icon="mdi:calendar-blank-outline" style={{ fontSize: 48, color: isMono ? '#1484A8' : '#9D8FDC', opacity: 0.4 }} />
                <Typography variant="body1" sx={{ mt: 1, color: 'text.secondary' }}>
                  V tomto období nejsou žádné záznamy.
                </Typography>
              </Card>
            ) : (
              <Stack spacing={2}>
                {groups.map((group, gi) => (
                  <motion.div
                    key={group.isoDate}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: gi * 0.05, duration: 0.3 }}
                  >
                    {/* Day heading */}
                    <Typography variant="caption" sx={{ fontWeight: 700, color: isMono ? '#0D6E8E' : '#5B4FA0', textTransform: 'uppercase', letterSpacing: '0.07em', ml: 0.5, mb: 0.75, display: 'block' }}>
                      {fmtDayHeading(group.date)}
                    </Typography>

                    {/* Appointment cards */}
                    <Stack spacing={1}>
                      {group.items.map((item, ii) => {
                        const meta = TYPE_META[item.type] ?? DEFAULT_META
                        const color = isMono ? meta.colorMono : meta.color
                        return (
                          <motion.div
                            key={ii}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: gi * 0.05 + ii * 0.04, duration: 0.25 }}
                          >
                            <Card sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2, boxShadow: t.cardShadow }}>
                              <Box sx={{ width: 48, height: 48, flexShrink: 0, borderRadius: '16px', background: `${color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Icon icon={meta.icon} style={{ fontSize: 26, color }} />
                              </Box>
                              <Box sx={{ flex: 1, minWidth: 0 }}>
                                <Typography variant="subtitle2" sx={{ fontWeight: 700, lineHeight: 1.2 }} noWrap>
                                  {item.name}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500, mt: 0.25 }} noWrap>
                                  {item.location}
                                </Typography>
                              </Box>
                              <Chip
                                label={item.time}
                                size="small"
                                sx={{ fontWeight: 700, background: `${color}18`, color, border: 'none', flexShrink: 0 }}
                              />
                            </Card>
                          </motion.div>
                        )
                      })}
                    </Stack>
                  </motion.div>
                ))}
              </Stack>
            )}
          </motion.div>
        </AnimatePresence>
      </Container>

      <NavPanel open={navOpen} onClose={() => setNavOpen(false)} />
    </Box>
  )
}
