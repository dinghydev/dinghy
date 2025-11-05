import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X11330_VARIABLE_DISPLACEMENT_HYDRAULIC = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11330;points=[[0.575,0,0],[0.575,1,0],[0.79,0.93,0]]',
  },
  _width: 176.78,
  _height: 205.22,
}

export function X11330VariableDisplacementHydraulic(props: NodeProps) {
  return (
    <Shape
      {...X11330_VARIABLE_DISPLACEMENT_HYDRAULIC}
      {...props}
      _style={extendStyle(X11330_VARIABLE_DISPLACEMENT_HYDRAULIC, props)}
    />
  )
}
