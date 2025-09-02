import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X12250_LUBRICATOR_WITH = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x12250;points=[[0,0.33,0],[1,0.33,0],[0.5,1,0]]',
  },
  _original_width: 90.42,
  _original_height: 78.68,
}

export function X12250LubricatorWith(props: DiagramNodeProps) {
  return (
    <Shape
      {...X12250_LUBRICATOR_WITH}
      {...props}
      _style={extendStyle(X12250_LUBRICATOR_WITH, props)}
    />
  )
}
