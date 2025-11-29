import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X11390_MOTOR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11390;points=[[0.334,0,0],[0.334,1,0]]',
  },
  _original_width: 83.38,
  _original_height: 92.9,
}

export function X11390Motor(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, X11390_MOTOR)} />
}
