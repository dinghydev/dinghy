import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X11750_PRESSURE_SWITCH = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11750;points=[[0,0.58,0]]',
  _width: 70.4,
  _height: 42.74,
}

export function X11750PressureSwitch(props: DiagramNodeProps) {
  return (
    <Shape
      {...X11750_PRESSURE_SWITCH}
      {...props}
      _style={extendStyle(X11750_PRESSURE_SWITCH, props)}
    />
  )
}
