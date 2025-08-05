import type { DiagramNodeProps } from '../types.ts'
import { Shape } from './Shape.tsx'

export function Columns(props: DiagramNodeProps) {
  return <Shape _display='invisible' {...props} />
}
