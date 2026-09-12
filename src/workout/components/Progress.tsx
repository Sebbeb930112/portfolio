import { Trash2 } from 'lucide-react'
import { programDayById } from '../data/programDays'
import type { CompletedSession } from '../types'

interface Props {
  history: CompletedSession[]
  onClear: () => void
}

function lastNDays(n: number): string[] {
  const days: string[] = []
  const today = new Date()
  for (let i = n - 1; i >= 0; i--) {
    const d = new Date(today)
    d.setDate(d.getDate() - i)
    days.push(d.toISOString().slice(0, 10))
  }
  return days
}

const weekdayLetters = ['M', 'T', 'O', 'T', 'F', 'L', 'S']

export default function Progress({ history, onClear }: Props) {
  const days = lastNDays(14)
  const doneDates = new Set(history.map((h) => h.date.slice(0, 10)))
  const sorted = [...history].sort((a, b) => b.date.localeCompare(a.date))

  const counts: Record<string, number> = {}
  for (const h of history) counts[h.dayId] = (counts[h.dayId] ?? 0) + 1

  return (
    <div className="mx-auto max-w-md px-5 pb-28 pt-8">
      <h1 className="text-[26px] font-bold text-[color:var(--ink)]">Framsteg</h1>
      <p className="mt-1.5 text-sm text-[color:var(--body)]">Här ser du din träningshistorik.</p>

      <div className="mt-5 rounded-[22px] bg-[color:var(--card)] p-4" style={{ boxShadow: 'var(--shadow-sm)' }}>
        <p className="mb-3 text-sm font-bold text-[color:var(--ink)]">Senaste 14 dagarna</p>
        <div className="grid grid-cols-7 gap-2">
          {days.map((date) => {
            const dow = weekdayLetters[(new Date(date).getDay() + 6) % 7]
            const done = doneDates.has(date)
            return (
              <div key={date} className="flex flex-col items-center gap-1">
                <span className="text-[10px] text-[color:var(--muted)]">{dow}</span>
                <div
                  className="h-7 w-7 rounded-lg"
                  style={{ backgroundColor: done ? 'var(--accent)' : 'var(--bg)' }}
                  title={date}
                />
              </div>
            )
          })}
        </div>
      </div>

      {Object.keys(counts).length > 0 && (
        <div className="mt-4 grid grid-cols-3 gap-3">
          {['A', 'B', 'C'].map((id) => {
            const day = programDayById(id)
            return (
              <div key={id} className="rounded-[20px] bg-[color:var(--card)] p-3 text-center" style={{ boxShadow: 'var(--shadow-sm)' }}>
                <p className="text-xl font-bold text-[color:var(--ink)]">{counts[id] ?? 0}</p>
                <p className="text-xs text-[color:var(--muted)]">{day?.label}</p>
              </div>
            )
          })}
        </div>
      )}

      <div className="mt-6">
        <p className="mb-2 text-sm font-bold text-[color:var(--ink)]">Historik</p>
        {sorted.length === 0 ? (
          <p
            className="rounded-[20px] bg-[color:var(--card)] p-4 text-sm text-[color:var(--muted)]"
            style={{ boxShadow: 'var(--shadow-sm)' }}
          >
            Inga genomförda pass ännu – kör igång från Hem-fliken!
          </p>
        ) : (
          <div className="flex flex-col gap-2">
            {sorted.map((h, i) => {
              const day = programDayById(h.dayId)
              const date = new Date(h.date)
              return (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-[20px] bg-[color:var(--card)] p-3.5"
                  style={{ boxShadow: 'var(--shadow-sm)' }}
                >
                  <div>
                    <p className="text-sm font-bold text-[color:var(--ink)]">{day?.label ?? h.dayId}</p>
                    <p className="text-xs text-[color:var(--muted)]">{day?.focus}</p>
                  </div>
                  <span className="text-xs text-[color:var(--muted)]">
                    {date.toLocaleDateString('sv-SE', { day: 'numeric', month: 'short' })}
                  </span>
                </div>
              )
            })}
          </div>
        )}
      </div>

      {sorted.length > 0 && (
        <button
          onClick={onClear}
          className="mt-6 flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border-none bg-[color:var(--card)] py-2.5 text-xs font-medium text-[color:var(--muted)]"
          style={{ boxShadow: 'var(--shadow-sm)' }}
        >
          <Trash2 size={14} /> Rensa historik
        </button>
      )}
    </div>
  )
}
