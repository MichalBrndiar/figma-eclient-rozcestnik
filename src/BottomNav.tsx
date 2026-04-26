import { useState } from 'react'
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material'
import GridViewRounded from '@mui/icons-material/GridViewRounded'
import FavoriteRounded from '@mui/icons-material/FavoriteRounded'
import NotificationsRounded from '@mui/icons-material/NotificationsRounded'
import PersonRounded from '@mui/icons-material/PersonRounded'

const navItems = [
  { label: 'Přehled', Icon: GridViewRounded },
  { label: 'Oblíbené', Icon: FavoriteRounded },
  { label: 'Zprávy', Icon: NotificationsRounded },
  { label: 'Profil', Icon: PersonRounded },
]

export default function BottomNav() {
  const [value, setValue] = useState(0)

  return (
    <Paper
      elevation={0}
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        display: { xs: 'block', md: 'none' },
        borderTop: '1px solid rgba(103,80,164,0.1)',
        background: 'rgba(252,248,255,0.92)',
        backdropFilter: 'blur(16px)',
        zIndex: 1200,
        pb: 'env(safe-area-inset-bottom)',
      }}
    >
      <BottomNavigation
        value={value}
        onChange={(_, v) => setValue(v)}
        sx={{ background: 'transparent', height: 64 }}
      >
        {navItems.map(({ label, Icon }) => (
          <BottomNavigationAction
            key={label}
            label={label}
            icon={<Icon />}
            sx={{
              color: 'rgba(28,27,31,0.45)',
              minWidth: 0,
              '&.Mui-selected': { color: '#6750A4' },
              '& .MuiBottomNavigationAction-label': {
                fontSize: '0.7rem',
                fontWeight: 600,
                '&.Mui-selected': { fontSize: '0.7rem' },
              },
              '& .MuiSvgIcon-root': {
                transition: 'transform 0.18s ease',
              },
              '&.Mui-selected .MuiSvgIcon-root': {
                transform: 'scale(1.18)',
              },
            }}
          />
        ))}
      </BottomNavigation>
    </Paper>
  )
}
