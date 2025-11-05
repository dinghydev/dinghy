import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X11260_FIXED_DISPLACEMENT = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11260;points=[[0.57,0,0],[0.57,1,0]]',
  },
  _original_width: 96.84,
  _original_height: 93.94,
}

export function X11260FixedDisplacement(props: NodeProps) {
  return (
    <Shape
      {...X11260_FIXED_DISPLACEMENT}
      {...props}
      _style={extendStyle(X11260_FIXED_DISPLACEMENT, props)}
    />
  )
}
