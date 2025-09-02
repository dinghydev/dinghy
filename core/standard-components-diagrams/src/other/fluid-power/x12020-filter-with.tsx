import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X12020_FILTER_WITH = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x12020;points=[[0.28,0.09,0],[0.28,1,0]]',
  },
  _original_width: 93.86,
  _original_height: 99.22,
}

export function X12020FilterWith(props: DiagramNodeProps) {
  return (
    <Shape
      {...X12020_FILTER_WITH}
      {...props}
      _style={extendStyle(X12020_FILTER_WITH, props)}
    />
  )
}
