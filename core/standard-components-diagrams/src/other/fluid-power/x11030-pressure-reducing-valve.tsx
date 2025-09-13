import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const X11030_PRESSURE_REDUCING_VALVE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11030;points=[[0.33,1,0],[1,0.5,0]]',
  },
  _width: 56.06,
  _height: 93.2,
}

export function X11030PressureReducingValve(props: DiagramNodeProps) {
  return (
    <Shape
      {...X11030_PRESSURE_REDUCING_VALVE}
      {...props}
      _style={extendStyle(X11030_PRESSURE_REDUCING_VALVE, props)}
    />
  )
}
