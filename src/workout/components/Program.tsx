import { useState } from 'react'
import { Play, ChevronRight } from 'lucide-react'
import { programDays } from '../data/programDays'
import { exerciseById } from '../data/exercises'
import { weekSchedule } from '../data/programDays'
import ExerciseDetailModal from './ExerciseDetailModal'

interface Props {
  onStartDay: (dayId: string) => void
}

export default function Program({ onStartDay }: Props) {
  const [selectedExerciseId, setSelectedExerciseId] = useState<string | null>(null)

  return (
    <div className="mx-auto max-w-md px-5 pb-28 pt-8">
      <h1 className="text-[26px] font-bold text-[color:var(--ink)]">Nybörjarprogrammet</h1>
      <p className="mt-1.5 text-sm text-[color:var(--body)]">
        Tre pass som varvas under veckan. Kör dem i valfri ordning, med minst en vilodag mellan varje pass.
      </p>

      <div className="mt-5 rounded-[22px] bg-[color:var(--card)] p-4" style={{ boxShadow: 'var(--shadow-sm)' }}>
        <p className="mb-2.5 text-sm font-bold text-[color:var(--ink)]">Förslag på veckoschema</p>
        <div className="flex flex-col divide-y" style={{ borderColor: 'var(--border)' }}>
          {weekSchedule.map(({ day, dayId }) => (
            <div key={day} className="flex items-center justify-between py-1.5 text-sm" style={{ borderColor: 'var(--border)' }}>
              <span className="text-[color:var(--body)]">{day}</span>
              <span
                className="font-semibold"
                style={{ color: dayId ? 'var(--accent-dark)' : 'var(--muted)' }}
              >
                {dayId ? `Pass ${dayId}` : 'Vila'}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-4">
        {programDays.map((day) => (
          <div key={day.id} className="rounded-[24px] bg-[color:var(--card)] p-5" style={{ boxShadow: 'var(--shadow-sm)' }}>
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-[color:var(--ink)]">{day.label}</h2>
                <p className="text-sm text-[color:var(--muted)]">{day.focus}</p>
              </div>
              <button
                onClick={() => onStartDay(day.id)}
                className="flex cursor-pointer items-center gap-1.5 rounded-full border-none px-4 py-2 text-sm font-semibold text-white"
                style={{ backgroundColor: 'var(--accent)' }}
              >
                <Play size={13} fill="white" /> Starta
              </button>
            </div>

            <div className="mt-3 flex flex-col divide-y" style={{ borderColor: 'var(--border)' }}>
              {day.exercises.map((entry) => {
                const ex = exerciseById(entry.exerciseId)
                if (!ex) return null
                return (
                  <button
                    key={entry.exerciseId}
                    onClick={() => setSelectedExerciseId(entry.exerciseId)}
                    className="flex cursor-pointer items-center justify-between border-none bg-transparent py-2.5 text-left"
                    style={{ borderColor: 'var(--border)' }}
                  >
                    <span className="text-sm text-[color:var(--ink)]">{ex.name}</span>
                    <span className="flex items-center gap-1 text-xs text-[color:var(--muted)]">
                      {entry.sets}×{entry.durationSeconds ? `${entry.durationSeconds}s` : entry.reps}
                      {entry.perSide ? ' /sida' : ''}
                      <ChevronRight size={14} />
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-[22px] p-4 text-sm text-[color:var(--body)]" style={{ backgroundColor: 'var(--accent-light)' }}>
        <p className="font-bold text-[color:var(--ink)]">Så trappar du upp</p>
        <p className="mt-1">
          När ett pass börjar kännas lätt – lägg till 2–3 repetitioner per övning, eller en extra set, innan du ökar vikten på hantlarna.
        </p>
      </div>

      {selectedExerciseId && (
        <ExerciseDetailModal exerciseId={selectedExerciseId} onClose={() => setSelectedExerciseId(null)} />
      )}
    </div>
  )
}
