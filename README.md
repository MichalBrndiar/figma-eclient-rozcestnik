# eClient rozcestník

Přehledové rozhraní pro eClient, postavené ve `Vite` + `React` + `TypeScript`. Projekt obsahuje hlavní rozcestník služeb a samostatnou stránku ceníkových položek.

## Co aplikace umí

- hlavní dashboard s uvítací kartou a rychlými vstupy do služeb
- tři vizuální varianty rozložení:
  - `bento`
  - `illustrated`
  - `mono`
- samostatnou stránku `/cenik` pro výběr položek
- přepínání layoutu přes query parametr `?layout=...`
- mobilní bottom navigation a plovoucí přepínač layoutu

## Spuštění

```bash
pnpm install
pnpm dev
```

Vývojový server poběží na adrese zobrazené ve Vite, obvykle `http://localhost:5173`.

## Skripty

```bash
pnpm dev
pnpm build
pnpm lint
pnpm preview
```

## Technologie

- React 19
- TypeScript
- Vite
- MUI
- Emotion
- Framer Motion
- Iconify

## Struktura projektu

- `src/App.tsx` - hlavní shell aplikace a přepínání mezi stránkami
- `src/layouts/` - jednotlivé varianty rozcestníku
- `src/pages/CenikPage.tsx` - samostatná stránka ceníku
- `src/BottomNav.tsx` - mobilní spodní navigace
- `src/LayoutSwitcher.tsx` - plovoucí přepínač layoutů
- `src/useLayout.ts` - práce s `layout` query parametrem

## Poznámka

Projekt je zaměřený na UI prototyp a demo navigačního rozhraní pro klientské prostředí. Obsah jednotlivých karet je zatím nasimulovaný a připravený pro další napojení na reálná data.
