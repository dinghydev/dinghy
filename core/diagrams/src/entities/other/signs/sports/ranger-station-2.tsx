import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const RANGER_STATION_2 = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.ranger_station_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 95,
  _original_height: 98,
}

export function RangerStation2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, RANGER_STATION_2)} />
}
