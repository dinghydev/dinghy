import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X10130_ELECTRICAL_CONTROL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10130;points=[[0,0,0],[0,0.5,0],[0,1,0],[1,0,0],[1,0.5,0],[1,1,0],[0.5,0,0],[0.5,1,0]]',
  },
  _width: 27.88,
  _height: 18.66,
}

export function X10130ElectricalControl(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, X10130_ELECTRICAL_CONTROL)} />
  )
}
