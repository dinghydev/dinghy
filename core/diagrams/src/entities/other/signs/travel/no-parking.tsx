import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NO_PARKING = {
  _style: {
    entity:
      'shape=mxgraph.signs.travel.no_parking;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 99,
  _original_height: 99,
}

export function NoParking(props: NodeProps) {
  return (
    <Shape {...NO_PARKING} {...props} _style={extendStyle(NO_PARKING, props)} />
  )
}
