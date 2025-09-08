import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const X12050_FILTER_WITH = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x12050;points=[[0.445,0,0],[0.445,1,0]]',
  },
  _original_width: 187.68,
  _original_height: 147,
}

export function X12050FilterWith(props: DiagramNodeProps) {
  return (
    <Shape
      {...X12050_FILTER_WITH}
      {...props}
      _style={extendStyle(X12050_FILTER_WITH, props)}
    />
  )
}
