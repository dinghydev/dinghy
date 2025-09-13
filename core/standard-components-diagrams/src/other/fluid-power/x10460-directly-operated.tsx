import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const X10460_DIRECTLY_OPERATED = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10460;points=[[0.6,0,0],[0.6,1,0],[0.8,0,0],[0.8,1,0],[0.7,1,0],[0.3,0.25,0],[0.3,0.75,0],[0.4,0.75,0],[0.5,0.25,0],[0.5,0.75,0],[0,0.625,0],[1,0.5,0],[1,0.625,0],[1,0.75,0]]',
  },
  _width: 186,
  _height: 75.08,
}

export function X10460DirectlyOperated(props: DiagramNodeProps) {
  return (
    <Shape
      {...X10460_DIRECTLY_OPERATED}
      {...props}
      _style={extendStyle(X10460_DIRECTLY_OPERATED, props)}
    />
  )
}
