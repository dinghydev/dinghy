import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const X10570_PRESSURE_REGULATOR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10570;points=[[0.335,0,0],[0.335,1,0],[1,1,0]]',
  },
  _original_width: 83.52,
  _original_height: 75.44,
}

export function X10570PressureRegulator(props: DiagramNodeProps) {
  return (
    <Shape
      {...X10570_PRESSURE_REGULATOR}
      {...props}
      _style={extendStyle(X10570_PRESSURE_REGULATOR, props)}
    />
  )
}
