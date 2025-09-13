import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const X12000_FILTER_WITH = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x12000;points=[[0.5,0,0],[0.5,1,0]]',
  },
  _width: 52.44,
  _height: 90.12,
}

export function X12000FilterWith(props: DiagramNodeProps) {
  return (
    <Shape
      {...X12000_FILTER_WITH}
      {...props}
      _style={extendStyle(X12000_FILTER_WITH, props)}
    />
  )
}
