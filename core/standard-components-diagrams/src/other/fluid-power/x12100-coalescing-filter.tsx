import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X12100_COALESCING_FILTER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x12100;points=[[0,0.365,0],[1,0.365,0],[0.5,1,0]]',
  },
  _original_width: 90.42,
  _original_height: 71.26,
}

export function X12100CoalescingFilter(props: DiagramNodeProps) {
  return (
    <Shape
      {...X12100_COALESCING_FILTER}
      {...props}
      _style={extendStyle(X12100_COALESCING_FILTER, props)}
    />
  )
}
