import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X10540_PRESSURE_REGULATOR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10540;points=[[0.35,0,0],[0.35,1,0]]',
  },
  _original_width: 79.18,
  _original_height: 75.54,
}

export function X10540PressureRegulator(props: DiagramNodeProps) {
  return (
    <Shape
      {...X10540_PRESSURE_REGULATOR}
      {...props}
      _style={extendStyle(X10540_PRESSURE_REGULATOR, props)}
    />
  )
}
