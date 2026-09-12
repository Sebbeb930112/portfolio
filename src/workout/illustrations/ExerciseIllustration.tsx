import { poseFor } from './poses'
import type { Pt } from './types'

const INK = '#20242b'
const ACCENT = '#0f6b4f'
const MAT = '#dbe8e1'
const FLOOR = '#e7e5df'

function Limb({ points }: { points: Pt[] }) {
  const d = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p[0]} ${p[1]}`).join(' ')
  return <path d={d} stroke={INK} strokeWidth={5.5} strokeLinecap="round" strokeLinejoin="round" fill="none" />
}

function Joint({ at }: { at: Pt }) {
  return <circle cx={at[0]} cy={at[1]} r={2.4} fill="white" stroke={INK} strokeWidth={1.6} />
}

function Dumbbell({ at }: { at: Pt }) {
  const [x, y] = at
  return (
    <g>
      <rect x={x - 7.5} y={y - 2} width={15} height={4} rx={2} fill={ACCENT} />
      <rect x={x - 10} y={y - 4.5} width={4.5} height={9} rx={1.6} fill={ACCENT} />
      <rect x={x + 5.5} y={y - 4.5} width={4.5} height={9} rx={1.6} fill={ACCENT} />
    </g>
  )
}

interface Props {
  exerciseId: string
  size?: number
  className?: string
  background?: boolean
}

export default function ExerciseIllustration({ exerciseId, size = 120, className, background = true }: Props) {
  const pose = poseFor(exerciseId)
  const { head, neck, hip, shoulder, elbow, hand, knee, foot, knee2, foot2, elbow2, hand2, props = [], mirrored } = pose
  const hasMat = props.includes('mat')
  const hasChair = props.includes('chair')

  return (
    <div
      className={className}
      style={{
        width: size,
        height: size,
        borderRadius: size * 0.28,
        backgroundColor: background ? '#f1f5f2' : 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      <svg
        viewBox="0 0 100 100"
        width="82%"
        height="82%"
        style={mirrored ? { transform: 'scaleX(-1)' } : undefined}
      >
        {hasMat ? (
          <rect x={4} y={92} width={92} height={5} rx={2.5} fill={MAT} />
        ) : (
          <line x1={4} y1={94} x2={96} y2={94} stroke={FLOOR} strokeWidth={3} strokeLinecap="round" />
        )}

        {hasChair && (
          <>
            <rect x={hip[0] - 14} y={hip[1] + 4} width={28} height={4} rx={2} fill="#c9cfc9" />
            <line x1={hip[0] - 10} y1={hip[1] + 8} x2={hip[0] - 10} y2={92} stroke="#c9cfc9" strokeWidth={4} strokeLinecap="round" />
          </>
        )}

        {props.includes('band-hand-foot') && (
          <path d={`M ${hand[0]} ${hand[1]} L ${foot[0]} ${foot[1]}`} stroke={ACCENT} strokeWidth={2.2} strokeDasharray="3 4" fill="none" strokeLinecap="round" />
        )}
        {props.includes('band-floor') && (
          <path d={`M ${foot[0]} ${foot[1]} L ${foot[0]} 94`} stroke={ACCENT} strokeWidth={2.2} strokeDasharray="3 4" fill="none" strokeLinecap="round" />
        )}
        {props.includes('band-anchor') && (
          <line x1={0} y1={hand[1]} x2={hand[0]} y2={hand[1]} stroke={ACCENT} strokeWidth={2.2} strokeDasharray="3 4" strokeLinecap="round" />
        )}
        {props.includes('band-knee') && (
          <ellipse cx={knee[0]} cy={knee[1]} rx={11} ry={4.5} stroke={ACCENT} strokeWidth={2.2} fill="none" strokeDasharray="2.5 3.5" />
        )}

        {knee2 && foot2 && <Limb points={[hip, knee2, foot2]} />}
        <Limb points={[hip, knee, foot]} />
        <Limb points={[hip, neck]} />
        {elbow2 && hand2 && <Limb points={[shoulder, elbow2, hand2]} />}
        <Limb points={[shoulder, elbow, hand]} />

        {knee2 && foot2 && (
          <>
            <Joint at={knee2} />
            <Joint at={foot2} />
          </>
        )}
        <Joint at={hip} />
        <Joint at={knee} />
        <Joint at={foot} />
        <Joint at={shoulder} />
        <Joint at={elbow} />
        {elbow2 && hand2 && (
          <>
            <Joint at={elbow2} />
          </>
        )}
        <Joint at={hand} />

        <circle cx={head[0]} cy={head[1]} r={7.2} fill={INK} />

        {props.includes('dumbbell-hand') && <Dumbbell at={hand} />}
        {props.includes('dumbbell-hand2') && hand2 && <Dumbbell at={hand2} />}
      </svg>
    </div>
  )
}
