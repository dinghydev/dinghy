import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TAPE = {
  _style: 'shape=tape;whiteSpace=wrap;html=1;strokeWidth=2;size=0.19',
  _width: 100,
  _height: 65,
}

export function Tape(props: DiagramNodeProps) {
  return <Shape {...TAPE} {...props} />
}
