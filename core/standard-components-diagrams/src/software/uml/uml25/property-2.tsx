import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PROPERTY_2 = {
  _style: 'fontStyle=0;dashed=1;html=1;whiteSpace=wrap;',
  _width: 140,
  _height: 30,
}

export function Property2(props: DiagramNodeProps) {
  return <Shape {...PROPERTY_2} {...props} />
}
