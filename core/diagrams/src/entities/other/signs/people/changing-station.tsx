import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CHANGING_STATION = {
  _style: {
    entity:
      'shape=mxgraph.signs.people.changing_station;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 94,
  _original_height: 98,
}

export function ChangingStation(props: NodeProps) {
  return (
    <Shape
      {...CHANGING_STATION}
      {...props}
      _style={extendStyle(CHANGING_STATION, props)}
    />
  )
}
