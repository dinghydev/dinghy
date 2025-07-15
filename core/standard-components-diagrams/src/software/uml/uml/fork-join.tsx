import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FORK_JOIN = {
  _style: 'shape=line;html=1;strokeWidth=6;strokeColor=#ff0000;',
  _width: 0,
  _height: 80,
}

export function ForkJoin(props: DiagramNodeProps) {
  return <Shape {...FORK_JOIN} {...props} />
}
