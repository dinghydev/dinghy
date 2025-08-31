import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X12060_FILTER_WITH = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x12060;points=[[0.34,0,0],[0.34,1,0]]',
  _width: 246.26,
  _height: 147,
}

export function X12060FilterWith(props: DiagramNodeProps) {
  return (
    <Shape
      {...X12060_FILTER_WITH}
      {...props}
      _style={extendStyle(X12060_FILTER_WITH, props)}
    />
  )
}
