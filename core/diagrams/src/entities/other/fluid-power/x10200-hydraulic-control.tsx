import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X10200_HYDRAULIC_CONTROL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10200;points=[[0,0.31,0],[0,0.48,0],[0,0.65,0],[1,0.31,0],[1,0.48,0],[1,0.65,0],[0.43,1,0],[0.715,1,0]]',
  },
  _original_width: 64.82,
  _original_height: 53.86,
}

export function X10200HydraulicControl(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, X10200_HYDRAULIC_CONTROL)} />
  )
}
