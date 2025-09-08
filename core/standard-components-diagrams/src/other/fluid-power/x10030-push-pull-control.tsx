import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const X10030_PUSH_PULL_CONTROL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10030;points=[[0,0.35,0],[0,1,0],[0.74,0,0],[1,0.5,0],[1,0.84,0]]',
  },
  _original_width: 35.24,
  _original_height: 28.44,
}

export function X10030PushPullControl(props: DiagramNodeProps) {
  return (
    <Shape
      {...X10030_PUSH_PULL_CONTROL}
      {...props}
      _style={extendStyle(X10030_PUSH_PULL_CONTROL, props)}
    />
  )
}
