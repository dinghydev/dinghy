import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const X12170_DOUBLE_FILTER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x12170;points=[[0.5,0,0],[0.5,1,0]]',
  },
  _original_width: 162.34,
  _original_height: 192.78,
}

export function X12170DoubleFilter(props: DiagramNodeProps) {
  return (
    <Shape
      {...X12170_DOUBLE_FILTER}
      {...props}
      _style={extendStyle(X12170_DOUBLE_FILTER, props)}
    />
  )
}
