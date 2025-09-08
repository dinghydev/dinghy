import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const X11930_TACHOMETER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11930;points=[[0,0.375,0],[0,0.625,0]]',
  },
  _original_width: 56.28,
  _original_height: 37.42,
}

export function X11930Tachometer(props: DiagramNodeProps) {
  return (
    <Shape
      {...X11930_TACHOMETER}
      {...props}
      _style={extendStyle(X11930_TACHOMETER, props)}
    />
  )
}
