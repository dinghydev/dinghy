import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X10070_CONTROL_MECHANISM = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10070;points=[[1,0.38,0],[1,0.5,0],[1,0.62,0]]',
  },
  _width: 65.2,
  _height: 37.28,
}

export function X10070ControlMechanism(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, X10070_CONTROL_MECHANISM)} />
  )
}
