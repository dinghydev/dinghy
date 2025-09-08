import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const X11620_SEMI_ROTARY_LINEAR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11620;points=[[0,0.25,0],[0,0.55,0],[0.55,1,0],[0.863,1,0]]',
  },
  _original_width: 236.94,
  _original_height: 93.28,
}

export function X11620SemiRotaryLinear(props: DiagramNodeProps) {
  return (
    <Shape
      {...X11620_SEMI_ROTARY_LINEAR}
      {...props}
      _style={extendStyle(X11620_SEMI_ROTARY_LINEAR, props)}
    />
  )
}
