import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X11830_DIFFERENTIAL_PRESSURE_GAUGE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11830;points=[[0.5,0,0],[0.5,1,0]]',
  },
  _width: 37.34,
  _height: 74.76,
}

export function X11830DifferentialPressureGauge(props: DiagramNodeProps) {
  return (
    <Shape
      {...X11830_DIFFERENTIAL_PRESSURE_GAUGE}
      {...props}
      _style={extendStyle(X11830_DIFFERENTIAL_PRESSURE_GAUGE, props)}
    />
  )
}
