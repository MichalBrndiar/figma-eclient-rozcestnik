import { createPortal } from 'react-dom'
import orderSuccessIllustration from '../assets/order-success.svg'
import './ThankYouOverlay.css'

export function ThankYouOverlay() {
  return createPortal(
    <section className="ty-overlay" aria-live="polite">
      <img
        className="ty-illustration"
        src={orderSuccessIllustration}
        alt="Potvrzená objednávka"
      />
      <p className="ty-badge">Objednávka přijata</p>
      <h2>Děkujeme za objednávku</h2>
      <p>Vše je potvrzeno. Váš požadavek bude zpracován personálem.</p>
    </section>,
    document.body,
  )
}
