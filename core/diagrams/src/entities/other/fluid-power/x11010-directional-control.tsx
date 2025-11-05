import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X11010_DIRECTIONAL_CONTROL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11010;points=[[0.335,1,0],[1,0.6,0]]',
  },
  _width: 56.06,
  _height: 93.2,
}

export function X11010DirectionalControl(props: NodeProps) {
  return (
    <Shape
      {...X11010_DIRECTIONAL_CONTROL}
      {...props}
      _style={extendStyle(X11010_DIRECTIONAL_CONTROL, props)}
    />
  )
}
