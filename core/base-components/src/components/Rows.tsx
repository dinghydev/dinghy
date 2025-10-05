import type { DiagramNodeProps } from '../types/index.ts'
import { Columns } from './Columns.tsx'

export function Rows(props: DiagramNodeProps) {
  return <Columns _direction='vertical' {...props} />
}
