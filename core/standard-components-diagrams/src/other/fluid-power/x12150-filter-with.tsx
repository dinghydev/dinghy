import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X12150_FILTER_WITH = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x12150;points=[[0,0.43,0],[1,0.43,0],[0.335,1,0]]',
  },
  _width: 195.82,
  _height: 128.7,
}

export function X12150FilterWith(props: DiagramNodeProps) {
  return (
    <Shape
      {...X12150_FILTER_WITH}
      {...props}
      _style={extendStyle(X12150_FILTER_WITH, props)}
    />
  )
}
