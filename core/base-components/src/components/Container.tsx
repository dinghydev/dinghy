import type { DiagramNodeProps } from '../types.ts'
import { Shape } from './Shape.tsx'

/**
 * Shape component as the base to configure diagram shapes
 */
export function Container(props: DiagramNodeProps) {
  return <Shape _display='invisible' {...props} />
}
