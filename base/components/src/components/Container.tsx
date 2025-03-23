import Node from './Node.js'
import type { DiagramNodeProps } from '../types.js'
import { Shape } from '../index.js'

/**
 * Shape component as the base to configure diagram shapes
 */
export function Container(props: DiagramNodeProps) {
  return <Shape _display="invisible" {...props} />
}
