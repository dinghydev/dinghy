import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BUILT_IN_WAN_ACCELERATION = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.built_in_wan_acceleration;',
  },
  _width: 44.8,
  _height: 44.8,
}

export function BuiltInWanAcceleration(props: DiagramNodeProps) {
  return (
    <Shape
      {...BUILT_IN_WAN_ACCELERATION}
      {...props}
      _style={extendStyle(BUILT_IN_WAN_ACCELERATION, props)}
    />
  )
}
