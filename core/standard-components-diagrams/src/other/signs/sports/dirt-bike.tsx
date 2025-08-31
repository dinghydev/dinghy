import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DIRT_BIKE = {
  _style:
    'shape=mxgraph.signs.sports.dirt_bike;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 99,
  _height: 94,
}

export function DirtBike(props: DiagramNodeProps) {
  return (
    <Shape {...DIRT_BIKE} {...props} _style={extendStyle(DIRT_BIKE, props)} />
  )
}
