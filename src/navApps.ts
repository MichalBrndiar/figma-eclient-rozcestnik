import { Badge, Description, InfoOutlined, Restaurant, Spa, Storefront } from '@mui/icons-material'
import type { SvgIconComponent } from '@mui/icons-material'
import type { CardVariant } from './AppCard'

export interface NavApp {
  title: string
  subtitle: string
  Icon: SvgIconComponent
  gradient: string
  gradientMono: string
  href: string
  variant: CardVariant
  size: { xs: number; sm: number }
}

const MONO = {
  deepest: 'linear-gradient(135deg, #074E6A 0%, #0D7A9E 100%)',
  deep:    'linear-gradient(135deg, #0D6E8E 0%, #1A96B8 100%)',
  primary: 'linear-gradient(135deg, #1484A8 0%, #24AACE 100%)',
  medium:  'linear-gradient(135deg, #1E9EBC 0%, #34BDD8 100%)',
  light:   'linear-gradient(135deg, #2CB4D2 0%, #48CDE8 100%)',
}

export const NAV_APPS: NavApp[] = [
  {
    title:        'O nás',
    subtitle:     '',
    Icon:         InfoOutlined,
    gradient:     'linear-gradient(135deg, #5C6F8C 0%, #7D90B0 100%)',
    gradientMono: MONO.deepest,
    href:         '#o-nas',
    variant:      'wide',
    size:         { xs: 12, sm: 12 },
  },
  {
    title:        'Průkazka',
    subtitle:     'Váš digitální průkaz a osobní údaje klienta',
    Icon:         Badge,
    gradient:     'linear-gradient(135deg, #7B68C8 0%, #9D8FDC 100%)',
    gradientMono: MONO.deepest,
    href:         '#prukazka',
    variant:      'featured',
    size:         { xs: 12, sm: 7 },
  },
  {
    title:        'Dokumenty',
    subtitle:     'Smlouvy, formuláře a přílohy',
    Icon:         Description,
    gradient:     'linear-gradient(135deg, #C8784A 0%, #DBA96A 100%)',
    gradientMono: MONO.light,
    href:         '#dokumenty',
    variant:      'normal',
    size:         { xs: 12, sm: 5 },
  },
  {
    title:        'Objednání stravy',
    subtitle:     'Jídelníček a výběr jídel na každý den',
    Icon:         Restaurant,
    gradient:     'linear-gradient(135deg, #3A9E80 0%, #62BFA0 100%)',
    gradientMono: MONO.medium,
    href:         '#strava',
    variant:      'normal',
    size:         { xs: 12, sm: 5 },
  },
  {
    title:        'Objednání procedur',
    subtitle:     'Rehabilitace, masáže a terapeutické procedury',
    Icon:         Spa,
    gradient:     'linear-gradient(135deg, #B85C8A 0%, #D48CB0 100%)',
    gradientMono: MONO.deep,
    href:         '#procedury',
    variant:      'featured',
    size:         { xs: 12, sm: 7 },
  },
  {
    title:        'Ceníkové položky',
    subtitle:     'Doplňkové služby, hygienické potřeby a zboží z nabídky',
    Icon:         Storefront,
    gradient:     'linear-gradient(135deg, #4A7EC0 0%, #7B8DD4 100%)',
    gradientMono: MONO.primary,
    href:         '/cenik',
    variant:      'wide',
    size:         { xs: 12, sm: 12 },
  },
]
