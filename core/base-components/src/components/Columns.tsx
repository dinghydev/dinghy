import type { NodeProps } from '../types/node.ts'
import { Shape } from './Shape.tsx'

export function Columns(props: NodeProps) {
  return <Shape _display='invisible' {...props} />
}
