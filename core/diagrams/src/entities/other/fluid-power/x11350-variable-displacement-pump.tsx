import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X11350_VARIABLE_DISPLACEMENT_PUMP = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11350;points=[[0.69,0,0],[0.69,0.98,0],[0.845,1,0]]',
  },
  _width: 241.56,
  _height: 209.6,
}

export function X11350VariableDisplacementPump(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, X11350_VARIABLE_DISPLACEMENT_PUMP)}
    />
  )
}
