import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const UNEVEN_ROAD = {
  _style:
    'shape=mxgraph.signs.transportation.uneven_road;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 99,
  _height: 68,
}

export function UnevenRoad(props: DiagramNodeProps) {
  return <Shape {...UNEVEN_ROAD} {...props} />
}
