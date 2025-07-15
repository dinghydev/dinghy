import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MOTORCYCLE = {
  _style:
    'shape=mxgraph.signs.transportation.motorcycle;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 98,
  _height: 66,
}

export function Motorcycle(props: DiagramNodeProps) {
  return <Shape {...MOTORCYCLE} {...props} />
}
