import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PEDESTRIAN_CROSSING = {
  _style:
    'shape=mxgraph.signs.safety.pedestrian_crossing;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 60,
  _height: 60,
}

export function PedestrianCrossing(props: DiagramNodeProps) {
  return (
    <Shape
      {...PEDESTRIAN_CROSSING}
      {...props}
      _style={extendStyle(PEDESTRIAN_CROSSING, props)}
    />
  )
}
