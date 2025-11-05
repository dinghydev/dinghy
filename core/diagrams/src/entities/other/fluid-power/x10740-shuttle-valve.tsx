import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X10740_SHUTTLE_VALVE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10740;points=[[0,0.665,0],[1,0.665,0],[0.498,0,0]]',
  },
  _width: 111.72,
  _height: 56,
}

export function X10740ShuttleValve(props: NodeProps) {
  return (
    <Shape
      {...X10740_SHUTTLE_VALVE}
      {...props}
      _style={extendStyle(X10740_SHUTTLE_VALVE, props)}
    />
  )
}
