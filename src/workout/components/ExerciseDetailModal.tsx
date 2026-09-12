import { X } from 'lucide-react'
import { exerciseById } from '../data/exercises'
import { equipmentLabels } from '../types'

interface Props {
  exerciseId: string
  onClose: () => void
}

export default function ExerciseDetailModal({ exerciseId, onClose }: Props) {
  const exercise = exerciseById(exerciseId)
  if (!exercise) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 sm:items-center" onClick={onClose}>
      <div
        className="max-h-[85vh] w-full max-w-md overflow-y-auto rounded-t-3xl bg-white p-6 sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-900">{exercise.name}</h2>
            <p className="mt-1 text-sm font-medium text-emerald-600">{exercise.muscleGroup}</p>
          </div>
          <button onClick={onClose} className="cursor-pointer rounded-full border-none bg-gray-100 p-2">
            <X size={18} color="#4b5563" />
          </button>
        </div>

        <div className="mt-3 flex gap-1.5">
          {exercise.equipment.map((eq) => (
            <span key={eq} className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
              {equipmentLabels[eq]}
            </span>
          ))}
        </div>

        <p className="mt-4 text-sm text-gray-600">{exercise.description}</p>

        <h3 className="mt-5 text-sm font-semibold text-gray-800">Så gör du</h3>
        <ol className="mt-2 space-y-2">
          {exercise.instructions.map((step, i) => (
            <li key={i} className="flex gap-3 text-sm text-gray-600">
              <span
                className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white"
                style={{ backgroundColor: '#059669' }}
              >
                {i + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>

        {exercise.tips.length > 0 && (
          <>
            <h3 className="mt-5 text-sm font-semibold text-gray-800">Tips</h3>
            <ul className="mt-2 space-y-1.5">
              {exercise.tips.map((tip, i) => (
                <li key={i} className="text-sm text-gray-500">
                  • {tip}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  )
}
