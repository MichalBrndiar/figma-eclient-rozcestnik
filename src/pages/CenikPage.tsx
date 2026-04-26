import { useState, useMemo } from 'react'
import {
  AppBar, Box, Chip, Container, IconButton,
  Stack, Toolbar, Typography, Card, Grid, Button, Badge,
} from '@mui/material'
import { ArrowBack, ShoppingCart } from '@mui/icons-material'
import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'

interface Item {
  id: string
  name: string
  category: string
  price: number
  icon: string
}

const ITEMS: Item[] = [
  { id: 'vino',      name: 'Lahev vína',          category: 'Nápoje',    price: 150, icon: 'mdi:bottle-wine'    },
  { id: 'susenky',   name: 'Sušenky',              category: 'Pochutiny', price: 45,  icon: 'mdi:cookie'         },
  { id: 'voda',      name: 'Minerální voda',       category: 'Nápoje',    price: 25,  icon: 'mdi:bottle-soda'    },
  { id: 'cokolada',  name: 'Čokoláda',             category: 'Pochutiny', price: 55,  icon: 'mdi:candy'          },
  { id: 'telove',    name: 'Tělové mléko',         category: 'Hygiena',   price: 120, icon: 'mdi:lotion-plus'    },
  { id: 'vitc',      name: 'Vitamín C (30 tbl)',   category: 'Zdraví',    price: 89,  icon: 'mdi:pill'           },
  { id: 'dzus',      name: 'Ovocný džus (0,25 l)', category: 'Nápoje',    price: 35,  icon: 'mdi:cup-water'      },
  { id: 'croissant', name: 'Croissant',            category: 'Pochutiny', price: 28,  icon: 'mdi:food-croissant' },
  { id: 'casopis',   name: 'Časopis',              category: 'Zábava',    price: 65,  icon: 'mdi:newspaper'      },
  { id: 'pivo',      name: 'Pivo (0,5 l)',         category: 'Nápoje',    price: 40,  icon: 'mdi:beer'           },
  { id: 'nutri',     name: 'Výživový doplněk',     category: 'Zdraví',    price: 180, icon: 'mdi:nutrition'      },
  { id: 'zuby',      name: 'Zubní pasta',          category: 'Hygiena',   price: 75,  icon: 'mdi:tooth-outline'  },
]

const CATEGORIES = ['Vše', ...Array.from(new Set(ITEMS.map(i => i.category)))]

const CAT_COLOR: Record<string, string> = {
  Nápoje:    '#4A7EC0',
  Pochutiny: '#C8784A',
  Hygiena:   '#3A9E80',
  Zdraví:    '#B85C8A',
  Zábava:    '#D4A940',
}

function pluralItems(n: number) {
  if (n === 1) return '1 položka'
  if (n < 5)  return `${n} položky`
  return `${n} položek`
}

export default function CenikPage() {
  const [quantities, setQuantities] = useState<Record<string, number>>({})
  const [category, setCategory]     = useState('Vše')
  const [ordered, setOrdered]       = useState(false)

  const visibleItems = useMemo(
    () => (category === 'Vše' ? ITEMS : ITEMS.filter(i => i.category === category)),
    [category],
  )

  const totalCount = Object.values(quantities).reduce((a, b) => a + b, 0)
  const totalPrice = ITEMS.reduce((s, item) => s + (quantities[item.id] ?? 0) * item.price, 0)

  const setQty = (id: string, delta: number) => {
    setQuantities(q => {
      const next = Math.max(0, (q[id] ?? 0) + delta)
      if (next === 0) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { [id]: _removed, ...rest } = q
        return rest
      }
      return { ...q, [id]: next }
    })
  }

  const handleOrder = () => {
    setOrdered(true)
    setQuantities({})
    setTimeout(() => setOrdered(false), 3500)
  }

  return (
    <Box sx={{ minHeight: '100vh', background: 'linear-gradient(160deg, #F3EEF9 0%, #E8F0FE 100%)' }}>
      {/* AppBar */}
      <AppBar position="sticky" elevation={0} sx={{
        background: 'rgba(243,238,249,0.88)', backdropFilter: 'blur(14px)',
        borderBottom: '1px solid rgba(103,80,164,0.09)',
      }}>
        <Toolbar sx={{ gap: 1 }}>
          <IconButton edge="start" onClick={() => window.history.back()} sx={{ color: '#1C1B1F' }}>
            <ArrowBack />
          </IconButton>
          <Box sx={{
            width: 36, height: 36, borderRadius: '12px',
            background: 'linear-gradient(135deg, #4A7EC0 0%, #7B8DD4 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(74,126,192,0.35)',
          }}>
            <Icon icon="mdi:tag-multiple" style={{ fontSize: 20, color: '#fff' }} />
          </Box>
          <Typography variant="h6" sx={{ color: '#1C1B1F', flexGrow: 1, letterSpacing: '-0.3px' }}>
            Ceníkové položky
          </Typography>
          {totalCount > 0 && (
            <Badge badgeContent={totalCount} color="primary">
              <ShoppingCart sx={{ color: '#6750A4' }} />
            </Badge>
          )}
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ py: 3, px: { xs: 2, sm: 3 }, pb: totalCount > 0 ? '120px' : 5 }}>

        {/* Success banner */}
        {ordered && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
            <Box sx={{
              background: 'linear-gradient(135deg, #3A9E80, #62BFA0)',
              borderRadius: 3, p: 2, mb: 2.5,
              display: 'flex', alignItems: 'center', gap: 1.5, color: '#fff',
            }}>
              <Icon icon="mdi:check-circle" style={{ fontSize: 26 }} />
              <Box>
                <Typography fontWeight={800}>Objednávka odeslána!</Typography>
                <Typography variant="body2" sx={{ opacity: 0.85 }}>
                  Vaše požadavky budou zpracovány personálem.
                </Typography>
              </Box>
            </Box>
          </motion.div>
        )}

        {/* Category chips */}
        <Stack direction="row" sx={{ mb: 3, flexWrap: 'wrap', gap: 1 }}>
          {CATEGORIES.map(cat => {
            const active = category === cat
            const bg = cat === 'Vše' ? 'linear-gradient(135deg, #7B68C8, #9D8FDC)' : CAT_COLOR[cat]
            return (
              <Chip
                key={cat}
                label={cat}
                onClick={() => setCategory(cat)}
                variant={active ? 'filled' : 'outlined'}
                sx={{
                  fontWeight: 600,
                  ...(active && { background: bg, color: '#fff', border: 'none' }),
                }}
              />
            )
          })}
        </Stack>

        {/* Items grid */}
        <Grid container spacing={1.5}>
          {visibleItems.map((item, i) => {
            const qty   = quantities[item.id] ?? 0
            const color = CAT_COLOR[item.category] ?? '#6750A4'
            return (
              <Grid key={item.id} size={{ xs: 12, sm: 6 }}>
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.3 }}
                >
                  <Card sx={{
                    p: 2, display: 'flex', alignItems: 'center', gap: 2,
                    border: `2px solid ${qty > 0 ? color : 'transparent'}`,
                    transition: 'border-color 0.2s, box-shadow 0.2s',
                    boxShadow: qty > 0 ? `0 4px 16px ${color}28` : undefined,
                  }}>
                    {/* category-colored icon */}
                    <Box sx={{
                      width: 52, height: 52, flexShrink: 0, borderRadius: '16px',
                      background: `${color}18`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Icon icon={item.icon} style={{ fontSize: 28, color }} />
                    </Box>

                    {/* name + price */}
                    <Box sx={{ flex: 1, minWidth: 0 }}>
                      <Typography variant="subtitle2" fontWeight={700} noWrap>
                        {item.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'rgba(28,27,31,0.5)', fontWeight: 600 }}>
                        {item.price} Kč / ks
                      </Typography>
                    </Box>

                    {/* quantity stepper */}
                    <Stack direction="row" alignItems="center" spacing={0.5} flexShrink={0}>
                      <IconButton
                        size="small"
                        onClick={() => setQty(item.id, -1)}
                        disabled={qty === 0}
                        sx={{
                          border: '1.5px solid', width: 30, height: 30,
                          borderColor: qty > 0 ? color : 'rgba(0,0,0,0.15)',
                          color: qty > 0 ? color : 'rgba(0,0,0,0.3)',
                        }}
                      >
                        <span style={{ fontSize: 18, lineHeight: 1, fontWeight: 700 }}>−</span>
                      </IconButton>
                      <Typography sx={{
                        minWidth: 22, textAlign: 'center', fontWeight: 800,
                        color: qty > 0 ? color : 'rgba(0,0,0,0.3)',
                      }}>
                        {qty}
                      </Typography>
                      <IconButton
                        size="small"
                        onClick={() => setQty(item.id, 1)}
                        sx={{
                          border: '1.5px solid', width: 30, height: 30,
                          borderColor: color, color,
                        }}
                      >
                        <span style={{ fontSize: 18, lineHeight: 1, fontWeight: 700 }}>+</span>
                      </IconButton>
                    </Stack>
                  </Card>
                </motion.div>
              </Grid>
            )
          })}
        </Grid>
      </Container>

      {/* Sticky order bar */}
      {totalCount > 0 && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 100 }}
        >
          <Box sx={{
            background: 'rgba(28,27,31,0.96)', backdropFilter: 'blur(16px)',
            px: 3, py: 2, display: 'flex', alignItems: 'center', gap: 2,
          }}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.55)', fontSize: 12 }}>
                {pluralItems(totalCount)}
              </Typography>
              <Typography variant="h6" sx={{ color: '#fff', fontWeight: 800, lineHeight: 1.2 }}>
                {totalPrice} Kč
              </Typography>
            </Box>
            <Button
              variant="contained"
              size="large"
              onClick={handleOrder}
              sx={{
                background: 'linear-gradient(135deg, #4A7EC0 0%, #7B8DD4 100%)',
                borderRadius: 3, fontWeight: 700, px: 3.5,
                boxShadow: '0 4px 20px rgba(74,126,192,0.5)',
              }}
            >
              Objednat
            </Button>
          </Box>
        </motion.div>
      )}
    </Box>
  )
}
