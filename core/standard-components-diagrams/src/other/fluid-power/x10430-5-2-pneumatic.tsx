import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const X10430_5_2_PNEUMATIC = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10430;points=[[0.634,0,0],[0.634,1,0],[0.83,0,0],[0.732,1,0],[0.83,1,0],[0.343,0.25,0],[0.341,0.75,0],[0.537,0.25,0],[0.537,0.75,0],[0.44,0.75,0],[0.145,1,0],[0,0.5,0],[0,0.625,0],[0,0.75,0]]',
  },
  _original_width: 190.36,
  _original_height: 74.94,
}

export function X1043052Pneumatic(props: DiagramNodeProps) {
  return (
    <Shape
      {...X10430_5_2_PNEUMATIC}
      {...props}
      _style={extendStyle(X10430_5_2_PNEUMATIC, props)}
    />
  )
}
