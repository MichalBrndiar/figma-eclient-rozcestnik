import { createPortal } from 'react-dom'
import { Icon } from '@iconify/react'
import './OrderDialog.css'

interface OrderDialogProps {
  name: string
  icon: string
  price: number
  qty: number
  note: string
  accentColor: string
  onClose: () => void
  onQtyChange: (qty: number) => void
  onNoteChange: (note: string) => void
  onConfirm: () => void
}

export function OrderDialog({
  name, icon, price, qty, note, accentColor,
  onClose, onQtyChange, onNoteChange, onConfirm,
}: OrderDialogProps) {
  const cssVars = {
    '--accent':             accentColor,
    '--accent-bg':          '#ffffff',
    '--accent-bdr':         `${accentColor}38`,
    '--accent-block':       `${accentColor}14`,
    '--accent-text':        accentColor,
    '--accent-sub':         `${accentColor}aa`,
    '--accent-placeholder': `${accentColor}66`,
  } as React.CSSProperties

  return createPortal(
    <div className="od-overlay" role="presentation" onClick={onClose}>
      <section
        className="od-dialog"
        role="dialog"
        aria-modal="true"
        style={cssVars}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="od-header">
          <div className="od-icon" style={{ background: `${accentColor}18` }}>
            <Icon icon={icon} style={{ fontSize: 28, color: accentColor }} />
          </div>
          <div className="od-info">
            <p className="od-name">{name}</p>
            <p className="od-meta">{price} Kč / ks · celkem {qty * price} Kč</p>
          </div>
          <div className="od-stepper">
            <button
              type="button"
              className="od-stepper-btn"
              disabled={qty <= 1}
              onClick={() => onQtyChange(Math.max(1, qty - 1))}
            >
              −
            </button>
            <span className="od-qty">{qty}</span>
            <button
              type="button"
              className="od-stepper-btn"
              onClick={() => onQtyChange(qty + 1)}
            >
              +
            </button>
          </div>
        </div>

        {/* Note */}
        <div className="od-block">
          <label className="od-label" htmlFor="od-note">Poznámka</label>
          <textarea
            id="od-note"
            className="od-textarea"
            rows={3}
            placeholder="Nepovinná poznámka k objednávce…"
            value={note}
            onChange={e => onNoteChange(e.target.value)}
          />
        </div>

        {/* Actions */}
        <div className="od-actions">
          <button type="button" className="od-cancel" onClick={onClose}>Zrušit</button>
          <button type="button" className="od-confirm" onClick={onConfirm}>Objednat</button>
        </div>
      </section>
    </div>,
    document.body,
  )
}
