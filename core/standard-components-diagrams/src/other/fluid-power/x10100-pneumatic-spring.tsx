import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const X10100_PNEUMATIC_SPRING = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10100;points=[[0,0,0],[0,0.5,0],[0,1,0],[1,0,0],[1,0.5,0],[1,1,0]]',
  },
  _original_width: 28.08,
  _original_height: 18.7,
}

export function X10100PneumaticSpring(props: DiagramNodeProps) {
  return (
    <Shape
      {...X10100_PNEUMATIC_SPRING}
      {...props}
      _style={extendStyle(X10100_PNEUMATIC_SPRING, props)}
    />
  )
}
