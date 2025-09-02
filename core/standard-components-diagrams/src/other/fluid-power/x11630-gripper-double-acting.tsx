import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X11630_GRIPPER_DOUBLE_ACTING = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11630;points=[[0.05,1,0],[0.65,1,0]]',
  },
  _original_width: 92.94,
  _original_height: 55.82,
}

export function X11630GripperDoubleActing(props: DiagramNodeProps) {
  return (
    <Shape
      {...X11630_GRIPPER_DOUBLE_ACTING}
      {...props}
      _style={extendStyle(X11630_GRIPPER_DOUBLE_ACTING, props)}
    />
  )
}
