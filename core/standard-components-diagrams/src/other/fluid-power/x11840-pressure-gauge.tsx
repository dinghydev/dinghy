import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X11840_PRESSURE_GAUGE = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11840;points=[[0.07,0.485,0],[1,0.145,0],[1,0.315,0],[1,0.485,0],[1,0.66,0],[1,0.83,0],[1,1,0]]',
  _width: 100.4,
  _height: 108.54,
}

export function X11840PressureGauge(props: DiagramNodeProps) {
  return (
    <Shape
      {...X11840_PRESSURE_GAUGE}
      {...props}
      _style={extendStyle(X11840_PRESSURE_GAUGE, props)}
    />
  )
}
