import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X12010_FILTER_WITH = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x12010;points=[[0.255,0.045,0],[0.255,1,0]]',
  _width: 102.7,
  _height: 94.52,
}

export function X12010FilterWith(props: DiagramNodeProps) {
  return (
    <Shape
      {...X12010_FILTER_WITH}
      {...props}
      _style={extendStyle(X12010_FILTER_WITH, props)}
    />
  )
}
