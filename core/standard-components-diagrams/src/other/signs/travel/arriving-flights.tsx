import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ARRIVING_FLIGHTS = {
  _style:
    'shape=mxgraph.signs.travel.arriving_flights;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 74,
  _height: 102,
}

export function ArrivingFlights(props: DiagramNodeProps) {
  return (
    <Shape
      {...ARRIVING_FLIGHTS}
      {...props}
      _style={extendStyle(ARRIVING_FLIGHTS, props)}
    />
  )
}
