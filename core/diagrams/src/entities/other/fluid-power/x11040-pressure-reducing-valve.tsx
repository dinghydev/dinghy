import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X11040_PRESSURE_REDUCING_VALVE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11040;points=[[0.33,1,0],[1,0.6,0]]',
  },
  _width: 56.12,
  _height: 93.2,
}

export function X11040PressureReducingValve(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, X11040_PRESSURE_REDUCING_VALVE)}
    />
  )
}
