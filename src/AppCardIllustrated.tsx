import { Box, Card, CardActionArea, Typography } from '@mui/material'
import { type ReactNode } from 'react'

// Společný wrapper
const Svg = ({ children }: { children: ReactNode }) => (
  <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg"
    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
    {children}
  </svg>
)

// ── Průkazka – recepce s panoramatickým výhledem na město ─────────────────
const IllustrationPrukazka = () => (
  <Svg>
    {/* strop */}
    <rect x="0" y="0" width="200" height="20" fill="rgba(255,255,255,0.22)" />
    {/* závěsná lampa L */}
    <rect x="54" y="0" width="2" height="14" fill="rgba(255,255,255,0.30)" />
    <path d="M44 14 L55 28 L66 14 Z" fill="rgba(255,255,255,0.46)" />
    {/* závěsná lampa R */}
    <rect x="159" y="0" width="2" height="10" fill="rgba(255,255,255,0.30)" />
    <path d="M150 10 L160 22 L170 10 Z" fill="rgba(255,255,255,0.40)" />
    {/* pozadí okna */}
    <rect x="0" y="20" width="200" height="88" fill="rgba(255,255,255,0.04)" />
    {/* skyline – vzdálená vrstva */}
    <rect x="4" y="54" width="16" height="54" fill="rgba(255,255,255,0.07)" />
    <rect x="24" y="40" width="14" height="68" fill="rgba(255,255,255,0.08)" />
    <rect x="44" y="48" width="18" height="60" fill="rgba(255,255,255,0.06)" />
    <rect x="68" y="36" width="14" height="72" fill="rgba(255,255,255,0.07)" />
    <rect x="88" y="52" width="20" height="56" fill="rgba(255,255,255,0.06)" />
    <rect x="114" y="42" width="12" height="66" fill="rgba(255,255,255,0.08)" />
    <rect x="132" y="50" width="16" height="58" fill="rgba(255,255,255,0.06)" />
    <rect x="154" y="38" width="14" height="70" fill="rgba(255,255,255,0.07)" />
    <rect x="174" y="46" width="18" height="62" fill="rgba(255,255,255,0.08)" />
    {/* skyline – střední vrstva */}
    <rect x="10" y="64" width="20" height="44" fill="rgba(255,255,255,0.14)" />
    <rect x="36" y="52" width="16" height="56" fill="rgba(255,255,255,0.16)" />
    <rect x="58" y="60" width="22" height="48" fill="rgba(255,255,255,0.13)" />
    <rect x="86" y="48" width="16" height="60" fill="rgba(255,255,255,0.15)" />
    <rect x="108" y="58" width="18" height="50" fill="rgba(255,255,255,0.14)" />
    <rect x="132" y="52" width="14" height="56" fill="rgba(255,255,255,0.16)" />
    <rect x="152" y="62" width="20" height="46" fill="rgba(255,255,255,0.13)" />
    <rect x="178" y="54" width="16" height="54" fill="rgba(255,255,255,0.15)" />
    {/* skyline – přední vrstva */}
    <rect x="2" y="76" width="24" height="32" fill="rgba(255,255,255,0.20)" />
    <rect x="32" y="66" width="18" height="42" fill="rgba(255,255,255,0.22)" />
    <rect x="56" y="72" width="26" height="36" fill="rgba(255,255,255,0.19)" />
    <rect x="88" y="62" width="20" height="46" fill="rgba(255,255,255,0.21)" />
    <rect x="114" y="70" width="22" height="38" fill="rgba(255,255,255,0.20)" />
    <rect x="142" y="64" width="18" height="44" fill="rgba(255,255,255,0.22)" />
    <rect x="166" y="74" width="24" height="34" fill="rgba(255,255,255,0.19)" />
    {/* oblaka */}
    <ellipse cx="36" cy="36" rx="16" ry="7" fill="rgba(255,255,255,0.82)" />
    <ellipse cx="48" cy="34" rx="13" ry="8" fill="rgba(255,255,255,0.78)" />
    <ellipse cx="150" cy="42" rx="18" ry="7" fill="rgba(255,255,255,0.72)" />
    <ellipse cx="136" cy="44" rx="10" ry="6" fill="rgba(255,255,255,0.68)" />
    {/* recepční pult */}
    <rect x="0" y="108" width="200" height="10" fill="rgba(255,255,255,0.55)" />
    <rect x="0" y="118" width="200" height="42" fill="rgba(255,255,255,0.38)" />
    {/* monitor */}
    <rect x="20" y="78" width="36" height="28" rx="3" fill="rgba(255,255,255,0.50)" />
    <rect x="24" y="82" width="28" height="18" fill="rgba(255,255,255,0.25)" />
    <rect x="34" y="106" width="16" height="4" fill="rgba(255,255,255,0.40)" />
    {/* klávesnice */}
    <rect x="18" y="112" width="40" height="4" rx="2" fill="rgba(255,255,255,0.32)" />
    {/* postava */}
    <circle cx="116" cy="80" r="14" fill="rgba(255,255,255,0.52)" />
    <rect x="102" y="94" width="28" height="18" rx="6" fill="rgba(255,255,255,0.42)" />
    {/* průkazka */}
    <rect x="148" y="86" width="44" height="30" rx="5" fill="rgba(255,255,255,0.78)" />
    <circle cx="160" cy="98" r="7" fill="rgba(255,255,255,0.42)" />
    <rect x="170" y="94" width="16" height="4" rx="2" fill="rgba(255,255,255,0.42)" />
    <rect x="170" y="101" width="12" height="3" rx="1.5" fill="rgba(255,255,255,0.32)" />
    <rect x="152" y="109" width="36" height="3" fill="rgba(255,255,255,0.25)" />
    {/* rostlina */}
    <rect x="4" y="96" width="14" height="14" rx="4" fill="rgba(255,255,255,0.48)" />
    <circle cx="11" cy="88" r="10" fill="rgba(255,255,255,0.35)" />
    <circle cx="11" cy="84" r="6" fill="rgba(255,255,255,0.25)" />
  </Svg>
)

// ── Dokumenty – kancelář s archivem, stolem a lampou ──────────────────────
const IllustrationDokumenty = () => (
  <Svg>
    {/* strop */}
    <rect x="0" y="0" width="200" height="20" fill="rgba(255,255,255,0.22)" />
    {/* závěsná lampa */}
    <rect x="139" y="0" width="2" height="14" fill="rgba(255,255,255,0.30)" />
    <path d="M129 14 L140 28 L151 14 Z" fill="rgba(255,255,255,0.46)" />
    {/* zeď */}
    <rect x="0" y="20" width="200" height="88" fill="rgba(255,255,255,0.04)" />
    {/* archivní skříň */}
    <rect x="2" y="24" width="56" height="84" rx="3" fill="rgba(255,255,255,0.14)" />
    <rect x="2" y="54" width="56" height="3" fill="rgba(255,255,255,0.22)" />
    <rect x="2" y="80" width="56" height="3" fill="rgba(255,255,255,0.20)" />
    {/* šanony – horní police */}
    <rect x="6" y="28" width="10" height="24" rx="2" fill="rgba(255,255,255,0.40)" />
    <rect x="18" y="28" width="10" height="24" rx="2" fill="rgba(255,255,255,0.30)" />
    <rect x="30" y="28" width="10" height="24" rx="2" fill="rgba(255,255,255,0.44)" />
    <rect x="42" y="28" width="10" height="24" rx="2" fill="rgba(255,255,255,0.34)" />
    {/* šanony – střední police */}
    <rect x="6" y="58" width="10" height="20" rx="2" fill="rgba(255,255,255,0.32)" />
    <rect x="18" y="58" width="10" height="20" rx="2" fill="rgba(255,255,255,0.42)" />
    <rect x="30" y="58" width="10" height="20" rx="2" fill="rgba(255,255,255,0.28)" />
    <rect x="42" y="58" width="10" height="20" rx="2" fill="rgba(255,255,255,0.38)" />
    {/* šanony – spodní police */}
    <rect x="6" y="84" width="10" height="22" rx="2" fill="rgba(255,255,255,0.36)" />
    <rect x="18" y="84" width="10" height="22" rx="2" fill="rgba(255,255,255,0.26)" />
    <rect x="30" y="84" width="10" height="22" rx="2" fill="rgba(255,255,255,0.40)" />
    <rect x="42" y="84" width="10" height="22" rx="2" fill="rgba(255,255,255,0.30)" />
    {/* pracovní stůl */}
    <rect x="62" y="108" width="136" height="10" rx="2" fill="rgba(255,255,255,0.55)" />
    <rect x="76" y="118" width="8" height="42" fill="rgba(255,255,255,0.35)" />
    <rect x="184" y="118" width="8" height="42" fill="rgba(255,255,255,0.35)" />
    {/* monitor */}
    <rect x="152" y="76" width="40" height="30" rx="3" fill="rgba(255,255,255,0.50)" />
    <rect x="156" y="80" width="32" height="20" fill="rgba(255,255,255,0.25)" />
    <rect x="168" y="106" width="16" height="4" fill="rgba(255,255,255,0.40)" />
    {/* stohovné dokumenty */}
    <rect x="82" y="92" width="54" height="16" rx="3" fill="rgba(255,255,255,0.35)" />
    <rect x="84" y="84" width="54" height="16" rx="3" fill="rgba(255,255,255,0.45)" />
    <rect x="86" y="76" width="54" height="16" rx="3" fill="rgba(255,255,255,0.58)" />
    <rect x="116" y="74" width="8" height="12" rx="2" fill="rgba(255,255,255,0.78)" />
    {/* stolní lampa */}
    <rect x="68" y="102" width="14" height="8" rx="3" fill="rgba(255,255,255,0.42)" />
    <rect x="73" y="78" width="4" height="26" rx="2" fill="rgba(255,255,255,0.40)" />
    <path d="M64 78 L75 64 L86 78 Z" fill="rgba(255,255,255,0.52)" />
    {/* odpadkový koš */}
    <path d="M160 126 L164 154 L180 154 L184 126 Z" fill="rgba(255,255,255,0.28)" />
    <rect x="165" y="134" width="14" height="2" fill="rgba(255,255,255,0.16)" />
    <rect x="166" y="142" width="12" height="2" fill="rgba(255,255,255,0.16)" />
    <rect x="167" y="150" width="10" height="2" fill="rgba(255,255,255,0.16)" />
    {/* malá rostlina na skříni */}
    <rect x="20" y="104" width="12" height="6" rx="3" fill="rgba(255,255,255,0.45)" />
    <circle cx="26" cy="100" r="7" fill="rgba(255,255,255,0.35)" />
  </Svg>
)

// ── Strava – kuchyně s výdejním pultem a kuchařem ─────────────────────────
const IllustrationStrava = () => (
  <Svg>
    {/* strop */}
    <rect x="0" y="0" width="200" height="20" fill="rgba(255,255,255,0.22)" />
    {/* závěsná lampa L */}
    <rect x="29" y="0" width="2" height="12" fill="rgba(255,255,255,0.30)" />
    <path d="M20 12 L30 24 L40 12 Z" fill="rgba(255,255,255,0.44)" />
    {/* závěsná lampa R */}
    <rect x="169" y="0" width="2" height="14" fill="rgba(255,255,255,0.30)" />
    <path d="M160 14 L170 28 L180 14 Z" fill="rgba(255,255,255,0.46)" />
    {/* kuchyňská zeď */}
    <rect x="0" y="20" width="200" height="88" fill="rgba(255,255,255,0.04)" />
    {/* dlaždice – vodorovné spáry */}
    <rect x="0" y="42" width="200" height="1.5" fill="rgba(255,255,255,0.06)" />
    <rect x="0" y="62" width="200" height="1.5" fill="rgba(255,255,255,0.06)" />
    <rect x="0" y="82" width="200" height="1.5" fill="rgba(255,255,255,0.06)" />
    {/* dlaždice – svislé spáry */}
    <rect x="40" y="20" width="1.5" height="88" fill="rgba(255,255,255,0.05)" />
    <rect x="80" y="20" width="1.5" height="88" fill="rgba(255,255,255,0.05)" />
    <rect x="120" y="20" width="1.5" height="88" fill="rgba(255,255,255,0.05)" />
    <rect x="160" y="20" width="1.5" height="88" fill="rgba(255,255,255,0.05)" />
    {/* digestoř */}
    <path d="M54 20 L44 56 L156 56 L146 20 Z" fill="rgba(255,255,255,0.22)" />
    <rect x="42" y="54" width="116" height="6" rx="2" fill="rgba(255,255,255,0.30)" />
    {/* sporák */}
    <rect x="6" y="72" width="58" height="36" rx="4" fill="rgba(255,255,255,0.28)" />
    <ellipse cx="35" cy="72" rx="28" ry="9" fill="rgba(255,255,255,0.42)" />
    <ellipse cx="35" cy="70" rx="20" ry="6" fill="rgba(255,255,255,0.56)" />
    {/* pára – oblaky */}
    <ellipse cx="22" cy="52" rx="6" ry="10" fill="rgba(255,255,255,0.20)" />
    <ellipse cx="35" cy="42" rx="8" ry="14" fill="rgba(255,255,255,0.26)" />
    <ellipse cx="46" cy="50" rx="6" ry="12" fill="rgba(255,255,255,0.18)" />
    <ellipse cx="28" cy="32" rx="10" ry="8" fill="rgba(255,255,255,0.14)" />
    <ellipse cx="42" cy="28" rx="7" ry="6" fill="rgba(255,255,255,0.10)" />
    {/* výdejní pult */}
    <rect x="0" y="108" width="200" height="10" fill="rgba(255,255,255,0.55)" />
    <rect x="0" y="118" width="200" height="42" fill="rgba(255,255,255,0.40)" />
    {/* tác s talíři */}
    <rect x="68" y="94" width="72" height="14" rx="3" fill="rgba(255,255,255,0.40)" />
    <ellipse cx="86" cy="101" rx="11" ry="7" fill="rgba(255,255,255,0.60)" />
    <ellipse cx="86" cy="100" rx="6" ry="4" fill="rgba(255,255,255,0.38)" />
    <ellipse cx="108" cy="101" rx="11" ry="7" fill="rgba(255,255,255,0.60)" />
    <ellipse cx="108" cy="100" rx="6" ry="4" fill="rgba(255,255,255,0.38)" />
    <ellipse cx="128" cy="101" rx="9" ry="6" fill="rgba(255,255,255,0.52)" />
    {/* kuchař */}
    <circle cx="170" cy="80" r="14" fill="rgba(255,255,255,0.52)" />
    <rect x="156" y="94" width="28" height="18" rx="6" fill="rgba(255,255,255,0.42)" />
    <rect x="163" y="66" width="14" height="10" rx="5" fill="rgba(255,255,255,0.62)" />
    {/* vařečka */}
    <rect x="148" y="72" width="4" height="26" rx="2" fill="rgba(255,255,255,0.38)" />
    <rect x="144" y="66" width="12" height="8" rx="3" fill="rgba(255,255,255,0.46)" />
  </Svg>
)

// ── Procedury – spa místnost s výhledem do přírody ────────────────────────
const IllustrationProcedury = () => (
  <Svg>
    {/* strop */}
    <rect x="0" y="0" width="200" height="20" fill="rgba(255,255,255,0.18)" />
    {/* ambientní světlo */}
    <ellipse cx="100" cy="6" rx="40" ry="12" fill="rgba(255,255,255,0.14)" />
    <ellipse cx="100" cy="6" rx="20" ry="8" fill="rgba(255,255,255,0.22)" />
    {/* stěna */}
    <rect x="0" y="20" width="200" height="88" fill="rgba(255,255,255,0.04)" />
    {/* okno */}
    <rect x="130" y="26" width="62" height="74" rx="4" fill="rgba(255,255,255,0.10)" />
    <rect x="160" y="26" width="2" height="74" fill="rgba(255,255,255,0.14)" />
    <rect x="130" y="62" width="62" height="2" fill="rgba(255,255,255,0.12)" />
    {/* kopce za oknem */}
    <path d="M132 100 Q150 60 168 100 Z" fill="rgba(255,255,255,0.14)" />
    <path d="M156 100 Q174 50 192 100 Z" fill="rgba(255,255,255,0.10)" />
    {/* oblaka v okně */}
    <ellipse cx="148" cy="38" rx="10" ry="4" fill="rgba(255,255,255,0.55)" />
    <ellipse cx="156" cy="36" rx="8" ry="5" fill="rgba(255,255,255,0.50)" />
    <ellipse cx="178" cy="34" rx="12" ry="5" fill="rgba(255,255,255,0.48)" />
    {/* masážní stůl */}
    <rect x="18" y="96" width="148" height="18" rx="9" fill="rgba(255,255,255,0.56)" />
    <rect x="142" y="90" width="24" height="14" rx="7" fill="rgba(255,255,255,0.48)" />
    <rect x="34" y="114" width="8" height="46" rx="3" fill="rgba(255,255,255,0.35)" />
    <rect x="145" y="114" width="8" height="46" rx="3" fill="rgba(255,255,255,0.35)" />
    {/* osoba na stole */}
    <ellipse cx="96" cy="92" rx="50" ry="8" fill="rgba(255,255,255,0.34)" />
    <circle cx="152" cy="88" r="11" fill="rgba(255,255,255,0.46)" />
    <rect x="36" y="90" width="108" height="10" rx="5" fill="rgba(255,255,255,0.26)" />
    {/* svíčky */}
    <rect x="106" y="108" width="28" height="5" rx="2" fill="rgba(255,255,255,0.46)" />
    <rect x="112" y="86" width="8" height="22" rx="3" fill="rgba(255,255,255,0.44)" />
    <path d="M116 86 Q113 80 116 75 Q119 80 116 86 Z" fill="rgba(255,255,255,0.70)" />
    <rect x="122" y="92" width="6" height="16" rx="2.5" fill="rgba(255,255,255,0.38)" />
    <path d="M125 92 Q123 87 125 83 Q127 87 125 92 Z" fill="rgba(255,255,255,0.62)" />
    {/* velká rostlina vlevo */}
    <rect x="2" y="108" width="18" height="22" rx="4" fill="rgba(255,255,255,0.42)" />
    <ellipse cx="11" cy="100" rx="14" ry="12" fill="rgba(255,255,255,0.36)" />
    <ellipse cx="11" cy="96" rx="7" ry="10" fill="rgba(255,255,255,0.24)" />
  </Svg>
)

// ── Ceník – prodejna s regály, pultem a košíkem ───────────────────────────
const IllustrationCenik = () => (
  <Svg>
    {/* strop */}
    <rect x="0" y="0" width="200" height="20" fill="rgba(255,255,255,0.22)" />
    {/* závěsná lampa L */}
    <rect x="49" y="0" width="2" height="14" fill="rgba(255,255,255,0.30)" />
    <path d="M40 14 L50 28 L60 14 Z" fill="rgba(255,255,255,0.48)" />
    {/* závěsná lampa R */}
    <rect x="159" y="0" width="2" height="12" fill="rgba(255,255,255,0.30)" />
    <path d="M150 12 L160 24 L170 12 Z" fill="rgba(255,255,255,0.42)" />
    {/* zeď */}
    <rect x="0" y="20" width="200" height="88" fill="rgba(255,255,255,0.04)" />
    {/* regály – pozadí */}
    <rect x="0" y="20" width="60" height="88" fill="rgba(255,255,255,0.10)" />
    <rect x="70" y="20" width="60" height="88" fill="rgba(255,255,255,0.08)" />
    <rect x="140" y="20" width="60" height="88" fill="rgba(255,255,255,0.10)" />
    {/* police */}
    <rect x="2" y="48" width="56" height="3" fill="rgba(255,255,255,0.22)" />
    <rect x="2" y="72" width="56" height="3" fill="rgba(255,255,255,0.20)" />
    <rect x="72" y="48" width="56" height="3" fill="rgba(255,255,255,0.22)" />
    <rect x="72" y="72" width="56" height="3" fill="rgba(255,255,255,0.18)" />
    <rect x="142" y="48" width="56" height="3" fill="rgba(255,255,255,0.22)" />
    <rect x="142" y="72" width="56" height="3" fill="rgba(255,255,255,0.20)" />
    {/* produkty – horní police */}
    <rect x="5" y="28" width="10" height="18" rx="2" fill="rgba(255,255,255,0.40)" />
    <rect x="17" y="26" width="10" height="20" rx="2" fill="rgba(255,255,255,0.30)" />
    <rect x="29" y="28" width="10" height="18" rx="2" fill="rgba(255,255,255,0.38)" />
    <rect x="42" y="26" width="10" height="20" rx="2" fill="rgba(255,255,255,0.28)" />
    <rect x="75" y="28" width="10" height="18" rx="2" fill="rgba(255,255,255,0.36)" />
    <rect x="88" y="26" width="10" height="20" rx="2" fill="rgba(255,255,255,0.28)" />
    <rect x="145" y="28" width="10" height="18" rx="2" fill="rgba(255,255,255,0.38)" />
    <rect x="158" y="26" width="10" height="20" rx="2" fill="rgba(255,255,255,0.30)" />
    <rect x="171" y="28" width="10" height="18" rx="2" fill="rgba(255,255,255,0.36)" />
    {/* produkty – střední police */}
    <ellipse cx="12" cy="64" rx="8" ry="6" fill="rgba(255,255,255,0.36)" />
    <rect x="22" y="54" width="12" height="16" rx="3" fill="rgba(255,255,255,0.42)" />
    <rect x="37" y="56" width="10" height="14" rx="2" fill="rgba(255,255,255,0.30)" />
    <ellipse cx="82" cy="64" rx="9" ry="7" fill="rgba(255,255,255,0.34)" />
    <rect x="95" y="54" width="12" height="16" rx="3" fill="rgba(255,255,255,0.40)" />
    <ellipse cx="155" cy="64" rx="9" ry="7" fill="rgba(255,255,255,0.36)" />
    <rect x="167" y="54" width="10" height="16" rx="2" fill="rgba(255,255,255,0.30)" />
    <rect x="180" y="56" width="10" height="14" rx="2" fill="rgba(255,255,255,0.38)" />
    {/* produkty – spodní police */}
    <rect x="6" y="76" width="10" height="20" rx="2" fill="rgba(255,255,255,0.34)" />
    <rect x="18" y="78" width="10" height="18" rx="2" fill="rgba(255,255,255,0.26)" />
    <rect x="30" y="76" width="10" height="20" rx="2" fill="rgba(255,255,255,0.38)" />
    <rect x="76" y="76" width="10" height="20" rx="2" fill="rgba(255,255,255,0.32)" />
    <rect x="88" y="78" width="10" height="18" rx="2" fill="rgba(255,255,255,0.28)" />
    <rect x="100" y="76" width="10" height="20" rx="2" fill="rgba(255,255,255,0.36)" />
    <rect x="146" y="76" width="10" height="20" rx="2" fill="rgba(255,255,255,0.34)" />
    <rect x="158" y="78" width="10" height="18" rx="2" fill="rgba(255,255,255,0.26)" />
    <rect x="170" y="76" width="10" height="20" rx="2" fill="rgba(255,255,255,0.38)" />
    {/* pokladní pult */}
    <rect x="0" y="108" width="200" height="10" rx="2" fill="rgba(255,255,255,0.58)" />
    <rect x="0" y="118" width="200" height="42" fill="rgba(255,255,255,0.42)" />
    {/* terminál */}
    <rect x="136" y="78" width="36" height="28" rx="3" fill="rgba(255,255,255,0.52)" />
    <rect x="140" y="82" width="28" height="18" fill="rgba(255,255,255,0.28)" />
    <rect x="140" y="106" width="28" height="4" rx="1" fill="rgba(255,255,255,0.40)" />
    {/* nákupní košík */}
    <path d="M54 86 L60 108 L96 108 L102 86 Z" fill="rgba(255,255,255,0.36)" />
    <rect x="66" y="88" width="2" height="18" fill="rgba(255,255,255,0.20)" />
    <rect x="78" y="88" width="2" height="18" fill="rgba(255,255,255,0.20)" />
    <rect x="90" y="88" width="2" height="18" fill="rgba(255,255,255,0.20)" />
    <rect x="56" y="96" width="44" height="2" fill="rgba(255,255,255,0.20)" />
    <path d="M62 86 Q78 70 94 86 L90 86 Q78 75 66 86 Z" fill="rgba(255,255,255,0.42)" />
    {/* cenovka */}
    <rect x="8" y="78" width="38" height="24" rx="5" fill="rgba(255,255,255,0.72)" />
    <circle cx="17" cy="84" r="4" fill="rgba(255,255,255,0.40)" />
    <rect x="24" y="82" width="16" height="4" rx="2" fill="rgba(255,255,255,0.45)" />
    <rect x="24" y="89" width="12" height="3" rx="1.5" fill="rgba(255,255,255,0.32)" />
    <rect x="24" y="95" width="14" height="3" rx="1.5" fill="rgba(255,255,255,0.25)" />
    {/* malá rostlina */}
    <rect x="110" y="100" width="12" height="10" rx="3" fill="rgba(255,255,255,0.42)" />
    <circle cx="116" cy="94" r="8" fill="rgba(255,255,255,0.32)" />
  </Svg>
)

// ─────────────────────────────────────────────────────────────────────────────

type IllustrationKey = 'prukazka' | 'dokumenty' | 'strava' | 'procedury' | 'cenik'

const illustrations: Record<IllustrationKey, ReactNode> = {
  prukazka:  <IllustrationPrukazka />,
  dokumenty: <IllustrationDokumenty />,
  strava:    <IllustrationStrava />,
  procedury: <IllustrationProcedury />,
  cenik:     <IllustrationCenik />,
}

interface AppCardIllustratedProps {
  title: string
  subtitle: string
  illustration: IllustrationKey
  gradient: string
  href?: string
}

export default function AppCardIllustrated({ title, subtitle, illustration, gradient, href }: AppCardIllustratedProps) {
  return (
    <Card sx={{
      border: 'none', height: '100%', overflow: 'hidden', background: '#fff',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      '&:hover': {
        transform: 'translateY(-4px) scale(1.013)',
        boxShadow: '0 18px 44px rgba(0,0,0,0.15)',
      },
    }}>
      <CardActionArea href={href ?? '#'} sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
        <Box sx={{
          background: gradient, height: 170,
          position: 'relative', overflow: 'hidden', flexShrink: 0,
        }}>
          {/* dot pattern */}
          <Box sx={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)',
            backgroundSize: '22px 22px',
          }} />
          {illustrations[illustration]}
        </Box>

        <Box sx={{ p: 2.5, flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 0.5 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#1C1B1F', lineHeight: 1.2 }}>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'rgba(28,27,31,0.55)', lineHeight: 1.45, fontWeight: 500 }}>
            {subtitle}
          </Typography>
        </Box>
      </CardActionArea>
    </Card>
  )
}
