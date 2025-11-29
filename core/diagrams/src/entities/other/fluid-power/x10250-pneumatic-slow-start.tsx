import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X10250_PNEUMATIC_SLOW_START = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10250;points=[[0.665,0,0],[0.665,1,0]]',
  },
  _width: 167.26,
  _height: 143.78,
}

export function X10250PneumaticSlowStart(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, X10250_PNEUMATIC_SLOW_START)}
    />
  )
}
