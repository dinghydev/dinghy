import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X11580_PRESSURE_INTENSIFIER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11580;points=[[0.053,1,0],[0.94,1,0]]',
  },
  _original_width: 83.48,
  _original_height: 55.9,
}

export function X11580PressureIntensifier(props: DiagramNodeProps) {
  return (
    <Shape
      {...X11580_PRESSURE_INTENSIFIER}
      {...props}
      _style={extendStyle(X11580_PRESSURE_INTENSIFIER, props)}
    />
  )
}
