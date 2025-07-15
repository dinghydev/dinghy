import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LIFELINE = {
  _style: 'shape=rect;html=1;whiteSpace=wrap;align=center;',
  _width: 0,
  _height: 150,
}

export function Lifeline(props: DiagramNodeProps) {
  return <Shape {...LIFELINE} {...props} />
}
