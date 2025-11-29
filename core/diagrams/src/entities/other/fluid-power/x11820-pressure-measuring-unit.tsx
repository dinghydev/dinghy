import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X11820_PRESSURE_MEASURING_UNIT = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11820;points=[[0.5,1,0]]',
  },
  _width: 37.34,
  _height: 56.1,
}

export function X11820PressureMeasuringUnit(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, X11820_PRESSURE_MEASURING_UNIT)}
    />
  )
}
