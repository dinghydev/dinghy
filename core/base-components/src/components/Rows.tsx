import type { NodeProps } from '../types/node.ts'
import { Columns } from './Columns.tsx'

export function Rows(props: NodeProps) {
  return <Columns _direction='vertical' {...props} />
}
