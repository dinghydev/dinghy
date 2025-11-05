import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PARKING_2 = {
  _style: {
    entity:
      'shape=mxgraph.signs.travel.parking_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 98,
  _original_height: 98,
}

export function Parking2(props: NodeProps) {
  return (
    <Shape {...PARKING_2} {...props} _style={extendStyle(PARKING_2, props)} />
  )
}
