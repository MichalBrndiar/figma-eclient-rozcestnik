import { useState, useEffect } from 'react'
import { Box, Tooltip } from '@mui/material'
import GridViewRounded from '@mui/icons-material/GridViewRounded'
import ImageRounded from '@mui/icons-material/ImageRounded'
import { getLayout, setLayout, type LayoutVariant } from './useLayout'

const variants: { key: LayoutVariant; label: string; Icon: typeof GridViewRounded }[] = [
  { key: 'bento', label: 'Bento (varanta 1)', Icon: GridViewRounded },
  { key: 'illustrated', label: 'Ilustrace (varianta 2)', Icon: ImageRounded },
]

export default function LayoutSwitcher() {
  const [current, setCurrent] = useState<LayoutVariant>(getLayout)

  useEffect(() => {
    const handler = () => setCurrent(getLayout())
    window.addEventListener('popstate', handler)
    return () => window.removeEventListener('popstate', handler)
  }, [])

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: { xs: 90, md: 24 },
        right: 16,
        zIndex: 1300,
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
      }}
    >
      {variants.map(({ key, label, Icon }) => (
        <Tooltip key={key} title={label} placement="left">
          <Box
            onClick={() => { setLayout(key); setCurrent(key) }}
            sx={{
              width: 44,
              height: 44,
              borderRadius: '14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.18s ease',
              background: current === key
                ? 'linear-gradient(135deg, #7B68C8 0%, #9D8FDC 100%)'
                : 'rgba(255,255,255,0.85)',
              boxShadow: current === key
                ? '0 4px 16px rgba(123,104,200,0.40)'
                : '0 2px 10px rgba(0,0,0,0.12)',
              backdropFilter: 'blur(8px)',
              '&:hover': {
                transform: 'scale(1.08)',
                boxShadow: '0 6px 20px rgba(0,0,0,0.18)',
              },
            }}
          >
            <Icon sx={{ fontSize: 20, color: current === key ? '#fff' : 'rgba(28,27,31,0.55)' }} />
          </Box>
        </Tooltip>
      ))}
    </Box>
  )
}
