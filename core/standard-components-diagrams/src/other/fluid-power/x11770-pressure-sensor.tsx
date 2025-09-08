import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const X11770_PRESSURE_SENSOR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11770;points=[[0,0.5,0]]',
  },
  _original_width: 46.82,
  _original_height: 27.96,
}

export function X11770PressureSensor(props: DiagramNodeProps) {
  return (
    <Shape
      {...X11770_PRESSURE_SENSOR}
      {...props}
      _style={extendStyle(X11770_PRESSURE_SENSOR, props)}
    />
  )
}
