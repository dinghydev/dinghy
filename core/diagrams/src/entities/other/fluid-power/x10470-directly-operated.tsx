import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const X10470_DIRECTLY_OPERATED = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10470;points=[[0.43,0,0],[0.572,0,0],[0.43,1,0],[0.5,1,0],[0.572,1,0],[0,0.625,0],[1,0.625,0],[0.217,0.25,0],[0.215,0.75,0],[0.287,0.75,0],[0.358,0.25,0],[0.358,0.75,0],[0.643,0.25,0],[0.643,0.75,0],[0.785,0.25,0],[0.715,0.75,0],[0.786,0.75,0]]',
  },
  _width: 260.38,
  _height: 74.68,
}

export function X10470DirectlyOperated(props: DiagramNodeProps) {
  return (
    <Shape
      {...X10470_DIRECTLY_OPERATED}
      {...props}
      _style={extendStyle(X10470_DIRECTLY_OPERATED, props)}
    />
  )
}
