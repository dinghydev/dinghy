import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X10080_PNEUMATIC_SPRING = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10080;points=[[0,0,0],[0,0.5,0],[0,1,0],[1,0,0],[1,0.5,0],[1,1,0]]',
  },
  _width: 28.08,
  _height: 18.7,
}

export function X10080PneumaticSpring(props: DiagramNodeProps) {
  return (
    <Shape
      {...X10080_PNEUMATIC_SPRING}
      {...props}
      _style={extendStyle(X10080_PNEUMATIC_SPRING, props)}
    />
  )
}
