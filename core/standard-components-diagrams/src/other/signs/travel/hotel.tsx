import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const HOTEL = {
  _style:
    'shape=mxgraph.signs.travel.hotel;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 99,
  _height: 60,
}

export function Hotel(props: DiagramNodeProps) {
  return <Shape {...HOTEL} {...props} />
}
