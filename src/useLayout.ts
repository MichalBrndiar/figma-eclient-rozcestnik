export type LayoutVariant = 'bento' | 'illustrated'

export function getLayout(): LayoutVariant {
  const param = new URLSearchParams(window.location.search).get('layout')
  return param === 'illustrated' ? 'illustrated' : 'bento'
}

export function setLayout(variant: LayoutVariant) {
  const url = new URL(window.location.href)
  url.searchParams.set('layout', variant)
  window.history.pushState({}, '', url)
  window.dispatchEvent(new PopStateEvent('popstate'))
}
