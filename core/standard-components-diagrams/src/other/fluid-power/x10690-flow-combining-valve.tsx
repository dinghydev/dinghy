import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const X10690_FLOW_COMBINING_VALVE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10690;points=[[0.5,0,0],[0.3,1,0],[0.7,1,0]]',
  },
  _original_width: 92.78,
  _original_height: 112.16,
}

export function X10690FlowCombiningValve(props: DiagramNodeProps) {
  return (
    <Shape
      {...X10690_FLOW_COMBINING_VALVE}
      {...props}
      _style={extendStyle(X10690_FLOW_COMBINING_VALVE, props)}
    />
  )
}
