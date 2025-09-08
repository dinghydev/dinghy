import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const X12310_RECLASSIFIER_WITH = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x12310;points=[[0,0.365,0],[1,0.365,0],[0.5,1,0]]',
  },
  _original_width: 111.7,
  _original_height: 71.36,
}

export function X12310ReclassifierWith(props: DiagramNodeProps) {
  return (
    <Shape
      {...X12310_RECLASSIFIER_WITH}
      {...props}
      _style={extendStyle(X12310_RECLASSIFIER_WITH, props)}
    />
  )
}
