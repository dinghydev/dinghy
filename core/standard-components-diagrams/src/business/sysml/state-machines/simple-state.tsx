import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SIMPLE_STATE = {
  _style: 'shape=rect;rounded=1;html=1;whiteSpace=wrap;align=center;',
  _width: 100,
  _height: 40,
}

export function SimpleState(props: DiagramNodeProps) {
  return <Shape {...SIMPLE_STATE} {...props} />
}
