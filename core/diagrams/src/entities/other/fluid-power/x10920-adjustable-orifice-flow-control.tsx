import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X10920_ADJUSTABLE_ORIFICE_FLOW_CONTROL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10920;points=[[0.77,0,0],[0.77,0.673,0]]',
  },
  _width: 60.4,
  _height: 110.94,
}

export function X10920AdjustableOrificeFlowControl(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, X10920_ADJUSTABLE_ORIFICE_FLOW_CONTROL)}
    />
  )
}
