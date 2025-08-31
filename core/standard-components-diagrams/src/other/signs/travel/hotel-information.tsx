import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HOTEL_INFORMATION = {
  _style:
    'shape=mxgraph.signs.travel.hotel_information;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 94,
  _height: 99,
}

export function HotelInformation(props: DiagramNodeProps) {
  return (
    <Shape
      {...HOTEL_INFORMATION}
      {...props}
      _style={extendStyle(HOTEL_INFORMATION, props)}
    />
  )
}
