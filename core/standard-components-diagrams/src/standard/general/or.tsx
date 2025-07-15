import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const OR = {
  _style: 'shape=xor;whiteSpace=wrap;html=1;',
  _width: 60,
  _height: 80,
}

export function Or(props: DiagramNodeProps) {
  return <Shape {...OR} {...props} />
}
