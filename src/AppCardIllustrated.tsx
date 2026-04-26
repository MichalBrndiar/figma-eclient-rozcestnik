import { Box, Card, CardActionArea, Typography } from '@mui/material'
import { type ReactNode } from 'react'

// ─────────────────────────────────────────────────────────────────────────────
// Průkazka – detailní průkaz s chipem, fotografií, NFC, číslem karty
// ─────────────────────────────────────────────────────────────────────────────
const IllustrationPrukazka = () => (
  <svg viewBox="0 0 220 170" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
    {/* stín za kartou */}
    <rect x="24" y="36" width="172" height="108" rx="14" fill="rgba(0,0,0,0.12)" transform="rotate(5 110 90)" />
    {/* zadní karta */}
    <rect x="12" y="20" width="172" height="108" rx="14" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.22)" strokeWidth="1" transform="rotate(-4 98 74)" />
    {/* tělo hlavní karty */}
    <rect x="24" y="24" width="172" height="108" rx="14" fill="rgba(255,255,255,0.20)" />
    <rect x="24" y="24" width="172" height="108" rx="14" stroke="rgba(255,255,255,0.50)" strokeWidth="1.5" />
    {/* záhlavní pruh */}
    <clipPath id="card-clip"><rect x="24" y="24" width="172" height="108" rx="14" /></clipPath>
    <rect x="24" y="24" width="172" height="26" fill="rgba(255,255,255,0.14)" clipPath="url(#card-clip)" />
    {/* název organizace v záhlaví */}
    <rect x="38" y="32" width="72" height="4" rx="2" fill="rgba(255,255,255,0.65)" />
    <rect x="38" y="40" width="48" height="3" rx="1.5" fill="rgba(255,255,255,0.38)" />
    {/* logo – kruh s vnitřní hvězdou */}
    <circle cx="180" cy="37" r="10" fill="rgba(255,255,255,0.22)" stroke="rgba(255,255,255,0.42)" strokeWidth="1.2" />
    <circle cx="180" cy="37" r="5" fill="rgba(255,255,255,0.38)" />
    <circle cx="180" cy="37" r="2" fill="rgba(255,255,255,0.55)" />
    {/* foto rámeček */}
    <rect x="34" y="58" width="48" height="60" rx="9" fill="rgba(255,255,255,0.16)" stroke="rgba(255,255,255,0.38)" strokeWidth="1.2" />
    {/* hlava siluety */}
    <circle cx="58" cy="73" r="12" fill="rgba(255,255,255,0.50)" />
    {/* ramena siluety */}
    <path d="M34 118 Q58 100 82 118" fill="rgba(255,255,255,0.38)" />
    {/* EMV chip */}
    <rect x="92" y="58" width="30" height="22" rx="5" fill="rgba(255,255,255,0.40)" />
    <line x1="92" y1="64" x2="122" y2="64" stroke="rgba(255,255,255,0.22)" strokeWidth="0.8" />
    <line x1="92" y1="69" x2="122" y2="69" stroke="rgba(255,255,255,0.22)" strokeWidth="0.8" />
    <line x1="92" y1="74" x2="122" y2="74" stroke="rgba(255,255,255,0.22)" strokeWidth="0.8" />
    <line x1="100" y1="58" x2="100" y2="80" stroke="rgba(255,255,255,0.22)" strokeWidth="0.8" />
    <line x1="107" y1="58" x2="107" y2="80" stroke="rgba(255,255,255,0.22)" strokeWidth="0.8" />
    <line x1="114" y1="58" x2="114" y2="80" stroke="rgba(255,255,255,0.22)" strokeWidth="0.8" />
    {/* NFC vlny */}
    <path d="M130 64 Q139 69 130 74" stroke="rgba(255,255,255,0.40)" strokeWidth="1.6" strokeLinecap="round" fill="none" />
    <path d="M134 61 Q147 69 134 77" stroke="rgba(255,255,255,0.28)" strokeWidth="1.6" strokeLinecap="round" fill="none" />
    <path d="M138 58 Q155 69 138 80" stroke="rgba(255,255,255,0.18)" strokeWidth="1.6" strokeLinecap="round" fill="none" />
    {/* jméno – tučný řádek */}
    <rect x="92" y="88" width="94" height="7" rx="3.5" fill="rgba(255,255,255,0.65)" />
    {/* info řádky */}
    <rect x="92" y="101" width="72" height="4" rx="2" fill="rgba(255,255,255,0.38)" />
    <rect x="92" y="110" width="56" height="4" rx="2" fill="rgba(255,255,255,0.30)" />
    <rect x="92" y="119" width="80" height="4" rx="2" fill="rgba(255,255,255,0.22)" />
    {/* číslo karty – 16 teček ve 4 skupinách */}
    {[36,42,48,54, 64,70,76,82, 92,98,104,110, 120,126,132,138].map((x, i) => (
      <circle key={i} cx={x} cy="124" r="2" fill="rgba(255,255,255,0.40)" />
    ))}
    {/* holografický pruh */}
    <rect x="24" y="122" width="172" height="7" fill="rgba(255,255,255,0.06)" clipPath="url(#card-clip)" />
    {/* datum expirace */}
    <rect x="148" y="119" width="18" height="3.5" rx="1.75" fill="rgba(255,255,255,0.30)" />
    <rect x="168" y="119" width="18" height="3.5" rx="1.75" fill="rgba(255,255,255,0.22)" />
  </svg>
)

// ─────────────────────────────────────────────────────────────────────────────
// Dokumenty – složka se dvěma dokumenty, razítko, podpis, papírová sponka
// ─────────────────────────────────────────────────────────────────────────────
const IllustrationDokumenty = () => (
  <svg viewBox="0 0 220 170" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
    {/* složka – pozadí */}
    <path d="M22 52 Q22 44 30 44 L80 44 Q86 44 90 50 L98 60 L200 60 Q208 60 208 68 L208 148 Q208 156 200 156 L30 156 Q22 156 22 148 Z" fill="rgba(255,255,255,0.14)" stroke="rgba(255,255,255,0.28)" strokeWidth="1.2" />
    {/* zadní dokument (nakloněný) */}
    <rect x="50" y="40" width="112" height="138" rx="8" fill="rgba(255,255,255,0.14)" stroke="rgba(255,255,255,0.24)" strokeWidth="1" transform="rotate(-6 106 109)" />
    {/* druhý dokument */}
    <rect x="44" y="32" width="112" height="138" rx="8" fill="rgba(255,255,255,0.16)" stroke="rgba(255,255,255,0.28)" strokeWidth="1" transform="rotate(-2 100 101)" />
    {/* hlavní dokument */}
    <rect x="54" y="18" width="112" height="140" rx="10" fill="rgba(255,255,255,0.24)" />
    <rect x="54" y="18" width="112" height="140" rx="10" stroke="rgba(255,255,255,0.50)" strokeWidth="1.5" />
    {/* nadpis dokumentu */}
    <rect x="68" y="34" width="84" height="7" rx="3.5" fill="rgba(255,255,255,0.65)" />
    <rect x="68" y="46" width="60" height="4.5" rx="2.25" fill="rgba(255,255,255,0.38)" />
    {/* oddělovač */}
    <line x1="68" y1="56" x2="152" y2="56" stroke="rgba(255,255,255,0.30)" strokeWidth="1" />
    {/* řádky textu */}
    <rect x="68" y="62" width="80" height="3.5" rx="1.75" fill="rgba(255,255,255,0.38)" />
    <rect x="68" y="71" width="72" height="3.5" rx="1.75" fill="rgba(255,255,255,0.30)" />
    <rect x="68" y="80" width="76" height="3.5" rx="1.75" fill="rgba(255,255,255,0.30)" />
    <rect x="68" y="89" width="64" height="3.5" rx="1.75" fill="rgba(255,255,255,0.24)" />
    {/* oddělovač 2 */}
    <line x1="68" y1="100" x2="152" y2="100" stroke="rgba(255,255,255,0.22)" strokeWidth="0.8" strokeDasharray="4 3" />
    {/* checkbox řádky */}
    <rect x="68" y="106" width="9" height="9" rx="2.5" stroke="rgba(255,255,255,0.45)" strokeWidth="1.2" fill="rgba(255,255,255,0.10)" />
    <path d="M70 111 L72.5 113.5 L76 108" stroke="rgba(255,255,255,0.65)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <rect x="82" y="108" width="54" height="3.5" rx="1.75" fill="rgba(255,255,255,0.38)" />
    <rect x="68" y="120" width="9" height="9" rx="2.5" stroke="rgba(255,255,255,0.45)" strokeWidth="1.2" fill="rgba(255,255,255,0.10)" />
    <path d="M70 125 L72.5 127.5 L76 122" stroke="rgba(255,255,255,0.65)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <rect x="82" y="122" width="44" height="3.5" rx="1.75" fill="rgba(255,255,255,0.30)" />
    <rect x="68" y="134" width="9" height="9" rx="2.5" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" fill="rgba(255,255,255,0.08)" />
    <rect x="82" y="136" width="50" height="3.5" rx="1.75" fill="rgba(255,255,255,0.24)" />
    {/* razítko */}
    <circle cx="148" cy="120" r="16" stroke="rgba(255,255,255,0.40)" strokeWidth="1.5" fill="rgba(255,255,255,0.08)" />
    <circle cx="148" cy="120" r="11" stroke="rgba(255,255,255,0.30)" strokeWidth="1" fill="none" />
    <rect x="140" y="117" width="16" height="4" rx="2" fill="rgba(255,255,255,0.40)" />
    <rect x="142" y="123" width="12" height="2.5" rx="1.25" fill="rgba(255,255,255,0.28)" />
    {/* papírová sponka */}
    <path d="M152 12 L152 30 Q152 40 142 40 Q132 40 132 30 L132 16" stroke="rgba(255,255,255,0.50)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <path d="M142 12 L142 30 Q142 36 148 36" stroke="rgba(255,255,255,0.35)" strokeWidth="2" strokeLinecap="round" fill="none" />
  </svg>
)

// ─────────────────────────────────────────────────────────────────────────────
// Strava – talíř s jídlem, příbor, pára
// ─────────────────────────────────────────────────────────────────────────────
const IllustrationStrava = () => (
  <svg viewBox="0 0 220 170" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
    {/* prostírání / tácek */}
    <ellipse cx="110" cy="148" rx="78" ry="12" fill="rgba(255,255,255,0.10)" />
    {/* stín talíře */}
    <ellipse cx="112" cy="143" rx="58" ry="8" fill="rgba(0,0,0,0.08)" />
    {/* vnější okraj talíře */}
    <circle cx="110" cy="108" r="54" fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.42)" strokeWidth="2" />
    {/* vnitřní ohraničení talíře */}
    <circle cx="110" cy="108" r="44" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.28)" strokeWidth="1" />
    {/* plocha talíře */}
    <circle cx="110" cy="108" r="38" fill="rgba(255,255,255,0.14)" />
    {/* hlavní složka jídla (maso/protein) */}
    <ellipse cx="106" cy="108" rx="22" ry="14" fill="rgba(255,255,255,0.44)" />
    <ellipse cx="106" cy="106" rx="18" ry="10" fill="rgba(255,255,255,0.32)" />
    {/* příloha – zelenina vpravo */}
    <ellipse cx="128" cy="112" rx="10" ry="7" fill="rgba(255,255,255,0.36)" />
    <ellipse cx="126" cy="100" rx="7" ry="5" fill="rgba(255,255,255,0.28)" />
    {/* příloha vlevo */}
    <ellipse cx="90" cy="116" rx="9" ry="6" fill="rgba(255,255,255,0.30)" />
    <ellipse cx="88" cy="104" rx="6" ry="4.5" fill="rgba(255,255,255,0.22)" />
    {/* ozdoba – bylinka nahoře */}
    <path d="M110 90 Q114 84 118 88 Q114 82 110 86 Q106 82 102 88 Q106 84 110 90 Z" fill="rgba(255,255,255,0.45)" />
    {/* pára – tři vlnité čáry */}
    <path d="M96 72 Q93 66 96 60 Q99 54 96 48" stroke="rgba(255,255,255,0.40)" strokeWidth="2" strokeLinecap="round" fill="none" />
    <path d="M110 68 Q107 62 110 56 Q113 50 110 44" stroke="rgba(255,255,255,0.50)" strokeWidth="2" strokeLinecap="round" fill="none" />
    <path d="M124 72 Q121 66 124 60 Q127 54 124 48" stroke="rgba(255,255,255,0.38)" strokeWidth="2" strokeLinecap="round" fill="none" />
    {/* vidlička vlevo */}
    <rect x="44" y="62" width="5" height="42" rx="2.5" fill="rgba(255,255,255,0.42)" />
    <rect x="38" y="62" width="2.5" height="18" rx="1.25" fill="rgba(255,255,255,0.38)" />
    <rect x="42" y="62" width="2.5" height="18" rx="1.25" fill="rgba(255,255,255,0.38)" />
    <rect x="46" y="62" width="2.5" height="18" rx="1.25" fill="rgba(255,255,255,0.38)" />
    <rect x="50" y="62" width="2.5" height="18" rx="1.25" fill="rgba(255,255,255,0.38)" />
    {/* nůž vpravo */}
    <rect x="168" y="60" width="6" height="44" rx="3" fill="rgba(255,255,255,0.42)" />
    <path d="M174 60 Q180 64 180 74 L174 74 Z" fill="rgba(255,255,255,0.32)" />
    {/* lžíce vpravo od nože */}
    <ellipse cx="190" cy="74" rx="7" ry="10" fill="rgba(255,255,255,0.30)" stroke="rgba(255,255,255,0.42)" strokeWidth="1" />
    <rect x="188" y="83" width="4.5" height="32" rx="2.25" fill="rgba(255,255,255,0.38)" />
  </svg>
)

// ─────────────────────────────────────────────────────────────────────────────
// Procedury – lotos, lávové kameny, svíčka, kapka vody
// ─────────────────────────────────────────────────────────────────────────────
const IllustrationProcedury = () => (
  <svg viewBox="0 0 220 170" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
    {/* vlnky vody ve spod */}
    <ellipse cx="110" cy="152" rx="60" ry="8" fill="rgba(255,255,255,0.10)" />
    <ellipse cx="110" cy="152" rx="44" ry="5" stroke="rgba(255,255,255,0.22)" strokeWidth="1" fill="none" />
    <ellipse cx="110" cy="152" rx="28" ry="3" stroke="rgba(255,255,255,0.16)" strokeWidth="1" fill="none" />
    {/* kameny */}
    <ellipse cx="86" cy="140" rx="26" ry="14" fill="rgba(255,255,255,0.28)" />
    <ellipse cx="86" cy="138" rx="22" ry="11" fill="rgba(255,255,255,0.20)" />
    <ellipse cx="110" cy="130" rx="30" ry="15" fill="rgba(255,255,255,0.32)" />
    <ellipse cx="110" cy="128" rx="25" ry="11" fill="rgba(255,255,255,0.22)" />
    <ellipse cx="136" cy="138" rx="24" ry="12" fill="rgba(255,255,255,0.26)" />
    <ellipse cx="136" cy="136" rx="20" ry="9" fill="rgba(255,255,255,0.18)" />
    {/* lotos – vnější vrstva okvětních lístků (8 ks) */}
    {[0,45,90,135,180,225,270,315].map((angle, i) => (
      <ellipse
        key={i}
        cx="110" cy="82"
        rx="10" ry="26"
        fill="rgba(255,255,255,0.18)"
        transform={`rotate(${angle} 110 108)`}
      />
    ))}
    {/* lotos – střední vrstva (6 ks) */}
    {[0,60,120,180,240,300].map((angle, i) => (
      <ellipse
        key={i}
        cx="110" cy="88"
        rx="8" ry="20"
        fill="rgba(255,255,255,0.26)"
        transform={`rotate(${angle} 110 108)`}
      />
    ))}
    {/* lotos – vnitřní lístky (5 ks) */}
    {[0,72,144,216,288].map((angle, i) => (
      <ellipse
        key={i}
        cx="110" cy="94"
        rx="5" ry="14"
        fill="rgba(255,255,255,0.38)"
        transform={`rotate(${angle} 110 108)`}
      />
    ))}
    {/* střed lotosu */}
    <circle cx="110" cy="108" r="10" fill="rgba(255,255,255,0.52)" />
    <circle cx="110" cy="108" r="5" fill="rgba(255,255,255,0.65)" />
    {/* svíčka vlevo */}
    <rect x="34" y="104" width="14" height="36" rx="7" fill="rgba(255,255,255,0.32)" />
    <rect x="38" y="100" width="6" height="8" rx="3" fill="rgba(255,255,255,0.22)" />
    <path d="M41 100 Q38 93 41 88 Q44 93 41 100 Z" fill="rgba(255,255,255,0.65)" />
    <ellipse cx="41" cy="90" rx="3" ry="4" fill="rgba(255,255,255,0.45)" />
    {/* list nalevo */}
    <path d="M22 130 Q30 110 50 118 Q38 124 22 130 Z" fill="rgba(255,255,255,0.30)" />
    <path d="M22 130 Q36 118 50 118" stroke="rgba(255,255,255,0.38)" strokeWidth="1" fill="none" />
    {/* kapka vody vpravo */}
    <path d="M182 72 Q182 58 174 50 Q166 58 166 72 Q166 81 174 81 Q182 81 182 72 Z" fill="rgba(255,255,255,0.35)" stroke="rgba(255,255,255,0.48)" strokeWidth="1.2" />
    <path d="M170 68 Q172 62 174 58" stroke="rgba(255,255,255,0.40)" strokeWidth="1" strokeLinecap="round" fill="none" />
    {/* jiskry */}
    <path d="M60 50 L62 44 L64 50 L70 52 L64 54 L62 60 L60 54 L54 52 Z" fill="rgba(255,255,255,0.38)" />
    <path d="M168 130 L169.5 126 L171 130 L175 131.5 L171 133 L169.5 137 L168 133 L164 131.5 Z" fill="rgba(255,255,255,0.30)" />
    <circle cx="190" cy="52" r="3" fill="rgba(255,255,255,0.42)" />
    <circle cx="30" cy="80" r="2.5" fill="rgba(255,255,255,0.35)" />
  </svg>
)

// ─────────────────────────────────────────────────────────────────────────────
// Ceníkové položky – nákupní taška, cenové jmenovky, produkty, hvězdičky
// ─────────────────────────────────────────────────────────────────────────────
const IllustrationCenik = () => (
  <svg viewBox="0 0 220 170" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
    {/* stín tašky */}
    <ellipse cx="110" cy="152" rx="44" ry="8" fill="rgba(0,0,0,0.08)" />
    {/* tělo tašky */}
    <path d="M68 58 L76 136 Q77 146 87 146 L133 146 Q143 146 144 136 L152 58 Z" fill="rgba(255,255,255,0.22)" stroke="rgba(255,255,255,0.48)" strokeWidth="1.8" />
    {/* postranní záhyby tašky */}
    <line x1="91" y1="58" x2="83" y2="146" stroke="rgba(255,255,255,0.20)" strokeWidth="1" />
    <line x1="129" y1="58" x2="137" y2="146" stroke="rgba(255,255,255,0.20)" strokeWidth="1" />
    {/* logo / proužek na tašce */}
    <rect x="88" y="88" width="44" height="6" rx="3" fill="rgba(255,255,255,0.30)" />
    {/* ucho tašky */}
    <path d="M86 58 Q86 30 110 30 Q134 30 134 58" stroke="rgba(255,255,255,0.55)" strokeWidth="3.5" strokeLinecap="round" fill="none" />
    {/* přezka / šev ucha */}
    <rect x="82" y="54" width="10" height="8" rx="4" fill="rgba(255,255,255,0.35)" />
    <rect x="128" y="54" width="10" height="8" rx="4" fill="rgba(255,255,255,0.35)" />
    {/* cenová jmenovka 1 – vlevo nahoře */}
    <rect x="28" y="32" width="44" height="62" rx="8" fill="rgba(255,255,255,0.22)" stroke="rgba(255,255,255,0.42)" strokeWidth="1.2" transform="rotate(-12 50 63)" />
    <circle cx="50" cy="36" r="4" fill="rgba(255,255,255,0.38)" transform="rotate(-12 50 63)" />
    <path d="M36 28 Q50 16 64 28" stroke="rgba(255,255,255,0.32)" strokeWidth="1.2" fill="none" transform="rotate(-12 50 63)" />
    <rect x="34" y="50" width="32" height="5" rx="2.5" fill="rgba(255,255,255,0.50)" transform="rotate(-12 50 63)" />
    <rect x="34" y="60" width="22" height="3.5" rx="1.75" fill="rgba(255,255,255,0.32)" transform="rotate(-12 50 63)" />
    <rect x="34" y="68" width="28" height="3.5" rx="1.75" fill="rgba(255,255,255,0.26)" transform="rotate(-12 50 63)" />
    {/* cenová jmenovka 2 – vpravo nahoře */}
    <rect x="148" y="28" width="44" height="58" rx="8" fill="rgba(255,255,255,0.20)" stroke="rgba(255,255,255,0.38)" strokeWidth="1.2" transform="rotate(10 170 57)" />
    <circle cx="170" cy="32" r="4" fill="rgba(255,255,255,0.35)" transform="rotate(10 170 57)" />
    <path d="M156 26 Q170 14 184 26" stroke="rgba(255,255,255,0.28)" strokeWidth="1.2" fill="none" transform="rotate(10 170 57)" />
    <rect x="154" y="46" width="32" height="5" rx="2.5" fill="rgba(255,255,255,0.45)" transform="rotate(10 170 57)" />
    <rect x="154" y="56" width="20" height="3.5" rx="1.75" fill="rgba(255,255,255,0.28)" transform="rotate(10 170 57)" />
    {/* malý produkt vně tašky – krabička */}
    <rect x="152" y="108" width="32" height="28" rx="6" fill="rgba(255,255,255,0.20)" stroke="rgba(255,255,255,0.36)" strokeWidth="1" />
    <line x1="168" y1="108" x2="168" y2="136" stroke="rgba(255,255,255,0.22)" strokeWidth="1" />
    <rect x="160" y="116" width="16" height="4" rx="2" fill="rgba(255,255,255,0.30)" />
    {/* hvězdičky / jiskry */}
    <path d="M32 108 L34 102 L36 108 L42 110 L36 112 L34 118 L32 112 L26 110 Z" fill="rgba(255,255,255,0.38)" />
    <path d="M186 84 L187.5 80 L189 84 L193 85.5 L189 87 L187.5 91 L186 87 L182 85.5 Z" fill="rgba(255,255,255,0.32)" />
    <circle cx="42" cy="148" r="4" fill="rgba(255,255,255,0.22)" stroke="rgba(255,255,255,0.35)" strokeWidth="1" />
    <circle cx="38" cy="148" r="4" fill="rgba(255,255,255,0.28)" stroke="rgba(255,255,255,0.40)" strokeWidth="1" />
    <circle cx="34" cy="148" r="4" fill="rgba(255,255,255,0.34)" stroke="rgba(255,255,255,0.45)" strokeWidth="1" />
  </svg>
)

// ─────────────────────────────────────────────────────────────────────────────

type IllustrationKey = 'prukazka' | 'dokumenty' | 'strava' | 'procedury' | 'cenik'

const illustrations: Record<IllustrationKey, ReactNode> = {
  prukazka: <IllustrationPrukazka />,
  dokumenty: <IllustrationDokumenty />,
  strava: <IllustrationStrava />,
  procedury: <IllustrationProcedury />,
  cenik: <IllustrationCenik />,
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
    <Card
      sx={{
        border: 'none',
        height: '100%',
        overflow: 'hidden',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        background: '#fff',
        '&:hover': {
          transform: 'translateY(-4px) scale(1.013)',
          boxShadow: '0 18px 44px rgba(0,0,0,0.15)',
        },
      }}
    >
      <CardActionArea href={href ?? '#'} sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
        <Box
          sx={{
            background: gradient,
            height: 170,
            position: 'relative',
            overflow: 'hidden',
            flexShrink: 0,
          }}
        >
          <Box sx={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
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
