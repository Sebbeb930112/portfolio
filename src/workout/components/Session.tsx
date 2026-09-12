import { useEffect, useMemo, useRef, useState } from 'react'
import { ArrowLeft, X, Check, Play, SkipForward, PartyPopper } from 'lucide-react'
import { programDayById } from '../data/programDays'
import { exerciseById } from '../data/exercises'
import ExerciseIllustration from '../illustrations/ExerciseIllustration'
import type { Exercise } from '../types'

interface Props {
  dayId: string
  onExit: () => void
  onComplete: (dayId: string) => void
}

type Phase = 'warmup' | 'main' | 'cooldown'

interface StepBase {
  phase: Phase
  exercise: Exercise
  totalSets?: number
  durationSeconds?: number
  reps?: number
  perSide?: boolean
}

type Step =
  | ({ kind: 'intro' } & StepBase)
  | ({ kind: 'active'; setNumber?: number } & StepBase)
  | { kind: 'rest'; seconds: number; nextExercise: Exercise; nextSetNumber: number; nextTotalSets: number }
  | { kind: 'done' }

function buildSteps(dayId: string): Step[] {
  const day = programDayById(dayId)
  if (!day) return [{ kind: 'done' }]
  const steps: Step[] = []

  for (const w of day.warmup) {
    const exercise = exerciseById(w.exerciseId)
    if (!exercise) continue
    steps.push({ kind: 'intro', phase: 'warmup', exercise, durationSeconds: w.durationSeconds })
    steps.push({ kind: 'active', phase: 'warmup', exercise, durationSeconds: w.durationSeconds })
  }

  for (const entry of day.exercises) {
    const exercise = exerciseById(entry.exerciseId)
    if (!exercise) continue
    steps.push({
      kind: 'intro',
      phase: 'main',
      exercise,
      totalSets: entry.sets,
      durationSeconds: entry.durationSeconds,
      reps: entry.reps,
      perSide: entry.perSide,
    })
    for (let s = 1; s <= entry.sets; s++) {
      steps.push({
        kind: 'active',
        phase: 'main',
        exercise,
        setNumber: s,
        totalSets: entry.sets,
        durationSeconds: entry.durationSeconds,
        reps: entry.reps,
        perSide: entry.perSide,
      })
      if (s < entry.sets) {
        steps.push({
          kind: 'rest',
          seconds: entry.restSeconds,
          nextExercise: exercise,
          nextSetNumber: s + 1,
          nextTotalSets: entry.sets,
        })
      }
    }
  }

  for (const c of day.cooldown) {
    const exercise = exerciseById(c.exerciseId)
    if (!exercise) continue
    steps.push({ kind: 'intro', phase: 'cooldown', exercise, durationSeconds: c.durationSeconds, perSide: c.perSide })
    steps.push({ kind: 'active', phase: 'cooldown', exercise, durationSeconds: c.durationSeconds, perSide: c.perSide })
  }

  steps.push({ kind: 'done' })
  return steps
}

const phaseLabels: Record<Phase, string> = {
  warmup: 'Uppvärmning',
  main: 'Övning',
  cooldown: 'Nedvarvning',
}

export default function Session({ dayId, onExit, onComplete }: Props) {
  const day = programDayById(dayId)
  const steps = useMemo(() => buildSteps(dayId), [dayId])
  const [index, setIndex] = useState(0)
  const [showExitConfirm, setShowExitConfirm] = useState(false)
  const loggedRef = useRef(false)

  const step = steps[index]
  const goNext = () => setIndex((i) => Math.min(i + 1, steps.length - 1))

  useEffect(() => {
    if (step.kind === 'done' && !loggedRef.current) {
      loggedRef.current = true
      onComplete(dayId)
    }
  }, [step, onComplete, dayId])

  if (!day) return null

  const handleExitClick = () => {
    if (step.kind === 'done') {
      onExit()
      return
    }
    setShowExitConfirm(true)
  }

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col px-5 pb-10 pt-6">
      <div className="flex items-center gap-3">
        <button
          onClick={handleExitClick}
          className="cursor-pointer rounded-full border-none bg-[color:var(--card)] p-2"
          style={{ boxShadow: 'var(--shadow-sm)' }}
        >
          {step.kind === 'done' ? <ArrowLeft size={18} color="var(--body)" /> : <X size={18} color="var(--body)" />}
        </button>
        <div className="flex-1">
          <div className="h-1.5 w-full overflow-hidden rounded-full" style={{ backgroundColor: 'var(--border)' }}>
            <div
              className="h-full rounded-full transition-all duration-300"
              style={{ width: `${(index / (steps.length - 1)) * 100}%`, backgroundColor: 'var(--accent)' }}
            />
          </div>
        </div>
      </div>

      <div className="mt-2.5 text-center text-xs font-semibold text-[color:var(--muted)]">
        {day.label} · {day.focus}
      </div>

      <div className="mt-4 flex flex-1 flex-col">
        {step.kind === 'intro' && <IntroStep step={step} onStart={goNext} />}
        {step.kind === 'active' && <ActiveStep step={step} onDone={goNext} />}
        {step.kind === 'rest' && <RestStep step={step} onDone={goNext} />}
        {step.kind === 'done' && <DoneStep dayLabel={day.label} onFinish={onExit} />}
      </div>

      {showExitConfirm && (
        <ExitConfirmModal onCancel={() => setShowExitConfirm(false)} onConfirm={onExit} />
      )}
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

function useStopwatch(resetKey: string) {
  const [key, setKey] = useState(resetKey)
  const [elapsed, setElapsed] = useState(0)

  if (resetKey !== key) {
    setKey(resetKey)
    setElapsed(0)
  }

  useEffect(() => {
    const t = setInterval(() => setElapsed((e) => e + 1), 1000)
    return () => clearInterval(t)
  }, [key])

  return elapsed
}

function formatTime(totalSeconds: number) {
  const m = Math.floor(totalSeconds / 60)
  const s = totalSeconds % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}

function IntroStep({ step, onStart }: { step: Extract<Step, { kind: 'intro' }>; onStart: () => void }) {
  const { phase, exercise, totalSets, durationSeconds, reps, perSide } = step
  const unit = durationSeconds ? `${durationSeconds} sek` : reps ? `${reps} reps` : ''
  const targetLabel = phase === 'main' ? `${totalSets} set × ${unit}${perSide ? ' / sida' : ''}` : `${unit}${perSide ? ' / sida' : ''}`

  return (
    <div className="flex flex-1 flex-col">
      <div className="flex flex-col items-center text-center">
        <span className="eyebrow" style={{ color: 'var(--accent)' }}>
          {phaseLabels[phase]}
        </span>
        <ExerciseIllustration exerciseId={exercise.id} size={168} className="mt-4" />
        <h2 className="mt-4 text-2xl font-bold text-[color:var(--ink)]">{exercise.name}</h2>
        <p className="mt-1 text-base font-semibold" style={{ color: 'var(--accent-dark)' }}>
          {targetLabel}
        </p>
      </div>

      <div className="mt-6 rounded-[22px] bg-[color:var(--card)] p-5" style={{ boxShadow: 'var(--shadow-sm)' }}>
        <p className="text-sm font-bold text-[color:var(--ink)]">Så gör du</p>
        <ol className="mt-2.5 space-y-2.5">
          {exercise.instructions.map((s, i) => (
            <li key={i} className="flex gap-3 text-sm text-[color:var(--body)]">
              <span
                className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white"
                style={{ backgroundColor: 'var(--accent)' }}
              >
                {i + 1}
              </span>
              {s}
            </li>
          ))}
        </ol>
        {exercise.tips[0] && <p className="mt-3 text-xs text-[color:var(--muted)]">💡 {exercise.tips[0]}</p>}
      </div>

      <button
        onClick={onStart}
        className="mt-auto flex cursor-pointer items-center justify-center gap-2 rounded-full border-none py-3.5 text-base font-semibold text-white"
        style={{ backgroundColor: 'var(--accent)', marginTop: '2rem' }}
      >
        <Play size={17} fill="white" /> Starta
      </button>
    </div>
  )
}

function ActiveStep({ step, onDone }: { step: Extract<Step, { kind: 'active' }>; onDone: () => void }) {
  if (step.durationSeconds) return <ActiveTimed step={step} onDone={onDone} />
  return <ActiveReps step={step} onDone={onDone} />
}

function ActiveTimed({ step, onDone }: { step: Extract<Step, { kind: 'active' }>; onDone: () => void }) {
  const remaining = useCountdown(step.durationSeconds ?? 0, onDone)
  const label = step.phase === 'main' ? `Set ${step.setNumber} av ${step.totalSets}` : phaseLabels[step.phase]

  return (
    <div className="flex flex-1 flex-col items-center justify-center text-center">
      <p className="eyebrow" style={{ color: 'var(--accent)' }}>
        {label}
      </p>
      <ExerciseIllustration exerciseId={step.exercise.id} size={96} className="mt-4" />
      <h2 className="mt-3 text-xl font-bold text-[color:var(--ink)]">
        {step.exercise.name}
        {step.perSide ? ' · byt sida vid behov' : ''}
      </h2>
      <p className="mt-6 text-[64px] font-extrabold leading-none" style={{ color: 'var(--accent)' }}>
        {remaining}
      </p>
      <p className="mt-1 text-sm text-[color:var(--muted)]">sekunder kvar</p>
      <button
        onClick={onDone}
        className="mt-8 flex cursor-pointer items-center gap-2 rounded-full border-none px-5 py-2.5 text-sm font-semibold"
        style={{ backgroundColor: 'var(--bg)', color: 'var(--body)' }}
      >
        <SkipForward size={16} /> Hoppa vidare
      </button>
    </div>
  )
}

function ActiveReps({ step, onDone }: { step: Extract<Step, { kind: 'active' }>; onDone: () => void }) {
  const elapsed = useStopwatch(`${step.exercise.id}-${step.setNumber}`)

  return (
    <div className="flex flex-1 flex-col items-center justify-center text-center">
      <p className="eyebrow" style={{ color: 'var(--accent)' }}>
        Set {step.setNumber} av {step.totalSets}
      </p>
      <ExerciseIllustration exerciseId={step.exercise.id} size={96} className="mt-4" />
      <h2 className="mt-3 text-xl font-bold text-[color:var(--ink)]">{step.exercise.name}</h2>
      <p className="mt-2 text-lg font-semibold" style={{ color: 'var(--accent-dark)' }}>
        {step.reps} reps{step.perSide ? ' / sida' : ''}
      </p>
      <p className="mt-6 font-mono text-[42px] font-bold text-[color:var(--ink)]">{formatTime(elapsed)}</p>
      {step.exercise.tips[0] && <p className="mt-3 max-w-xs text-xs text-[color:var(--muted)]">💡 {step.exercise.tips[0]}</p>}
      <button
        onClick={onDone}
        className="mt-8 flex cursor-pointer items-center justify-center gap-2 rounded-full border-none px-8 py-3.5 text-base font-semibold text-white"
        style={{ backgroundColor: 'var(--accent)' }}
      >
        <Check size={18} /> Set klart
      </button>
    </div>
  )
}

function RestStep({ step, onDone }: { step: Extract<Step, { kind: 'rest' }>; onDone: () => void }) {
  const remaining = useCountdown(step.seconds, onDone)

  return (
    <div className="flex flex-1 flex-col items-center justify-center text-center">
      <p className="eyebrow" style={{ color: 'var(--amber)' }}>
        Vila
      </p>
      <p className="mt-6 text-[64px] font-extrabold leading-none" style={{ color: 'var(--amber)' }}>
        {remaining}
      </p>
      <p className="mt-1 text-sm text-[color:var(--muted)]">sekunder</p>
      <p className="mt-6 text-sm text-[color:var(--body)]">Andas lugnt och skaka ut musklerna.</p>

      <div
        className="mt-6 flex items-center gap-3 rounded-2xl bg-[color:var(--card)] px-4 py-3"
        style={{ boxShadow: 'var(--shadow-sm)' }}
      >
        <ExerciseIllustration exerciseId={step.nextExercise.id} size={48} />
        <div className="text-left">
          <p className="text-[11px] font-semibold text-[color:var(--muted)]">Härnäst</p>
          <p className="text-sm font-bold text-[color:var(--ink)]">
            {step.nextExercise.name} · set {step.nextSetNumber} av {step.nextTotalSets}
          </p>
        </div>
      </div>

      <button
        onClick={onDone}
        className="mt-8 flex cursor-pointer items-center gap-2 rounded-full border-none px-5 py-2.5 text-sm font-semibold"
        style={{ backgroundColor: 'var(--bg)', color: 'var(--body)' }}
      >
        <SkipForward size={16} /> Hoppa över vilan
      </button>
    </div>
  )
}

function DoneStep({ dayLabel, onFinish }: { dayLabel: string; onFinish: () => void }) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full" style={{ backgroundColor: 'var(--accent-light)' }}>
        <PartyPopper size={30} color="var(--accent-dark)" />
      </div>
      <h2 className="mt-4 text-2xl font-bold text-[color:var(--ink)]">Bra jobbat!</h2>
      <p className="mt-2 text-sm text-[color:var(--body)]">
        Du klarade {dayLabel}. Ta en stund att sträcka på dig och drick vatten.
      </p>
      <button
        onClick={onFinish}
        className="mt-8 cursor-pointer rounded-full border-none px-6 py-3 text-sm font-semibold text-white"
        style={{ backgroundColor: 'var(--accent)' }}
      >
        Klart
      </button>
    </div>
  )
}

function ExitConfirmModal({ onCancel, onConfirm }: { onCancel: () => void; onConfirm: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 px-6 backdrop-blur-[2px]"
      onClick={onCancel}
    >
      <div
        className="w-full max-w-xs rounded-[24px] bg-[color:var(--card)] p-6 text-center"
        style={{ boxShadow: 'var(--shadow-md)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-lg font-bold text-[color:var(--ink)]">Avsluta passet?</h3>
        <p className="mt-2 text-sm text-[color:var(--body)]">Ditt pass sparas inte i historiken om du avslutar nu.</p>
        <div className="mt-5 flex flex-col gap-2">
          <button
            onClick={onCancel}
            className="cursor-pointer rounded-full border-none py-2.5 text-sm font-semibold text-white"
            style={{ backgroundColor: 'var(--accent)' }}
          >
            Fortsätt träna
          </button>
          <button
            onClick={onConfirm}
            className="cursor-pointer rounded-full border-none bg-transparent py-2.5 text-sm font-semibold"
            style={{ color: 'var(--body)' }}
          >
            Avsluta passet
          </button>
        </div>
      </div>
    </div>
  )
}
