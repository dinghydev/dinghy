import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const X11980_FILTER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11980;points=[[0.5,0,0],[0.5,1,0]]',
  },
  _original_width: 52.44,
  _original_height: 90.12,
}

export function X11980Filter(props: DiagramNodeProps) {
  return (
    <Shape
      {...X11980_FILTER}
      {...props}
      _style={extendStyle(X11980_FILTER, props)}
    />
  )
}
