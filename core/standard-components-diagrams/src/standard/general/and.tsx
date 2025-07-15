import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AND = {
  _style: 'shape=or;whiteSpace=wrap;html=1;',
  _width: 60,
  _height: 80,
}

export function And(props: DiagramNodeProps) {
  return <Shape {...AND} {...props} />
}
