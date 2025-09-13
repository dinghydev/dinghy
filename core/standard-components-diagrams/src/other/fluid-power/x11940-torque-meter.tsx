import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const X11940_TORQUE_METER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11940;points=[[0,0.37,0],[0,0.62,0],[1,0.37,0],[1,0.62,0]]',
  },
  _width: 74.94,
  _height: 37.42,
}

export function X11940TorqueMeter(props: DiagramNodeProps) {
  return (
    <Shape
      {...X11940_TORQUE_METER}
      {...props}
      _style={extendStyle(X11940_TORQUE_METER, props)}
    />
  )
}
