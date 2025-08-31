import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RANGER_STATION_2 = {
  _style:
    'shape=mxgraph.signs.sports.ranger_station_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 95,
  _height: 98,
}

export function RangerStation2(props: DiagramNodeProps) {
  return (
    <Shape
      {...RANGER_STATION_2}
      {...props}
      _style={extendStyle(RANGER_STATION_2, props)}
    />
  )
}
