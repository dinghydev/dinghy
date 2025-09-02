import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X11000_ACTIVE_CONTROL_DIRECTIONAL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11000;points=[[0.37,1,0],[1,0.39,0],[0.878,0.653,0]]',
  },
  _original_width: 74.36,
  _original_height: 107.38,
}

export function X11000ActiveControlDirectional(props: DiagramNodeProps) {
  return (
    <Shape
      {...X11000_ACTIVE_CONTROL_DIRECTIONAL}
      {...props}
      _style={extendStyle(X11000_ACTIVE_CONTROL_DIRECTIONAL, props)}
    />
  )
}
