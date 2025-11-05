import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X10990_ACTIVE_CONTROL_DIRECTIONAL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10990;points=[[0.37,1,0],[1,0.39,0],[0.878,0.653,0]]',
  },
  _width: 74.36,
  _height: 107.38,
}

export function X10990ActiveControlDirectional(props: NodeProps) {
  return (
    <Shape
      {...X10990_ACTIVE_CONTROL_DIRECTIONAL}
      {...props}
      _style={extendStyle(X10990_ACTIVE_CONTROL_DIRECTIONAL, props)}
    />
  )
}
