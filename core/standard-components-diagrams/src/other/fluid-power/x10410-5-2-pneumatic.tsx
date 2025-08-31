import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X10410_5_2_PNEUMATIC = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10410;points=[[0.62,0,0],[0.62,1,0],[0.808,0,0],[0.808,1,0],[0.713,1,0],[0.335,0.25,0],[0.333,0.75,0],[0.427,0.75,0],[0.522,0.25,0],[0.522,0.75,0],[0,0.5,0],[0,0.625,0],[0,0.75,0],[1,0.5,0],[1,0.625,0],[1,0.75,0]]',
  },
  _width: 195,
  _height: 75.02,
}

export function X1041052Pneumatic(props: DiagramNodeProps) {
  return (
    <Shape
      {...X10410_5_2_PNEUMATIC}
      {...props}
      _style={extendStyle(X10410_5_2_PNEUMATIC, props)}
    />
  )
}
