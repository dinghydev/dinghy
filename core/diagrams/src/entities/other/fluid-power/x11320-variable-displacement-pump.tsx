import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X11320_VARIABLE_DISPLACEMENT_PUMP = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11320;points=[[0.575,0,0],[0.575,1,0],[0.79,0.93,0]]',
  },
  _width: 176.78,
  _height: 205.22,
}

export function X11320VariableDisplacementPump(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, X11320_VARIABLE_DISPLACEMENT_PUMP)}
    />
  )
}
