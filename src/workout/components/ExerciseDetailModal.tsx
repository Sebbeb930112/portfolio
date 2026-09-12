import { X } from 'lucide-react'
import { exerciseById } from '../data/exercises'
import { equipmentLabels } from '../types'
import ExerciseIllustration from '../illustrations/ExerciseIllustration'

interface Props {
  exerciseId: string
  onClose: () => void
}

export default function ExerciseDetailModal({ exerciseId, onClose }: Props) {
  const exercise = exerciseById(exerciseId)
  if (!exercise) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/45 backdrop-blur-[2px] sm:items-center" onClick={onClose}>
      <div
        className="max-h-[88vh] w-full max-w-md overflow-y-auto rounded-t-[32px] bg-[color:var(--card)] p-6 sm:rounded-[32px]"
        style={{ boxShadow: 'var(--shadow-md)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <ExerciseIllustration exerciseId={exercise.id} size={72} />
            <div>
              <h2 className="text-xl font-bold text-[color:var(--ink)]">{exercise.name}</h2>
              <p className="mt-0.5 text-sm font-medium" style={{ color: 'var(--accent)' }}>
                {exercise.muscleGroup}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="cursor-pointer rounded-full border-none p-2"
            style={{ backgroundColor: 'var(--bg)' }}
          >
            <X size={18} color="var(--body)" />
          </button>
        </div>

        <div className="mt-4 flex gap-1.5">
          {exercise.equipment.map((eq) => (
            <span
              key={eq}
              className="rounded-full px-2.5 py-1 text-xs font-semibold"
              style={{ backgroundColor: 'var(--accent-light)', color: 'var(--accent-dark)' }}
            >
              {equipmentLabels[eq]}
            </span>
          ))}
        </div>

        <p className="mt-4 text-sm leading-relaxed text-[color:var(--body)]">{exercise.description}</p>

        <h3 className="mt-5 text-sm font-bold text-[color:var(--ink)]">Så gör du</h3>
        <ol className="mt-2.5 space-y-2.5">
          {exercise.instructions.map((step, i) => (
            <li key={i} className="flex gap-3 text-sm text-[color:var(--body)]">
              <span
                className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white"
                style={{ backgroundColor: 'var(--accent)' }}
              >
                {i + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>

        {exercise.tips.length > 0 && (
          <>
            <h3 className="mt-5 text-sm font-bold text-[color:var(--ink)]">Tips</h3>
            <ul className="mt-2.5 space-y-1.5">
              {exercise.tips.map((tip, i) => (
                <li key={i} className="text-sm text-[color:var(--muted)]">
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
