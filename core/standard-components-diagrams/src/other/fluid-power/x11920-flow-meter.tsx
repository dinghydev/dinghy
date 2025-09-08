import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const X11920_FLOW_METER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11920;points=[[0.22,0,0],[0.22,1,0]]',
  },
  _original_width: 83.76,
  _original_height: 75.04,
}

export function X11920FlowMeter(props: DiagramNodeProps) {
  return (
    <Shape
      {...X11920_FLOW_METER}
      {...props}
      _style={extendStyle(X11920_FLOW_METER, props)}
    />
  )
}
