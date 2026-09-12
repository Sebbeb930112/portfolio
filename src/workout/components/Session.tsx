import { useEffect, useMemo, useRef, useState } from 'react'
import { ArrowLeft, Check, SkipForward, PartyPopper } from 'lucide-react'
import { programDayById } from '../data/programDays'
import { exerciseById } from '../data/exercises'
import type { Exercise, ProgramExerciseEntry } from '../types'

interface Props {
  dayId: string
  onExit: () => void
  onComplete: (dayId: string) => void
}

type Step =
  | { kind: 'warmup'; exercise: Exercise; durationSeconds: number }
  | { kind: 'exercise'; exercise: Exercise; entry: ProgramExerciseEntry; setNumber: number; totalSets: number }
  | { kind: 'rest'; seconds: number }
  | { kind: 'cooldown'; exercise: Exercise; durationSeconds: number; perSide?: boolean }
  | { kind: 'done' }

function buildSteps(dayId: string): Step[] {
  const day = programDayById(dayId)
  if (!day) return [{ kind: 'done' }]
  const steps: Step[] = []

  for (const w of day.warmup) {
    const exercise = exerciseById(w.exerciseId)
    if (exercise) steps.push({ kind: 'warmup', exercise, durationSeconds: w.durationSeconds })
  }

  for (const entry of day.exercises) {
    const exercise = exerciseById(entry.exerciseId)
    if (!exercise) continue
    for (let s = 1; s <= entry.sets; s++) {
      steps.push({ kind: 'exercise', exercise, entry, setNumber: s, totalSets: entry.sets })
      if (s < entry.sets) steps.push({ kind: 'rest', seconds: entry.restSeconds })
    }
  }

  for (const c of day.cooldown) {
    const exercise = exerciseById(c.exerciseId)
    if (exercise) steps.push({ kind: 'cooldown', exercise, durationSeconds: c.durationSeconds, perSide: c.perSide })
  }

  steps.push({ kind: 'done' })
  return steps
}

export default function Session({ dayId, onExit, onComplete }: Props) {
  const day = programDayById(dayId)
  const steps = useMemo(() => buildSteps(dayId), [dayId])
  const [index, setIndex] = useState(0)

  const step = steps[index]
  const goNext = () => setIndex((i) => Math.min(i + 1, steps.length - 1))
  const loggedRef = useRef(false)

  useEffect(() => {
    if (step.kind === 'done' && !loggedRef.current) {
      loggedRef.current = true
      onComplete(dayId)
    }
  }, [step, onComplete, dayId])

  if (!day) return null

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col px-5 pb-10 pt-6">
      <div className="flex items-center gap-3">
        <button onClick={onExit} className="cursor-pointer rounded-full border-none bg-white p-2 shadow-sm">
          <ArrowLeft size={18} color="#374151" />
        </button>
        <div className="flex-1">
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-200">
            <div
              className="h-full rounded-full transition-all duration-300"
              style={{ width: `${(index / (steps.length - 1)) * 100}%`, backgroundColor: '#059669' }}
            />
          </div>
        </div>
      </div>

      <div className="mt-2 text-center text-xs font-medium text-gray-400">
        {day.label} · {day.focus}
      </div>

      <div className="mt-6 flex flex-1 flex-col">
        {step.kind === 'warmup' && (
          <TimedStep
            title="Uppvärmning"
            exercise={step.exercise}
            seconds={step.durationSeconds}
            accentLabel="Uppvärmning"
            onDone={goNext}
          />
        )}
        {step.kind === 'cooldown' && (
          <TimedStep
            title="Nedvarvning"
            exercise={step.exercise}
            seconds={step.durationSeconds}
            accentLabel={step.perSide ? 'Nedvarvning · per sida' : 'Nedvarvning'}
            onDone={goNext}
          />
        )}
        {step.kind === 'rest' && <RestStep seconds={step.seconds} onDone={goNext} />}
        {step.kind === 'exercise' && <ExerciseStep step={step} onDone={goNext} />}
        {step.kind === 'done' && <DoneStep dayLabel={day.label} onFinish={onExit} />}
      </div>
    </div>
  )
}

function useCountdown(seconds: number, onDone: () => void) {
  const [prevSeconds, setPrevSeconds] = useState(seconds)
  const [remaining, setRemaining] = useState(seconds)

  if (seconds !== prevSeconds) {
    setPrevSeconds(seconds)
    setRemaining(seconds)
  }

  useEffect(() => {
    if (remaining <= 0) {
      onDone()
      return
    }
    const t = setTimeout(() => setRemaining((r) => r - 1), 1000)
    return () => clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [remaining])

  return remaining
}

function TimedStep({
  title,
  exercise,
  seconds,
  accentLabel,
  onDone,
}: {
  title: string
  exercise: Exercise
  seconds: number
  accentLabel: string
  onDone: () => void
}) {
  const remaining = useCountdown(seconds, onDone)

  return (
    <div className="flex flex-1 flex-col items-center justify-center text-center">
      <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600">{accentLabel}</p>
      <h2 className="mt-2 text-2xl font-bold text-gray-900">{exercise.name}</h2>
      <p className="mt-6 text-6xl font-bold" style={{ color: '#059669' }}>
        {remaining}
      </p>
      <p className="mt-1 text-sm text-gray-400">sekunder kvar</p>
      <p className="mt-6 max-w-xs text-sm text-gray-500">{exercise.instructions[0]}</p>
      <button
        onClick={onDone}
        className="mt-8 flex cursor-pointer items-center gap-2 rounded-full border-none bg-gray-100 px-5 py-2.5 text-sm font-medium text-gray-600"
      >
        <SkipForward size={16} /> Hoppa vidare
      </button>
      <p className="mt-3 text-[11px] uppercase tracking-wide text-gray-300">{title}</p>
    </div>
  )
}

function RestStep({ seconds, onDone }: { seconds: number; onDone: () => void }) {
  const remaining = useCountdown(seconds, onDone)

  return (
    <div className="flex flex-1 flex-col items-center justify-center text-center">
      <p className="text-xs font-semibold uppercase tracking-wide text-amber-600">Vila</p>
      <p className="mt-6 text-6xl font-bold text-amber-500">{remaining}</p>
      <p className="mt-1 text-sm text-gray-400">sekunder</p>
      <p className="mt-6 text-sm text-gray-500">Andas lugnt och skaka ut musklerna.</p>
      <button
        onClick={onDone}
        className="mt-8 flex cursor-pointer items-center gap-2 rounded-full border-none bg-gray-100 px-5 py-2.5 text-sm font-medium text-gray-600"
      >
        <SkipForward size={16} /> Hoppa över vilan
      </button>
    </div>
  )
}

function ExerciseStep({
  step,
  onDone,
}: {
  step: Extract<Step, { kind: 'exercise' }>
  onDone: () => void
}) {
  const { exercise, entry, setNumber, totalSets } = step
  const target = entry.durationSeconds
    ? `${entry.durationSeconds} sek${entry.perSide ? ' / sida' : ''}`
    : `${entry.reps} reps${entry.perSide ? ' / sida' : ''}`

  return (
    <div className="flex flex-1 flex-col">
      <p className="text-center text-xs font-semibold uppercase tracking-wide text-emerald-600">
        Set {setNumber} av {totalSets}
      </p>
      <h2 className="mt-2 text-center text-2xl font-bold text-gray-900">{exercise.name}</h2>
      <p className="mt-2 text-center text-lg font-semibold" style={{ color: '#059669' }}>
        {target}
      </p>

      <div className="mt-6 rounded-2xl bg-white p-5 shadow-sm">
        <p className="text-sm font-semibold text-gray-800">Så gör du</p>
        <ol className="mt-2 space-y-2">
          {exercise.instructions.map((s, i) => (
            <li key={i} className="flex gap-2.5 text-sm text-gray-600">
              <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-[11px] font-bold text-emerald-700">
                {i + 1}
              </span>
              {s}
            </li>
          ))}
        </ol>
        {exercise.tips.length > 0 && (
          <p className="mt-3 text-xs text-gray-400">💡 {exercise.tips[0]}</p>
        )}
      </div>

      <button
        onClick={onDone}
        className="mt-auto flex cursor-pointer items-center justify-center gap-2 rounded-full border-none py-3.5 text-base font-semibold text-white"
        style={{ backgroundColor: '#059669', marginTop: '2rem' }}
      >
        <Check size={18} /> Set klart
      </button>
    </div>
  )
}

function DoneStep({ dayLabel, onFinish }: { dayLabel: string; onFinish: () => void }) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
        <PartyPopper size={30} color="#059669" />
      </div>
      <h2 className="mt-4 text-2xl font-bold text-gray-900">Bra jobbat!</h2>
      <p className="mt-2 text-sm text-gray-500">Du klarade {dayLabel}. Ta en stund att sträcka på dig och drick vatten.</p>
      <button
        onClick={onFinish}
        className="mt-8 cursor-pointer rounded-full border-none px-6 py-3 text-sm font-semibold text-white"
        style={{ backgroundColor: '#059669' }}
      >
        Klart
      </button>
    </div>
  )
}
