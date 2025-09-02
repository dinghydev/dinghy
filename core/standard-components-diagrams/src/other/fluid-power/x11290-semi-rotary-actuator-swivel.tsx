import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X11290_SEMI_ROTARY_ACTUATOR_SWIVEL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11290;points=[[0.053,0.25,0]]',
  },
  _original_width: 78.82,
  _original_height: 55.74,
}

export function X11290SemiRotaryActuatorSwivel(props: DiagramNodeProps) {
  return (
    <Shape
      {...X11290_SEMI_ROTARY_ACTUATOR_SWIVEL}
      {...props}
      _style={extendStyle(X11290_SEMI_ROTARY_ACTUATOR_SWIVEL, props)}
    />
  )
}
