import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X11660_GRIPPER_SINGLE_ACTING = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11660;points=[[0.65,1,0]]',
  },
  _width: 92.94,
  _height: 55.82,
}

export function X11660GripperSingleActing(props: DiagramNodeProps) {
  return (
    <Shape
      {...X11660_GRIPPER_SINGLE_ACTING}
      {...props}
      _style={extendStyle(X11660_GRIPPER_SINGLE_ACTING, props)}
    />
  )
}
