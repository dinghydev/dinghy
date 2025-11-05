import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X11910_FLOW_METER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11910;points=[[0.5,0,0],[0.5,1,0]]',
  },
  _width: 37.34,
  _height: 75.04,
}

export function X11910FlowMeter(props: NodeProps) {
  return (
    <Shape
      {...X11910_FLOW_METER}
      {...props}
      _style={extendStyle(X11910_FLOW_METER, props)}
    />
  )
}
