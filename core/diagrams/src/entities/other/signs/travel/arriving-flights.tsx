import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ARRIVING_FLIGHTS = {
  _style: {
    entity:
      'shape=mxgraph.signs.travel.arriving_flights;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 74,
  _height: 102,
}

export function ArrivingFlights(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ARRIVING_FLIGHTS)} />
}
