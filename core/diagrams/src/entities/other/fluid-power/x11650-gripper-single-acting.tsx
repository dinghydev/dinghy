import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const X11650_GRIPPER_SINGLE_ACTING = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11650;points=[[0.05,1,0]]',
  },
  _width: 92.94,
  _height: 55.82,
}

export function X11650GripperSingleActing(props: DiagramNodeProps) {
  return (
    <Shape
      {...X11650_GRIPPER_SINGLE_ACTING}
      {...props}
      _style={extendStyle(X11650_GRIPPER_SINGLE_ACTING, props)}
    />
  )
}
