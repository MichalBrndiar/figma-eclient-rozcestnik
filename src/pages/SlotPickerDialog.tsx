import { createPortal } from 'react-dom'
import './SlotPickerDialog.css'
import type { DayOption } from './CenikPage.types'

interface SlotPickerDialogProps {
  name: string
  dayOptions: DayOption[]
  timeOptions: string[]
  selectedDate: string
  selectedTime: string
  note: string
  isTimeDisabled: (dateKey: string, time: string) => boolean
  onClose: () => void
  onSelectDate: (key: string) => void
  onSelectTime: (time: string) => void
  onNoteChange: (note: string) => void
  onConfirm: () => void
}

export function SlotPickerDialog({
  name, dayOptions, timeOptions, selectedDate, selectedTime, note,
  isTimeDisabled, onClose, onSelectDate, onSelectTime, onNoteChange, onConfirm,
}: SlotPickerDialogProps) {
  return createPortal(
    <div className="sp-overlay" role="presentation" onClick={onClose}>
      <section
        className="sp-dialog"
        role="dialog"
        aria-modal="true"
        onClick={e => e.stopPropagation()}
      >
        <div>
          <h3>Výběr termínu · {name}</h3>
          <p className="sp-subtitle">Některé dny a časy nejsou k dispozici.</p>
        </div>

        <div className="sp-block">
          <p className="sp-label">Datum</p>
          <div className="sp-day-grid">
            {dayOptions.map(day => (
              <button
                key={day.key}
                type="button"
                className={`sp-btn${selectedDate === day.key ? ' sp-btn--active' : ''}`}
                disabled={day.isDisabled}
                onClick={() => onSelectDate(day.key)}
              >
                {day.dateLabel}
              </button>
            ))}
          </div>
        </div>

        <div className="sp-block">
          <p className="sp-label">Čas</p>
          <div className="sp-time-grid">
            {timeOptions.map(time => {
              const disabled = !selectedDate || isTimeDisabled(selectedDate, time)
              return (
                <button
                  key={time}
                  type="button"
                  className={`sp-btn sp-time${selectedTime === time ? ' sp-btn--active' : ''}`}
                  disabled={disabled}
                  onClick={() => onSelectTime(time)}
                >
                  {time}
                </button>
              )
            })}
          </div>
        </div>

        <div className="sp-block">
          <label className="sp-label" htmlFor="sp-note">Poznámka</label>
          <textarea
            id="sp-note"
            className="sp-textarea"
            rows={3}
            placeholder="Nepovinná poznámka k objednávce…"
            value={note}
            onChange={e => onNoteChange(e.target.value)}
          />
        </div>

        <div className="sp-actions">
          <button type="button" className="sp-cancel" onClick={onClose}>Zrušit</button>
          <button
            type="button"
            className="sp-confirm"
            disabled={!selectedDate || !selectedTime}
            onClick={onConfirm}
          >
            Objednat
          </button>
        </div>
      </section>
    </div>,
    document.body,
  )
}
