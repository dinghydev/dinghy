import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X11960_COUNTER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11960;points=[[0,0.5,0]]',
  },
  _width: 55.82,
  _height: 37.14,
}

export function X11960Counter(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, X11960_COUNTER)} />
}
