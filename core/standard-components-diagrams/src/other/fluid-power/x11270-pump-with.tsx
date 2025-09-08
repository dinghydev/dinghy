import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const X11270_PUMP_WITH = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11270;points=[[1,0.25,0],[1,0.75,0]]',
  },
  _original_width: 84.6,
  _original_height: 55.74,
}

export function X11270PumpWith(props: DiagramNodeProps) {
  return (
    <Shape
      {...X11270_PUMP_WITH}
      {...props}
      _style={extendStyle(X11270_PUMP_WITH, props)}
    />
  )
}
