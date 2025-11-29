import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X11460_DOUBLE_ACTING_DOUBLE_ROD = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11460;points=[[0.427,1,0],[0.81,1,0]]',
  },
  _width: 195.04,
  _height: 73.56,
}

export function X11460DoubleActingDoubleRod(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, X11460_DOUBLE_ACTING_DOUBLE_ROD)}
    />
  )
}
