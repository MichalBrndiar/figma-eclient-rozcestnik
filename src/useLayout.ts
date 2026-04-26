export type LayoutVariant = 'bento' | 'illustrated' | 'mono'

export function getLayout(): LayoutVariant {
  const param = new URLSearchParams(window.location.search).get('layout')
  if (param === 'illustrated') return 'illustrated'
  if (param === 'mono') return 'mono'
  return 'bento'
}

export function setLayout(variant: LayoutVariant) {
  const url = new URL(window.location.href)
  url.searchParams.set('layout', variant)
  window.history.pushState({}, '', url)
  window.dispatchEvent(new PopStateEvent('popstate'))
}
