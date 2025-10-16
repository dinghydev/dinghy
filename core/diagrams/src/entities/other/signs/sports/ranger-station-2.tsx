import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RANGER_STATION_2 = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.ranger_station_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 95,
  _original_height: 98,
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
