import { Home, Dumbbell, CalendarDays, TrendingUp } from 'lucide-react'
import type { WorkoutTab } from '../WorkoutApp'

interface Props {
  active: WorkoutTab
  onChange: (tab: WorkoutTab) => void
}

const tabs: { id: WorkoutTab; label: string; icon: typeof Home }[] = [
  { id: 'home', label: 'Hem', icon: Home },
  { id: 'program', label: 'Program', icon: CalendarDays },
  { id: 'library', label: 'Övningar', icon: Dumbbell },
  { id: 'progress', label: 'Framsteg', icon: TrendingUp },
]

export default function BottomNav({ active, onChange }: Props) {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 border-t"
      style={{
        backgroundColor: 'rgba(255,255,255,0.9)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderColor: 'var(--border)',
        paddingBottom: 'env(safe-area-inset-bottom)',
      }}
    >
      <div className="mx-auto flex max-w-md items-stretch justify-around px-2 py-1.5">
        {tabs.map(({ id, label, icon: Icon }) => {
          const isActive = active === id
          return (
            <button
              key={id}
              onClick={() => onChange(id)}
              className="flex flex-1 cursor-pointer flex-col items-center gap-1 rounded-2xl border-none bg-transparent py-2 transition-colors"
              style={isActive ? { backgroundColor: 'var(--accent-light)' } : undefined}
            >
              <Icon size={20} strokeWidth={isActive ? 2.4 : 2} color={isActive ? 'var(--accent-dark)' : 'var(--muted)'} />
              <span
                className="text-[10.5px] font-semibold"
                style={{ color: isActive ? 'var(--accent-dark)' : 'var(--muted)' }}
              >
                {label}
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
