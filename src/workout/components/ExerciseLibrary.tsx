import { useState } from 'react'
import { exercises } from '../data/exercises'
import { equipmentLabels, type Equipment } from '../types'
import ExerciseDetailModal from './ExerciseDetailModal'
import ExerciseIllustration from '../illustrations/ExerciseIllustration'

const filters: { id: Equipment | 'all'; label: string }[] = [
  { id: 'all', label: 'Alla' },
  { id: 'bodyweight', label: equipmentLabels.bodyweight },
  { id: 'dumbbells', label: equipmentLabels.dumbbells },
  { id: 'mat', label: equipmentLabels.mat },
  { id: 'band', label: equipmentLabels.band },
]

export default function ExerciseLibrary() {
  const [filter, setFilter] = useState<Equipment | 'all'>('all')
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const visible = exercises.filter((e) => filter === 'all' || e.equipment.includes(filter))

  return (
    <div className="mx-auto max-w-md px-5 pb-28 pt-8">
      <h1 className="text-[26px] font-bold text-[color:var(--ink)]">Övningsbibliotek</h1>
      <p className="mt-1.5 text-sm text-[color:var(--body)]">Bläddra bland alla övningar och läs hur du gör dem rätt.</p>

      <div className="mt-5 flex gap-2 overflow-x-auto pb-1">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className="cursor-pointer whitespace-nowrap rounded-full border-none px-4 py-1.5 text-sm font-medium transition-colors"
            style={
              filter === f.id
                ? { backgroundColor: 'var(--ink)', color: 'white' }
                : { backgroundColor: 'var(--card)', color: 'var(--body)', boxShadow: 'var(--shadow-sm)' }
            }
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-4 flex flex-col gap-2.5">
        {visible.map((ex) => (
          <button
            key={ex.id}
            onClick={() => setSelectedId(ex.id)}
            className="flex cursor-pointer items-center gap-3.5 rounded-[22px] border-none bg-[color:var(--card)] p-3 text-left"
            style={{ boxShadow: 'var(--shadow-sm)' }}
          >
            <ExerciseIllustration exerciseId={ex.id} size={64} />
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline justify-between gap-2">
                <span className="truncate font-semibold text-[color:var(--ink)]">{ex.name}</span>
              </div>
              <p className="mt-0.5 truncate text-xs text-[color:var(--muted)]">{ex.muscleGroup}</p>
              <div className="mt-1.5 flex gap-1.5">
                {ex.equipment.map((eq) => (
                  <span
                    key={eq}
                    className="rounded-full px-2 py-0.5 text-[10px] font-semibold"
                    style={{ backgroundColor: 'var(--accent-light)', color: 'var(--accent-dark)' }}
                  >
                    {equipmentLabels[eq]}
                  </span>
                ))}
              </div>
            </div>
          </button>
        ))}
      </div>

      {selectedId && <ExerciseDetailModal exerciseId={selectedId} onClose={() => setSelectedId(null)} />}
    </div>
  )
}
