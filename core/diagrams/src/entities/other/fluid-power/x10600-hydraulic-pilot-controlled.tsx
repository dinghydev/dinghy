import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X10600_HYDRAULIC_PILOT_CONTROLLED = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10600;points=[[0.218,0,0],[0.218,1,0],[0.927,1,0]]',
  },
  _width: 255.58,
  _height: 232.62,
}

export function X10600HydraulicPilotControlled(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, X10600_HYDRAULIC_PILOT_CONTROLLED)}
    />
  )
}
