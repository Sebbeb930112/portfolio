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
      <h1 className="text-2xl font-bold text-gray-900">Nybörjarprogrammet</h1>
      <p className="mt-1 text-sm text-gray-500">
        Tre pass som varvas under veckan. Kör dem i valfri ordning, med minst en vilodag mellan varje pass.
      </p>

      <div className="mt-4 rounded-2xl bg-white p-4 shadow-sm">
        <p className="mb-2 text-sm font-semibold text-gray-800">Förslag på veckoschema</p>
        <div className="flex flex-col divide-y divide-gray-50">
          {weekSchedule.map(({ day, dayId }) => (
            <div key={day} className="flex items-center justify-between py-1.5 text-sm">
              <span className="text-gray-500">{day}</span>
              <span className={dayId ? 'font-medium text-emerald-700' : 'text-gray-400'}>
                {dayId ? `Pass ${dayId}` : 'Vila'}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-4">
        {programDays.map((day) => (
          <div key={day.id} className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-gray-900">{day.label}</h2>
                <p className="text-sm text-gray-500">{day.focus}</p>
              </div>
              <button
                onClick={() => onStartDay(day.id)}
                className="flex cursor-pointer items-center gap-1.5 rounded-full border-none px-4 py-2 text-sm font-semibold text-white"
                style={{ backgroundColor: '#059669' }}
              >
                <Play size={14} fill="white" /> Starta
              </button>
            </div>

            <div className="mt-3 flex flex-col gap-1">
              {day.exercises.map((entry) => {
                const ex = exerciseById(entry.exerciseId)
                if (!ex) return null
                return (
                  <button
                    key={entry.exerciseId}
                    onClick={() => setSelectedExerciseId(entry.exerciseId)}
                    className="flex cursor-pointer items-center justify-between rounded-lg border-none bg-transparent py-2 text-left"
                  >
                    <span className="text-sm text-gray-700">{ex.name}</span>
                    <span className="flex items-center gap-1 text-xs text-gray-400">
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

      <div className="mt-6 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4 text-sm text-gray-600">
        <p className="font-semibold text-gray-800">Så trappar du upp</p>
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
