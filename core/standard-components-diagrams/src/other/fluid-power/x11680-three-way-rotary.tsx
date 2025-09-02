import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X11680_THREE_WAY_ROTARY = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11680;points=[[0,0.27,0],[0,0.64,0],[0,1,0],[1,0.27,0],[1,0.64,0],[1,1,0]]',
  },
  _original_width: 93.66,
  _original_height: 50.86,
}

export function X11680ThreeWayRotary(props: DiagramNodeProps) {
  return (
    <Shape
      {...X11680_THREE_WAY_ROTARY}
      {...props}
      _style={extendStyle(X11680_THREE_WAY_ROTARY, props)}
    />
  )
}
