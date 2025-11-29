import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X11660_GRIPPER_SINGLE_ACTING = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11660;points=[[0.65,1,0]]',
  },
  _width: 92.94,
  _height: 55.82,
}

export function X11660GripperSingleActing(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, X11660_GRIPPER_SINGLE_ACTING)}
    />
  )
}
