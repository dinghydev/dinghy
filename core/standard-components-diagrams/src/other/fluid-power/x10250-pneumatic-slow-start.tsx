import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X10250_PNEUMATIC_SLOW_START = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10250;points=[[0.665,0,0],[0.665,1,0]]',
  _width: 167.26,
  _height: 143.78,
}

export function X10250PneumaticSlowStart(props: DiagramNodeProps) {
  return (
    <Shape
      {...X10250_PNEUMATIC_SLOW_START}
      {...props}
      _style={extendStyle(X10250_PNEUMATIC_SLOW_START, props)}
    />
  )
}
