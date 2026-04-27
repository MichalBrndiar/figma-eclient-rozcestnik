import { useState, useEffect, useMemo } from 'react'
import {
  AppBar, Box, Chip, Container, IconButton,
  Stack, Toolbar, Tooltip, Typography, Card, Grid, Button,
} from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'
import NavPanel from '../NavPanel'
import { NAV_APPS } from '../navApps'
import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'
import { getLayout } from '../useLayout'
import { SlotPickerDialog } from './SlotPickerDialog'
import { OrderDialog } from './OrderDialog'
import { ThankYouOverlay } from './ThankYouOverlay'
import type { DayOption } from './CenikPage.types'

// ── Types ─────────────────────────────────────────────────────────────────────

interface Item {
  id: string
  name: string
  category: string
  price: number
  icon: string
  duration?: string   // only for Procedury
}

// ── Data ──────────────────────────────────────────────────────────────────────

const ITEMS: Item[] = [
  { id: 'vino',       name: 'Lahev vína',          category: 'Nápoje',    price: 150,  icon: 'mdi:bottle-wine'      },
  { id: 'susenky',    name: 'Sušenky',              category: 'Pochutiny', price: 45,   icon: 'mdi:cookie'           },
  { id: 'voda',       name: 'Minerální voda',       category: 'Nápoje',    price: 25,   icon: 'mdi:bottle-soda'      },
  { id: 'cokolada',   name: 'Čokoláda',             category: 'Pochutiny', price: 55,   icon: 'mdi:candy'            },
  { id: 'telove',     name: 'Tělové mléko',         category: 'Hygiena',   price: 120,  icon: 'mdi:lotion-plus'      },
  { id: 'vitc',       name: 'Vitamín C (30 tbl)',   category: 'Zdraví',    price: 89,   icon: 'mdi:pill'             },
  { id: 'dzus',       name: 'Ovocný džus (0,25 l)', category: 'Nápoje',    price: 35,   icon: 'mdi:cup-water'        },
  { id: 'croissant',  name: 'Croissant',            category: 'Pochutiny', price: 28,   icon: 'mdi:food-croissant'   },
  { id: 'casopis',    name: 'Časopis',              category: 'Zábava',    price: 65,   icon: 'mdi:newspaper'        },
  { id: 'pivo',       name: 'Pivo (0,5 l)',         category: 'Nápoje',    price: 40,   icon: 'mdi:beer'             },
  { id: 'nutri',      name: 'Výživový doplněk',     category: 'Zdraví',    price: 180,  icon: 'mdi:nutrition'        },
  { id: 'zuby',       name: 'Zubní pasta',          category: 'Hygiena',   price: 75,   icon: 'mdi:tooth-outline'    },
  { id: 'masaz-zad',    name: 'Masáž zad',        category: 'Procedury', price: 990,  icon: 'mdi:spa',          duration: '45 min' },
  { id: 'rehabilitace', name: 'Rehabilitace',      category: 'Procedury', price: 1190, icon: 'mdi:medical-bag',  duration: '60 min' },
  { id: 'manikura',     name: 'Manikúra',          category: 'Procedury', price: 450,  icon: 'mdi:hand-okay',    duration: '30 min' },
  { id: 'pedikura',     name: 'Pedikúra',          category: 'Procedury', price: 550,  icon: 'mdi:shoe-print',   duration: '40 min' },
]

const CATEGORIES = ['Vše', 'Nápoje', 'Pochutiny', 'Hygiena', 'Zdraví', 'Zábava', 'Procedury']

const TIME_OPTIONS = ['08:00', '09:30', '11:00', '13:00', '15:30', '17:00']
const DAY_NAMES    = ['Ne', 'Po', 'Út', 'St', 'Čt', 'Pá', 'So']

// ── Colors ────────────────────────────────────────────────────────────────────

const CAT_COLOR_DEFAULT: Record<string, string> = {
  Nápoje:    '#4A7EC0',
  Pochutiny: '#C8784A',
  Hygiena:   '#3A9E80',
  Zdraví:    '#B85C8A',
  Zábava:    '#D4A940',
  Procedury: '#5B7A6A',
}
const CAT_COLOR_MONO: Record<string, string> = {
  Nápoje:    '#0B7CA8',
  Pochutiny: '#1A9EBC',
  Hygiena:   '#2ABACC',
  Zdraví:    '#0E8EA0',
  Zábava:    '#38C8E0',
  Procedury: '#0A6070',
}

const THEME = {
  default: {
    bg:          'linear-gradient(160deg, #F3EEF9 0%, #E8F0FE 100%)',
    appBarBg:    'rgba(243,238,249,0.88)',
    appBarBdr:   'rgba(103,80,164,0.09)',
    logoBg:      'linear-gradient(135deg, #4A7EC0 0%, #7B8DD4 100%)',
    logoShadow:  'rgba(74,126,192,0.35)',
    allChipBg:   'linear-gradient(135deg, #7B68C8, #9D8FDC)',
    blockBg:     '#ede8f7',
    blockBdr:    '#cdc4e8',
    labelColor:  '#4a3f7a',
    stepperBg:   '#ddd8f0',
    cancelBg:    '#ddd8f0',
    cancelColor: '#3d3368',
  },
  mono: {
    bg:          'linear-gradient(160deg, #D8F2F8 0%, #C8EAF5 100%)',
    appBarBg:    'rgba(216,242,248,0.88)',
    appBarBdr:   'rgba(20,132,168,0.10)',
    logoBg:      'linear-gradient(135deg, #1484A8 0%, #2CB4D2 100%)',
    logoShadow:  'rgba(20,132,168,0.35)',
    allChipBg:   'linear-gradient(135deg, #1484A8, #2CB4D2)',
    blockBg:     '#e4f4fa',
    blockBdr:    '#c0dfee',
    labelColor:  '#0d5a7a',
    stepperBg:   '#c8e8f5',
    cancelBg:    '#c8e8f5',
    cancelColor: '#0a4a66',
  },
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function toDateKey(date: Date) {
  const y = date.getFullYear()
  const m = `${date.getMonth() + 1}`.padStart(2, '0')
  const d = `${date.getDate()}`.padStart(2, '0')
  return `${y}-${m}-${d}`
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function CenikPage() {
  const [category, setCategory]       = useState('Vše')
  const [ordered, setOrdered]         = useState(false)
  const [orderedColor, setOrderedColor] = useState('#5b4fa0')
  const [navOpen, setNavOpen]          = useState(false)
  const [layout, setLayout]           = useState(getLayout)

  // order dialog (quantity + note)
  const [orderItem, setOrderItem]     = useState<Item | null>(null)
  const [orderQty, setOrderQty]       = useState(1)
  const [orderNote, setOrderNote]     = useState('')

  // slot picker dialog (date + time + note)
  const [pickerItem, setPickerItem]   = useState<Item | null>(null)
  const [pickerDate, setPickerDate]   = useState('')
  const [pickerTime, setPickerTime]   = useState('')
  const [pickerNote, setPickerNote]   = useState('')

  useEffect(() => {
    const h = () => setLayout(getLayout())
    window.addEventListener('popstate', h)
    return () => window.removeEventListener('popstate', h)
  }, [])

  const isMono    = layout === 'mono'
  const theme     = isMono ? THEME.mono : THEME.default
  const CAT_COLOR = isMono ? CAT_COLOR_MONO : CAT_COLOR_DEFAULT

  const visibleItems = useMemo(() => {
    if (category === 'Vše') return ITEMS
    return ITEMS.filter(i => i.category === category)
  }, [category])

  // 12-day window for slot picker
  const dayOptions = useMemo<DayOption[]>(() => {
    const blocked = new Set([2, 6, 10])
    const base = new Date()
    base.setHours(0, 0, 0, 0)
    return Array.from({ length: 12 }, (_, offset) => {
      const date = new Date(base)
      date.setDate(base.getDate() + offset)
      const weekday = date.getDay()
      return {
        key:       toDateKey(date),
        dateLabel: `${DAY_NAMES[weekday]} ${date.getDate()}.${date.getMonth() + 1}.`,
        weekday,
        isDisabled: weekday === 0 || blocked.has(offset),
      }
    })
  }, [])

  const isTimeDisabled = (dateKey: string, time: string) => {
    const day = dayOptions.find(d => d.key === dateKey)
    if (!day) return true
    if (day.weekday === 5 && (time === '08:00' || time === '09:30')) return true
    return false
  }

  // ── Handlers ────────────────────────────────────────────────────────────────

  const openOrderDialog = (item: Item) => {
    setOrderItem(item); setOrderQty(1); setOrderNote('')
  }
  const closeOrderDialog = () => setOrderItem(null)
  const confirmOrder = () => {
    setOrderedColor(orderColor)
    closeOrderDialog()
    setOrdered(true)
    setTimeout(() => setOrdered(false), 5000)
  }

  const openPickerDialog = (item: Item) => {
    const firstDay = dayOptions.find(d => !d.isDisabled)
    setPickerItem(item)
    setPickerDate(firstDay?.key ?? '')
    setPickerTime('')
    setPickerNote('')
  }
  const closePickerDialog = () => setPickerItem(null)
  const confirmPicker = () => {
    setOrderedColor(pickerColor)
    closePickerDialog()
    setOrdered(true)
    setTimeout(() => setOrdered(false), 5000)
  }

  const orderColor  = orderItem  ? (CAT_COLOR[orderItem.category]  ?? '#5b4fa0') : '#5b4fa0'
  const pickerColor = pickerItem ? (CAT_COLOR[pickerItem.category] ?? '#5B7A6A') : '#5B7A6A'

  // ── Render ──────────────────────────────────────────────────────────────────

  return (
    <Box sx={{ minHeight: '100vh', background: theme.bg }}>
      {/* AppBar */}
      <AppBar position="sticky" elevation={0} sx={{ background: theme.appBarBg, backdropFilter: 'blur(14px)', borderBottom: `1px solid ${theme.appBarBdr}` }}>
        <Toolbar sx={{ gap: 1 }}>
          {/* Hamburger – jen na mobilu */}
          <IconButton edge="start" onClick={() => setNavOpen(true)} sx={{ color: '#1C1B1F', display: { xs: 'flex', sm: 'none' } }}>
            <MenuIcon />
          </IconButton>

          <Box sx={{ width: 36, height: 36, borderRadius: '12px', background: theme.logoBg, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 2px 8px ${theme.logoShadow}` }}>
            <Icon icon="mdi:tag-multiple" style={{ fontSize: 20, color: '#fff' }} />
          </Box>
          <Typography variant="h6" sx={{ color: '#1C1B1F', flexGrow: 1, letterSpacing: '-0.3px' }}>
            Ceníkové položky
          </Typography>

          {/* Desktop nav ikonky */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', gap: 0.5 }}>
            {NAV_APPS.map(app => (
              <Tooltip key={app.href} title={app.title} arrow placement="bottom">
                <IconButton
                  size="small"
                  onClick={() => {
                    const url = new URL(window.location.href)
                    url.pathname = app.href.startsWith('/') ? app.href : '/'
                    url.hash = app.href.startsWith('#') ? app.href : ''
                    window.history.pushState(null, '', url.toString())
                    window.dispatchEvent(new PopStateEvent('popstate'))
                  }}
                  sx={{
                    width: 34, height: 34, borderRadius: '10px',
                    background: app.gradient,
                    transition: 'transform 0.15s, box-shadow 0.15s',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                    },
                  }}
                >
                  <app.Icon sx={{ fontSize: 17, color: '#fff' }} />
                </IconButton>
              </Tooltip>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ py: 3, px: { xs: 2, sm: 3 }, pb: 5 }}>


        {/* Category chips */}
        <Stack direction="row" sx={{ mb: 3, flexWrap: 'wrap', gap: 1 }}>
          {CATEGORIES.map(cat => {
            const active = category === cat
            const bg = cat === 'Vše' ? theme.allChipBg : CAT_COLOR[cat]
            return (
              <Chip
                key={cat}
                label={cat}
                onClick={() => setCategory(cat)}
                variant={active ? 'filled' : 'outlined'}
                sx={{ fontWeight: 600, ...(active && { background: bg, color: '#fff', border: 'none' }) }}
              />
            )
          })}
        </Stack>

        {/* Items grid */}
        <Grid container spacing={1.5}>
          {visibleItems.map((item, i) => {
            const color = CAT_COLOR[item.category] ?? '#6750A4'
            const isProcedure = item.category === 'Procedury'
            return (
              <Grid key={item.id} size={{ xs: 12, sm: 6 }}>
                <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04, duration: 0.3 }}>
                  <Card sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box sx={{ width: 52, height: 52, flexShrink: 0, borderRadius: '16px', background: `${color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon icon={item.icon} style={{ fontSize: 28, color }} />
                    </Box>

                    <Box sx={{ flex: 1, minWidth: 0 }}>
                      <Typography variant="subtitle2" noWrap sx={{ fontWeight: 700 }}>
                        {item.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'rgba(28,27,31,0.5)', fontWeight: 600 }}>
                        {item.price} Kč{isProcedure && item.duration ? ` · ${item.duration}` : ' / ks'}
                      </Typography>
                    </Box>

                    <Button
                      variant="contained"
                      size="small"
                      onClick={() => isProcedure ? openPickerDialog(item) : openOrderDialog(item)}
                      sx={{
                        flexShrink: 0,
                        background: `linear-gradient(135deg, ${color} 0%, ${color}cc 100%)`,
                        borderRadius: '999px', fontWeight: 700, px: 2,
                        boxShadow: `0 2px 8px ${color}44`,
                        '&:hover': { background: color },
                      }}
                    >
                      {isProcedure ? 'Termín' : 'Objednat'}
                    </Button>
                  </Card>
                </motion.div>
              </Grid>
            )
          })}
        </Grid>
      </Container>

      {orderItem && (
        <OrderDialog
          name={orderItem.name}
          icon={orderItem.icon}
          price={orderItem.price}
          qty={orderQty}
          note={orderNote}
          accentColor={orderColor}
          onClose={closeOrderDialog}
          onQtyChange={setOrderQty}
          onNoteChange={setOrderNote}
          onConfirm={confirmOrder}
        />
      )}

      {pickerItem && (
        <SlotPickerDialog
          name={pickerItem.name}
          dayOptions={dayOptions}
          timeOptions={TIME_OPTIONS}
          selectedDate={pickerDate}
          selectedTime={pickerTime}
          note={pickerNote}
          isTimeDisabled={isTimeDisabled}
          onClose={closePickerDialog}
          onSelectDate={key => { setPickerDate(key); setPickerTime('') }}
          onSelectTime={setPickerTime}
          onNoteChange={setPickerNote}
          onConfirm={confirmPicker}
        />
      )}

      {ordered && <ThankYouOverlay accentColor={orderedColor} onDismiss={() => setOrdered(false)} />}
      <NavPanel open={navOpen} onClose={() => setNavOpen(false)} />
    </Box>
  )
}
