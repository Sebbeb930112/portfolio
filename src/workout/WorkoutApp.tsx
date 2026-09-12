import { useEffect, useState } from 'react'
import './workout.css'
import BottomNav from './components/BottomNav'
import Home from './components/Home'
import ExerciseLibrary from './components/ExerciseLibrary'
import Program from './components/Program'
import Progress from './components/Progress'
import Session from './components/Session'
import { useLocalStorage } from './hooks/useLocalStorage'
import type { CompletedSession } from './types'

export type WorkoutTab = 'home' | 'program' | 'library' | 'progress'

export default function WorkoutApp() {
  const [tab, setTab] = useState<WorkoutTab>('home')
  const [activeSessionDayId, setActiveSessionDayId] = useState<string | null>(null)
  const [history, setHistory] = useLocalStorage<CompletedSession[]>('trana-hemma-history', [])

  useEffect(() => {
    document.title = 'Träna Hemma'
  }, [])

  const handleCompleteSession = (dayId: string) => {
    setHistory((prev) => [...prev, { date: new Date().toISOString(), dayId }])
  }

  if (activeSessionDayId) {
    return (
      <div className="workout">
        <Session
          dayId={activeSessionDayId}
          onExit={() => setActiveSessionDayId(null)}
          onComplete={handleCompleteSession}
        />
      </div>
    )
  }

  return (
    <div className="workout">
      {tab === 'home' && (
        <Home history={history} onStartDay={setActiveSessionDayId} onGoToProgram={() => setTab('program')} />
      )}
      {tab === 'program' && <Program onStartDay={setActiveSessionDayId} />}
      {tab === 'library' && <ExerciseLibrary />}
      {tab === 'progress' && <Progress history={history} onClear={() => setHistory([])} />}

      <BottomNav active={tab} onChange={setTab} />
    </div>
  )
}
