import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const RADIATOR_WATER = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.radiator_water;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 98,
  _original_height: 94,
}

export function RadiatorWater(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, RADIATOR_WATER)} />
}
