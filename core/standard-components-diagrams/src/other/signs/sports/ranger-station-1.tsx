import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RANGER_STATION_1 = {
  _style:
    'shape=mxgraph.signs.sports.ranger_station_1;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 92,
  _height: 98,
}

export function RangerStation1(props: DiagramNodeProps) {
  return (
    <Shape
      {...RANGER_STATION_1}
      {...props}
      _style={extendStyle(RANGER_STATION_1, props)}
    />
  )
}
