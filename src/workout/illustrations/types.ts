export type Pt = [number, number]

export type Prop =
  | 'mat'
  | 'chair'
  | 'dumbbell-hand'
  | 'dumbbell-hand2'
  | 'band-hand-foot'
  | 'band-floor'
  | 'band-anchor'
  | 'band-knee'

export interface Pose {
  head: Pt
  neck: Pt
  hip: Pt
  shoulder: Pt
  elbow: Pt
  hand: Pt
  knee: Pt
  foot: Pt
  knee2?: Pt
  foot2?: Pt
  elbow2?: Pt
  hand2?: Pt
  props?: Prop[]
  mirrored?: boolean
}
