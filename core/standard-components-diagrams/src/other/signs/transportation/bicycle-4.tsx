import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BICYCLE_4 = {
  _style:
    'shape=mxgraph.signs.transportation.bicycle_4;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 99,
  _height: 58,
}

export function Bicycle4(props: DiagramNodeProps) {
  return <Shape {...BICYCLE_4} {...props} />
}
