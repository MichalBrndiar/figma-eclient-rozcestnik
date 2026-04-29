import { useState, useEffect, useRef, useMemo } from 'react'
import {
  AppBar, Box, Card, Chip, Container,
  IconButton, Stack, Toolbar, Tooltip, Typography,
} from '@mui/material'
import { HomeRounded, Menu as MenuIcon } from '@mui/icons-material'
import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'
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
  { isoDate: '2026-04-30', name: 'Masáž čokoládová', location: 'Masérna 1 dveře K205',     time: '12:15', type: 'masaz'     },
  { isoDate: '2026-05-04', name: 'Vizity',            location: 'Ošetřovna',                time: '10:00', type: 'vizity'    },
  { isoDate: '2026-05-04', name: 'Diadynamik 30 min', location: 'Elektroléčba 1 dveře 103', time: '13:15', type: 'elektro'   },
  { isoDate: '2026-05-05', name: 'Vizity',            location: 'Ošetřovna',                time: '11:00', type: 'vizity'    },
  { isoDate: '2026-05-06', name: 'Diadynamik 30 min', location: 'Elektroléčba 1 dveře 103', time: '09:45', type: 'elektro'   },
  { isoDate: '2026-05-07', name: 'Diadynamik 30 min', location: 'Elektroléčba 1 dveře 103', time: '13:00', type: 'elektro'   },
  { isoDate: '2026-05-11', name: 'Vizity',            location: 'Ošetřovna',                time: '10:00', type: 'vizity'    },
  { isoDate: '2026-05-12', name: 'Vizity',            location: 'Ošetřovna',                time: '11:00', type: 'vizity'    },
  { isoDate: '2026-05-13', name: 'Laboratoř – odběr', location: 'Odběrové místo Petra',    time: '07:45', type: 'laborator' },
  { isoDate: '2026-05-13', name: 'Diadynamik 30 min', location: 'Elektroléčba 1 dveře 103', time: '09:45', type: 'elektro'   },
  { isoDate: '2026-05-18', name: 'Vizity',            location: 'Ošetřovna',                time: '10:00', type: 'vizity'    },
  { isoDate: '2026-05-19', name: 'Diadynamik 30 min', location: 'Elektroléčba 1 dveře 103', time: '10:00', type: 'elektro'   },
  { isoDate: '2026-05-19', name: 'Vodoléčba',         location: 'Bazén pavilon B',          time: '14:30', type: 'vodo'      },
  { isoDate: '2026-05-20', name: 'Vizity',            location: 'Ošetřovna',                time: '09:00', type: 'vizity'    },
]

// ── Type → color + icon ───────────────────────────────────────────────────────

const TYPE_META: Record<string, { color: string; colorMono: string; icon: string }> = {
  vizity:    { color: '#3A9E80', colorMono: '#2ABACC', icon: 'mdi:stethoscope'    },
  masaz:     { color: '#B85C8A', colorMono: '#0E8EA0', icon: 'mdi:spa'            },
  elektro:   { color: '#4A7EC0', colorMono: '#1484A8', icon: 'mdi:lightning-bolt' },
  laborator: { color: '#C8784A', colorMono: '#38C8E0', icon: 'mdi:test-tube'      },
  vodo:      { color: '#2CB4D2', colorMono: '#0B7CA8', icon: 'mdi:pool'           },
}
const DEFAULT_META = { color: '#7B68C8', colorMono: '#1484A8', icon: 'mdi:calendar-clock' }

// ── Helpers ───────────────────────────────────────────────────────────────────

const CS_DAYS_SHORT = ['Ne', 'Po', 'Út', 'St', 'Čt', 'Pá', 'So']
const CS_DAYS_LONG  = ['neděle', 'pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek', 'sobota']
const CS_MONTHS_GEN = [
  'ledna','února','března','dubna','května','června',
  'července','srpna','září','října','listopadu','prosince',
]

function parseISO(s: string): Date {
  const [y, m, d] = s.split('-').map(Number)
  return new Date(y, m - 1, d)
}

function toDateKey(d: Date): string {
  const y = d.getFullYear()
  const m = `${d.getMonth() + 1}`.padStart(2, '0')
  const dd = `${d.getDate()}`.padStart(2, '0')
  return `${y}-${m}-${dd}`
}

function addDays(d: Date, n: number): Date {
  const r = new Date(d); r.setDate(r.getDate() + n); return r
}

function fmtDayHeading(d: Date): string {
  const dd  = `${d.getDate()}`.padStart(2, '0')
  const mm  = `${d.getMonth() + 1}`.padStart(2, '0')
  return `${dd}.${mm}. · ${CS_DAYS_LONG[d.getDay()]}`
}

function fmtStayDate(iso: string): string {
  const d = parseISO(iso)
  return `${d.getDate()}. ${CS_MONTHS_GEN[d.getMonth()]} ${d.getFullYear()}`
}

interface DateGroup { isoDate: string; date: Date; items: Appointment[] }

function groupByDate(list: Appointment[]): DateGroup[] {
  const map = new Map<string, DateGroup>()
  for (const a of list) {
    const d = parseISO(a.isoDate)
    const g = map.get(a.isoDate)
    if (g) g.items.push(a)
    else map.set(a.isoDate, { isoDate: a.isoDate, date: d, items: [a] })
  }
  return Array.from(map.values()).sort((a, b) => a.isoDate.localeCompare(b.isoDate))
}

// ── Theme ─────────────────────────────────────────────────────────────────────

const THEME = {
  default: {
    bg:          'linear-gradient(160deg, #F3EEF9 0%, #E8F0FE 100%)',
    appBarBg:    'rgba(243,238,249,0.88)',
    appBarBdr:   'rgba(103,80,164,0.09)',
    logoBg:      'linear-gradient(135deg, #7B68C8 0%, #9D8FDC 100%)',
    logoShadow:  'rgba(123,104,200,0.35)',
    heroBg:      'linear-gradient(135deg, #7B68C8 0%, #9D8FDC 100%)',
    cardShadow:  '0 2px 12px 0 rgba(103,80,164,0.10)',
    navBtnBg:    'linear-gradient(135deg, #7B68C8 0%, #9D8FDC 100%)',
    navBtnShadow:'rgba(123,104,200,0.35)',
    stripBg:     'rgba(243,238,249,0.92)',
    stripBdr:    'rgba(103,80,164,0.09)',
    activeDayBg: 'linear-gradient(135deg, #7B68C8 0%, #9D8FDC 100%)',
    dotColor:    '#7B68C8',
    sectionColor:'#5B4FA0',
  },
  mono: {
    bg:          'linear-gradient(160deg, #D8F2F8 0%, #C8EAF5 100%)',
    appBarBg:    'rgba(216,242,248,0.88)',
    appBarBdr:   'rgba(20,132,168,0.10)',
    logoBg:      'linear-gradient(135deg, #1484A8 0%, #2CB4D2 100%)',
    logoShadow:  'rgba(20,132,168,0.35)',
    heroBg:      'linear-gradient(135deg, #074E6A 0%, #1484A8 100%)',
    cardShadow:  '0 2px 12px 0 rgba(20,132,168,0.10)',
    navBtnBg:    'linear-gradient(135deg, #1484A8 0%, #2CB4D2 100%)',
    navBtnShadow:'rgba(20,132,168,0.35)',
    stripBg:     'rgba(216,242,248,0.92)',
    stripBdr:    'rgba(20,132,168,0.10)',
    activeDayBg: 'linear-gradient(135deg, #1484A8 0%, #2CB4D2 100%)',
    dotColor:    '#1484A8',
    sectionColor:'#0D6E8E',
  },
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function ClientCardPage() {
  const [navOpen,    setNavOpen]    = useState(false)
  const [layout,     setLayout]     = useState(getLayout)
  const [activeDate, setActiveDate] = useState(CLIENT.stayFrom)

  const stripRef    = useRef<HTMLDivElement>(null)
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({})

  useEffect(() => {
    const h = () => setLayout(getLayout())
    window.addEventListener('popstate', h)
    return () => window.removeEventListener('popstate', h)
  }, [])

  const isMono = layout === 'mono'
  const t      = isMono ? THEME.mono : THEME.default

  const stayFrom = parseISO(CLIENT.stayFrom)
  const stayTo   = parseISO(CLIENT.stayTo)

  // všechny dny pobytu pro pruh
  const stayDays = useMemo(() => {
    const days: { isoDate: string; date: Date; hasAppointments: boolean }[] = []
    let cur = new Date(stayFrom)
    while (cur <= stayTo) {
      const iso = toDateKey(cur)
      days.push({ isoDate: iso, date: new Date(cur), hasAppointments: APPOINTMENTS.some(a => a.isoDate === iso) })
      cur = addDays(cur, 1)
    }
    return days
  }, [])

  const groups = useMemo(() => groupByDate(APPOINTMENTS), [])

  // IntersectionObserver — aktualizuje aktivní den podle scrollu
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveDate(entry.target.id.slice(4)) // strip "day-" prefix
          }
        }
      },
      { rootMargin: '-130px 0px -55% 0px', threshold: 0 },
    )
    Object.values(sectionRefs.current).forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [groups])

  // Když se změní aktivní den, posune pruh tak aby byl den vidět
  useEffect(() => {
    const btn = stripRef.current?.querySelector<HTMLElement>(`[data-date="${activeDate}"]`)
    btn?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  }, [activeDate])

  const scrollToDay = (isoDate: string) => {
    const el = sectionRefs.current[isoDate]
    if (el) {
      // offset = AppBar (64) + pruh (68)
      const y = el.getBoundingClientRect().top + window.scrollY - 140
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

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

      {/* ── Sticky pruh dní ── */}
      <Box
        ref={stripRef}
        sx={{
          position: 'sticky', top: 64, zIndex: 100,
          background: t.stripBg, backdropFilter: 'blur(14px)',
          borderBottom: `1px solid ${t.stripBdr}`,
          display: 'flex', gap: 0.5, px: 1.5, py: 1,
          overflowX: 'auto',
          scrollbarWidth: 'none', '&::-webkit-scrollbar': { display: 'none' },
        }}
      >
        {stayDays.map(day => {
          const isActive = day.isoDate === activeDate
          return (
            <Box
              key={day.isoDate}
              data-date={day.isoDate}
              onClick={() => scrollToDay(day.isoDate)}
              sx={{
                flexShrink: 0, cursor: 'pointer',
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                px: 1, py: 0.5, borderRadius: '12px', minWidth: 40,
                background: isActive ? t.activeDayBg : 'transparent',
                transition: 'background 0.2s',
                opacity: day.hasAppointments ? 1 : 0.4,
              }}
            >
              <Typography variant="caption" sx={{ fontWeight: 800, color: isActive ? '#fff' : '#1C1B1F', lineHeight: 1.2, fontSize: '0.8rem' }}>
                {day.date.getDate()}
              </Typography>
              <Typography variant="caption" sx={{ fontWeight: 600, color: isActive ? 'rgba(255,255,255,0.8)' : '#666', fontSize: '0.65rem', lineHeight: 1 }}>
                {CS_DAYS_SHORT[day.date.getDay()]}
              </Typography>
              {day.hasAppointments && (
                <Box sx={{ width: 4, height: 4, borderRadius: '50%', background: isActive ? 'rgba(255,255,255,0.7)' : t.dotColor, mt: 0.25 }} />
              )}
            </Box>
          )
        })}
      </Box>

      <Container maxWidth="md" sx={{ py: { xs: 2, sm: 3 }, px: { xs: 2, sm: 3 }, pb: { xs: 3, md: 5 } }}>

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
                  {fmtStayDate(CLIENT.stayFrom)} – {fmtStayDate(CLIENT.stayTo)}
                </Typography>
              </Box>
            </Box>
          </Card>
        </motion.div>

        {/* ── Appointment groups ── */}
        <Stack spacing={2}>
          {groups.map((group, gi) => (
            <Box
              key={group.isoDate}
              id={`day-${group.isoDate}`}
              ref={el => { sectionRefs.current[group.isoDate] = el }}
            >
              <Typography variant="caption" sx={{ fontWeight: 700, color: t.sectionColor, textTransform: 'uppercase', letterSpacing: '0.07em', ml: 0.5, mb: 0.75, display: 'block' }}>
                {fmtDayHeading(group.date)}
              </Typography>

              <Stack spacing={1}>
                {group.items.map((item, ii) => {
                  const meta  = TYPE_META[item.type] ?? DEFAULT_META
                  const color = isMono ? meta.colorMono : meta.color
                  return (
                    <motion.div
                      key={ii}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: gi * 0.04 + ii * 0.03, duration: 0.25 }}
                    >
                      <Card sx={{ px: 2, py: 1.25, display: 'flex', alignItems: 'center', gap: 2, boxShadow: t.cardShadow }}>
                        <Box sx={{ width: 40, height: 40, flexShrink: 0, borderRadius: '14px', background: `${color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Icon icon={meta.icon} style={{ fontSize: 22, color }} />
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
            </Box>
          ))}
        </Stack>
      </Container>

      <NavPanel open={navOpen} onClose={() => setNavOpen(false)} />
    </Box>
  )
}
