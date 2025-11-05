import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BUILT_IN_WAN_ACCELERATION = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.built_in_wan_acceleration;',
  },
  _original_width: 44.8,
  _original_height: 44.8,
}

export function BuiltInWanAcceleration(props: NodeProps) {
  return (
    <Shape
      {...BUILT_IN_WAN_ACCELERATION}
      {...props}
      _style={extendStyle(BUILT_IN_WAN_ACCELERATION, props)}
    />
  )
}
