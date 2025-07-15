import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PROPERTY_2 = {
  _style:
    'verticalAlign=bottom;html=1;endArrow=none;edgeStyle=orthogonalEdgeStyle;strokeWidth=2;',
  _width: 160,
  _height: 0,
}

export function Property2(props: DiagramNodeProps) {
  return <Shape {...PROPERTY_2} {...props} />
}
