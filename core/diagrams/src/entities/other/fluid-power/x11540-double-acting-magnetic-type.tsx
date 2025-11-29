import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X11540_DOUBLE_ACTING_MAGNETIC_TYPE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11540;points=[[0.04,1,0],[0.705,1,0]]',
  },
  _width: 111.46,
  _height: 84.14,
}

export function X11540DoubleActingMagneticType(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, X11540_DOUBLE_ACTING_MAGNETIC_TYPE)}
    />
  )
}
