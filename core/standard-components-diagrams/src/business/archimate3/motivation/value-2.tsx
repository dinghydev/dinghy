import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VALUE_2 = {
  _style: 'shape=ellipse;html=1;whiteSpace=wrap;fillColor=#CCCCFF;',
  _width: 70,
  _height: 35,
}

export function Value2(props: DiagramNodeProps) {
  return <Shape {...VALUE_2} {...props} />
}
