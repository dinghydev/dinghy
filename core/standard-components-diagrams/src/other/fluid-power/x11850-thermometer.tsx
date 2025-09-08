import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const X11850_THERMOMETER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11850;points=[[0.5,1,0]]',
  },
  _original_width: 37.34,
  _original_height: 56.18,
}

export function X11850Thermometer(props: DiagramNodeProps) {
  return (
    <Shape
      {...X11850_THERMOMETER}
      {...props}
      _style={extendStyle(X11850_THERMOMETER, props)}
    />
  )
}
