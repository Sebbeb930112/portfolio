import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app/App.tsx'
import WorkoutApp from './workout/WorkoutApp.tsx'

const isWorkoutApp = window.location.pathname.startsWith('/traning')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {isWorkoutApp ? <WorkoutApp /> : <App />}
  </StrictMode>,
)
