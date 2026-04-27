import { createPortal } from 'react-dom'
import './ThankYouOverlay.css'

export function ThankYouOverlay({ accentColor, onDismiss }: { accentColor: string; onDismiss: () => void }) {
  return createPortal(
    <div className="ty-overlay" aria-live="polite" onClick={onDismiss}>
      <span style={{ background: accentColor }}>Děkujeme za objednávku</span>
    </div>,
    document.body,
  )
}
