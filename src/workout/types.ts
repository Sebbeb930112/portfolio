export type Equipment = 'bodyweight' | 'dumbbells' | 'mat' | 'band'

export const equipmentLabels: Record<Equipment, string> = {
  bodyweight: 'Kroppsvikt',
  dumbbells: 'Hantlar',
  mat: 'Matta',
  band: 'Gummiband',
}

export interface Exercise {
  id: string
  name: string
  equipment: Equipment[]
  muscleGroup: string
  description: string
  instructions: string[]
  tips: string[]
  type: 'reps' | 'time'
}

export interface ProgramExerciseEntry {
  exerciseId: string
  sets: number
  reps?: number
  perSide?: boolean
  durationSeconds?: number
  restSeconds: number
}

export interface ProgramDay {
  id: string
  label: string
  focus: string
  warmup: { exerciseId: string; durationSeconds: number }[]
  exercises: ProgramExerciseEntry[]
  cooldown: { exerciseId: string; durationSeconds: number; perSide?: boolean }[]
}

export interface CompletedSession {
  date: string
  dayId: string
}
