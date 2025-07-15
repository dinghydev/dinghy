import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INITIAL_NODE = {
  _style:
    'shape=ellipse;html=1;fillColor=strokeColor;strokeWidth=2;verticalLabelPosition=bottom;verticalAlignment=top;perimeter=ellipsePerimeter;',
  _width: 40,
  _height: 40,
}

export function InitialNode(props: DiagramNodeProps) {
  return <Shape {...INITIAL_NODE} {...props} />
}
