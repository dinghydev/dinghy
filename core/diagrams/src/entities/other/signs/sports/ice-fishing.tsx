import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ICE_FISHING = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.ice_fishing;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 99,
  _original_height: 99,
}

export function IceFishing(props: NodeProps) {
  return (
    <Shape
      {...ICE_FISHING}
      {...props}
      _style={extendStyle(ICE_FISHING, props)}
    />
  )
}
