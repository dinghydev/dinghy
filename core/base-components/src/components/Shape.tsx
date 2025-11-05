import Node from './Node.tsx'
import type { NodeProps } from '../types/node.ts'

/**
 * Shape component as the base to configure diagram shapes
 */
export function Shape(props: NodeProps) {
  return <Node {...props} />
}
