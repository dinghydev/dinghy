import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X11570_PRESSURE_MEDIUM_CONVERTER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11570;points=[[0.027,1,0],[0.477,1,0]]',
  },
  _width: 164.9,
  _height: 104.24,
}

export function X11570PressureMediumConverter(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, X11570_PRESSURE_MEDIUM_CONVERTER)}
    />
  )
}
