import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X11230_VARIABLE_DISPLACEMENT_PUMP = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11230;points=[[0.5,0,0],[0.5,1,0]]',
  },
  _original_width: 84.54,
  _original_height: 93.94,
}

export function X11230VariableDisplacementPump(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, X11230_VARIABLE_DISPLACEMENT_PUMP)}
    />
  )
}
