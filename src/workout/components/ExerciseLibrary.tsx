import { useState } from 'react'
import { exercises } from '../data/exercises'
import { equipmentLabels, type Equipment } from '../types'
import ExerciseDetailModal from './ExerciseDetailModal'

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
      <h1 className="text-2xl font-bold text-gray-900">Övningsbibliotek</h1>
      <p className="mt-1 text-sm text-gray-500">Bläddra bland alla övningar och läs hur du gör dem rätt.</p>

      <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className="cursor-pointer whitespace-nowrap rounded-full border-none px-4 py-1.5 text-sm font-medium"
            style={
              filter === f.id
                ? { backgroundColor: '#059669', color: 'white' }
                : { backgroundColor: 'white', color: '#6b7280' }
            }
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-4 flex flex-col gap-3">
        {visible.map((ex) => (
          <button
            key={ex.id}
            onClick={() => setSelectedId(ex.id)}
            className="flex cursor-pointer flex-col items-start rounded-2xl border-none bg-white p-4 text-left shadow-sm"
          >
            <div className="flex w-full items-center justify-between">
              <span className="font-semibold text-gray-900">{ex.name}</span>
              <span className="text-xs font-medium text-emerald-600">{ex.muscleGroup}</span>
            </div>
            <p className="mt-1 text-sm text-gray-500">{ex.description}</p>
            <div className="mt-2 flex gap-1.5">
              {ex.equipment.map((eq) => (
                <span key={eq} className="rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-700">
                  {equipmentLabels[eq]}
                </span>
              ))}
            </div>
          </button>
        ))}
      </div>

      {selectedId && <ExerciseDetailModal exerciseId={selectedId} onClose={() => setSelectedId(null)} />}
    </div>
  )
}
