import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const X11280_ROTARY_ACTUATOR_SWIVEL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11280;points=[[0,0.25,0],[0,0.75,0]]',
  },
  _original_width: 74.62,
  _original_height: 55.74,
}

export function X11280RotaryActuatorSwivel(props: DiagramNodeProps) {
  return (
    <Shape
      {...X11280_ROTARY_ACTUATOR_SWIVEL}
      {...props}
      _style={extendStyle(X11280_ROTARY_ACTUATOR_SWIVEL, props)}
    />
  )
}
