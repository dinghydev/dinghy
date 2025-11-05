import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X11490_SINGLE_ACTING_CYLINDER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11490;points=[[0.047,1,0]]',
  },
  _width: 102.14,
  _height: 65.4,
}

export function X11490SingleActingCylinder(props: NodeProps) {
  return (
    <Shape
      {...X11490_SINGLE_ACTING_CYLINDER}
      {...props}
      _style={extendStyle(X11490_SINGLE_ACTING_CYLINDER, props)}
    />
  )
}
