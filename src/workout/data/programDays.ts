import type { ProgramDay } from '../types'

export const programDays: ProgramDay[] = [
  {
    id: 'A',
    label: 'Pass A',
    focus: 'Underkropp & rumpa',
    warmup: [{ exerciseId: 'highknees', durationSeconds: 60 }],
    exercises: [
      { exerciseId: 'squat', sets: 3, reps: 12, restSeconds: 45 },
      { exerciseId: 'lunge', sets: 3, reps: 10, perSide: true, restSeconds: 45 },
      { exerciseId: 'glutebridge', sets: 3, reps: 15, restSeconds: 30 },
      { exerciseId: 'plank', sets: 3, durationSeconds: 25, restSeconds: 30 },
    ],
    cooldown: [
      { exerciseId: 'hipflexorstretch', durationSeconds: 30, perSide: true },
      { exerciseId: 'hamstringstretch', durationSeconds: 30, perSide: true },
    ],
  },
  {
    id: 'B',
    label: 'Pass B',
    focus: 'Överkropp – hantlar & band',
    warmup: [{ exerciseId: 'bandpullapart', durationSeconds: 45 }],
    exercises: [
      { exerciseId: 'shoulderpress', sets: 3, reps: 10, restSeconds: 45 },
      { exerciseId: 'onearmrow', sets: 3, reps: 12, perSide: true, restSeconds: 45 },
      { exerciseId: 'bicepcurl', sets: 3, reps: 12, restSeconds: 30 },
      { exerciseId: 'tricepext', sets: 3, reps: 12, restSeconds: 30 },
      { exerciseId: 'pushup', sets: 3, reps: 8, restSeconds: 45 },
    ],
    cooldown: [{ exerciseId: 'hipflexorstretch', durationSeconds: 30, perSide: true }],
  },
  {
    id: 'C',
    label: 'Pass C',
    focus: 'Core, höft & rörlighet',
    warmup: [{ exerciseId: 'catcow', durationSeconds: 60 }],
    exercises: [
      { exerciseId: 'situp', sets: 3, reps: 15, restSeconds: 30 },
      { exerciseId: 'sideplank', sets: 3, durationSeconds: 20, perSide: true, restSeconds: 30 },
      { exerciseId: 'lateralbandwalk', sets: 3, reps: 10, perSide: true, restSeconds: 30 },
      { exerciseId: 'bandlegextension', sets: 3, reps: 12, perSide: true, restSeconds: 30 },
      { exerciseId: 'superman', sets: 3, reps: 12, restSeconds: 30 },
    ],
    cooldown: [
      { exerciseId: 'hamstringstretch', durationSeconds: 30, perSide: true },
      { exerciseId: 'hipflexorstretch', durationSeconds: 30, perSide: true },
    ],
  },
]

export const programDayById = (id: string): ProgramDay | undefined => programDays.find((d) => d.id === id)

export const weekSchedule = [
  { day: 'Måndag', dayId: 'A' },
  { day: 'Tisdag', dayId: null },
  { day: 'Onsdag', dayId: 'B' },
  { day: 'Torsdag', dayId: null },
  { day: 'Fredag', dayId: 'C' },
  { day: 'Lördag', dayId: null },
  { day: 'Söndag', dayId: null },
] as const
