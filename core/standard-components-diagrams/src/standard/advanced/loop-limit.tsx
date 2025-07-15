import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LOOP_LIMIT = {
  _style: 'shape=loopLimit;whiteSpace=wrap;html=1;',
  _width: 100,
  _height: 80,
}

export function LoopLimit(props: DiagramNodeProps) {
  return <Shape {...LOOP_LIMIT} {...props} />
}
