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
      // idag räknas inte som avbrott om inget pass gjorts än
      continue
    } else {
      break
    }
  }
  return streak
}

export default function Home({ history, onStartDay, onGoToProgram }: Props) {
  const todayIndex = (new Date().getDay() + 6) % 7 // måndag = 0
  const todaysPlan = weekSchedule[todayIndex]
  const suggestedDay = todaysPlan.dayId ? programDayById(todaysPlan.dayId) : null
  const streak = getStreak(history)
  const totalSessions = history.length

  return (
    <div className="mx-auto max-w-md px-5 pb-28 pt-8">
      <p className="text-sm font-medium" style={{ color: '#059669' }}>
        Hej! 👋
      </p>
      <h1 className="mt-1 text-2xl font-bold text-gray-900">Träna Hemma</h1>
      <p className="mt-2 text-sm leading-relaxed text-gray-500">
        Enkla pass för hemmet med hantlar, matta och gummiband. Ingen erfarenhet krävs – bara följ steg för steg.
      </p>

      <div className="mt-6 flex gap-3">
        <div className="flex flex-1 items-center gap-3 rounded-2xl bg-white p-4 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-full" style={{ backgroundColor: '#fef3c7' }}>
            <Flame size={20} color="#d97706" />
          </div>
          <div>
            <p className="text-lg font-bold text-gray-900 leading-none">{streak}</p>
            <p className="text-xs text-gray-500">dagar i rad</p>
          </div>
        </div>
        <div className="flex flex-1 items-center gap-3 rounded-2xl bg-white p-4 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-full" style={{ backgroundColor: '#d1fae5' }}>
            <Dumbbell size={20} color="#059669" />
          </div>
          <div>
            <p className="text-lg font-bold text-gray-900 leading-none">{totalSessions}</p>
            <p className="text-xs text-gray-500">pass totalt</p>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-3xl p-6 text-white shadow-md" style={{ backgroundColor: '#059669' }}>
        <p className="text-xs font-medium uppercase tracking-wide text-emerald-100">Dagens förslag</p>
        {suggestedDay ? (
          <>
            <h2 className="mt-1 text-xl font-bold">{suggestedDay.label} – {suggestedDay.focus}</h2>
            <p className="mt-2 text-sm text-emerald-50">
              {suggestedDay.exercises.length} övningar · ca {estimateMinutes(suggestedDay.exercises.length)} min
            </p>
            <button
              onClick={() => onStartDay(suggestedDay.id)}
              className="mt-4 flex cursor-pointer items-center gap-2 rounded-full border-none bg-white px-5 py-2.5 text-sm font-semibold"
              style={{ color: '#059669' }}
            >
              <Play size={16} fill="#059669" /> Starta dagens pass
            </button>
          </>
        ) : (
          <>
            <h2 className="mt-1 text-xl font-bold">Vilodag</h2>
            <p className="mt-2 text-sm text-emerald-50">
              Ingen ordinarie träning idag – vila, promenera eller stretcha lite om du vill.
            </p>
            <button
              onClick={onGoToProgram}
              className="mt-4 flex cursor-pointer items-center gap-2 rounded-full border-none bg-white px-5 py-2.5 text-sm font-semibold"
              style={{ color: '#059669' }}
            >
              Se veckoschemat
            </button>
          </>
        )}
      </div>

      <div className="mt-6">
        <h3 className="mb-3 text-sm font-semibold text-gray-700">Det här behöver du</h3>
        <div className="grid grid-cols-3 gap-3">
          <EquipmentCard icon={<Dumbbell size={20} color="#059669" />} label="Hantlar" />
          <EquipmentCard icon={<Square size={20} color="#059669" />} label="Träningsmatta" />
          <EquipmentCard icon={<Waves size={20} color="#059669" />} label="Gummiband" />
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4">
        <p className="text-sm font-semibold text-gray-800">Bra att veta innan du börjar</p>
        <ul className="mt-2 space-y-1.5 text-sm text-gray-600">
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
    <div className="flex flex-col items-center gap-2 rounded-2xl bg-white p-3 text-center shadow-sm">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50">{icon}</div>
      <span className="text-xs font-medium text-gray-600">{label}</span>
    </div>
  )
}
