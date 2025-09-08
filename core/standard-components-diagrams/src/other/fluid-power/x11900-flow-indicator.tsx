import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const X11900_FLOW_INDICATOR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11900;points=[[0.5,1,0]]',
  },
  _original_width: 37.34,
  _original_height: 56.18,
}

export function X11900FlowIndicator(props: DiagramNodeProps) {
  return (
    <Shape
      {...X11900_FLOW_INDICATOR}
      {...props}
      _style={extendStyle(X11900_FLOW_INDICATOR, props)}
    />
  )
}
