import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HOTEL_INFORMATION = {
  _style: {
    entity:
      'shape=mxgraph.signs.travel.hotel_information;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 94,
  _original_height: 99,
}

export function HotelInformation(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, HOTEL_INFORMATION)} />
}
