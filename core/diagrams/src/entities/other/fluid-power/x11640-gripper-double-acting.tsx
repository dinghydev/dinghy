import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X11640_GRIPPER_DOUBLE_ACTING = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11640;points=[[0.05,1,0],[0.65,1,0]]',
  },
  _width: 92.94,
  _height: 55.82,
}

export function X11640GripperDoubleActing(props: NodeProps) {
  return (
    <Shape
      {...X11640_GRIPPER_DOUBLE_ACTING}
      {...props}
      _style={extendStyle(X11640_GRIPPER_DOUBLE_ACTING, props)}
    />
  )
}
