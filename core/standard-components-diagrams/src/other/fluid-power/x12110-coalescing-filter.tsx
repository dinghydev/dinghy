import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const X12110_COALESCING_FILTER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x12110;points=[[0,0.543,0],[1,0.543,0],[0.5,1,0]]',
  },
  _original_width: 90.42,
  _original_height: 99.1,
}

export function X12110CoalescingFilter(props: DiagramNodeProps) {
  return (
    <Shape
      {...X12110_COALESCING_FILTER}
      {...props}
      _style={extendStyle(X12110_COALESCING_FILTER, props)}
    />
  )
}
