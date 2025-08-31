import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X10050_TURNING_CONTROL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10050;points=[[1,0.64,0],[1,0.88,0]]',
  },
  _width: 35.34,
  _height: 39.22,
}

export function X10050TurningControl(props: DiagramNodeProps) {
  return (
    <Shape
      {...X10050_TURNING_CONTROL}
      {...props}
      _style={extendStyle(X10050_TURNING_CONTROL, props)}
    />
  )
}
