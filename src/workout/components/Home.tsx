import type { ReactNode } from 'react'
import { Flame, Play, Dumbbell, Square, Waves } from 'lucide-react'
import { programDayById, weekSchedule } from '../data/programDays'
import type { CompletedSession } from '../types'

interface Props {
  history: CompletedSession[]
  onStartDay: (dayId: string) => void
  onGoToProgram: () => void
}

function getStreak(history: CompletedSession[]): number {
  if (history.length === 0) return 0
  const dates = [...new Set(history.map((h) => h.date.slice(0, 10)))].sort().reverse()
  let streak = 0
  const cursor = new Date()
  for (let i = 0; i < dates.length; i++) {
    const expected = new Date(cursor)
    expected.setDate(expected.getDate() - i)
    const expectedStr = expected.toISOString().slice(0, 10)
    if (dates.includes(expectedStr)) {
      streak++
    } else if (i === 0) {
      continue
    } else {
      break
    }
  }
  return streak
}

export default function Home({ history, onStartDay, onGoToProgram }: Props) {
  const todayIndex = (new Date().getDay() + 6) % 7
  const todaysPlan = weekSchedule[todayIndex]
  const suggestedDay = todaysPlan.dayId ? programDayById(todaysPlan.dayId) : null
  const streak = getStreak(history)
  const totalSessions = history.length

  return (
    <div className="mx-auto max-w-md px-5 pb-28 pt-8">
      <p className="eyebrow" style={{ color: 'var(--accent)' }}>
        Hej 👋
      </p>
      <h1 className="mt-1.5 text-[28px] font-extrabold text-[color:var(--ink)]">Träna Hemma</h1>
      <p className="mt-2 text-sm leading-relaxed text-[color:var(--body)]">
        Enkla pass för hemmet med hantlar, matta och gummiband. Ingen erfarenhet krävs – bara följ steg för steg.
      </p>

      <div className="mt-6 flex gap-3">
        <div
          className="flex flex-1 items-center gap-3 rounded-[20px] bg-[color:var(--card)] p-4"
          style={{ boxShadow: 'var(--shadow-sm)' }}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full" style={{ backgroundColor: 'var(--amber-light)' }}>
            <Flame size={19} color="var(--amber)" />
          </div>
          <div>
            <p className="text-lg font-bold leading-none text-[color:var(--ink)]">{streak}</p>
            <p className="text-xs text-[color:var(--muted)]">dagar i rad</p>
          </div>
        </div>
        <div
          className="flex flex-1 items-center gap-3 rounded-[20px] bg-[color:var(--card)] p-4"
          style={{ boxShadow: 'var(--shadow-sm)' }}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full" style={{ backgroundColor: 'var(--accent-light)' }}>
            <Dumbbell size={19} color="var(--accent-dark)" />
          </div>
          <div>
            <p className="text-lg font-bold leading-none text-[color:var(--ink)]">{totalSessions}</p>
            <p className="text-xs text-[color:var(--muted)]">pass totalt</p>
          </div>
        </div>
      </div>

      <div
        className="mt-6 rounded-[28px] p-6 text-white"
        style={{
          background: 'linear-gradient(155deg, var(--accent-strong), var(--accent-dark))',
          boxShadow: 'var(--shadow-md)',
        }}
      >
        <p className="eyebrow" style={{ color: 'rgba(255,255,255,0.75)' }}>
          Dagens förslag
        </p>
        {suggestedDay ? (
          <>
            <h2 className="mt-1.5 text-xl font-bold">
              {suggestedDay.label} – {suggestedDay.focus}
            </h2>
            <p className="mt-2 text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>
              {suggestedDay.exercises.length} övningar · ca {estimateMinutes(suggestedDay.exercises.length)} min
            </p>
            <button
              onClick={() => onStartDay(suggestedDay.id)}
              className="mt-5 flex cursor-pointer items-center gap-2 rounded-full border-none bg-white px-5 py-2.5 text-sm font-semibold"
              style={{ color: 'var(--accent-dark)' }}
            >
              <Play size={16} fill="var(--accent-dark)" /> Starta dagens pass
            </button>
          </>
        ) : (
          <>
            <h2 className="mt-1.5 text-xl font-bold">Vilodag</h2>
            <p className="mt-2 text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>
              Ingen ordinarie träning idag – vila, promenera eller stretcha lite om du vill.
            </p>
            <button
              onClick={onGoToProgram}
              className="mt-5 flex cursor-pointer items-center gap-2 rounded-full border-none bg-white px-5 py-2.5 text-sm font-semibold"
              style={{ color: 'var(--accent-dark)' }}
            >
              Se veckoschemat
            </button>
          </>
        )}
      </div>

      <div className="mt-7">
        <h3 className="mb-3 text-sm font-bold text-[color:var(--ink)]">Det här behöver du</h3>
        <div className="grid grid-cols-3 gap-3">
          <EquipmentCard icon={<Dumbbell size={19} color="var(--accent-dark)" />} label="Hantlar" />
          <EquipmentCard icon={<Square size={19} color="var(--accent-dark)" />} label="Träningsmatta" />
          <EquipmentCard icon={<Waves size={19} color="var(--accent-dark)" />} label="Gummiband" />
        </div>
      </div>

      <div className="mt-6 rounded-[22px] p-4" style={{ backgroundColor: 'var(--accent-light)' }}>
        <p className="text-sm font-bold text-[color:var(--ink)]">Bra att veta innan du börjar</p>
        <ul className="mt-2.5 space-y-1.5 text-sm text-[color:var(--body)]">
          <li>• Värm alltid upp någon minut innan passet.</li>
          <li>• Prioritera bra teknik framför fler repetitioner.</li>
          <li>• Vila en dag mellan passen så kroppen hinner återhämta sig.</li>
          <li>• Kändes något ovant eller smärtsamt – hoppa över det och fortsätt med nästa övning.</li>
        </ul>
      </div>
    </div>
  )
}

function estimateMinutes(exerciseCount: number) {
  return Math.round(exerciseCount * 4.5)
}

function EquipmentCard({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <div
      className="flex flex-col items-center gap-2 rounded-[20px] bg-[color:var(--card)] p-3 text-center"
      style={{ boxShadow: 'var(--shadow-sm)' }}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full" style={{ backgroundColor: 'var(--accent-light)' }}>
        {icon}
      </div>
      <span className="text-xs font-medium text-[color:var(--body)]">{label}</span>
    </div>
  )
}
