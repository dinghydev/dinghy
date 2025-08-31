import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X11820_PRESSURE_MEASURING_UNIT = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11820;points=[[0.5,1,0]]',
  _width: 37.34,
  _height: 56.1,
}

export function X11820PressureMeasuringUnit(props: DiagramNodeProps) {
  return (
    <Shape
      {...X11820_PRESSURE_MEASURING_UNIT}
      {...props}
      _style={extendStyle(X11820_PRESSURE_MEASURING_UNIT, props)}
    />
  )
}
