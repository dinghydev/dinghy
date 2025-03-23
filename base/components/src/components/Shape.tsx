import Node from './Node.js'
import type { DiagramNodeProps } from '../types.js'

/**
 * Shape component as the base to configure diagram shapes
 */
export default function Shape(props: DiagramNodeProps) {
  return <Node {...props} />
}
