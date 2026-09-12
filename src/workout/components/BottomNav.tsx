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
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-black/5 bg-white/95 backdrop-blur-sm"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="mx-auto flex max-w-md items-stretch justify-around">
        {tabs.map(({ id, label, icon: Icon }) => {
          const isActive = active === id
          return (
            <button
              key={id}
              onClick={() => onChange(id)}
              className="flex flex-1 cursor-pointer flex-col items-center gap-1 border-none bg-transparent py-2.5"
            >
              <Icon size={22} strokeWidth={isActive ? 2.5 : 2} color={isActive ? '#059669' : '#9ca3af'} />
              <span
                className="text-[11px] font-medium"
                style={{ color: isActive ? '#059669' : '#9ca3af' }}
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
