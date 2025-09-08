import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const X10190_MECHANICAL_FEEDBACK = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10190;points=[[0.1,0.8,0],[0.55,0,0],[1,1,0]]',
  },
  _original_width: 31.08,
  _original_height: 37.32,
}

export function X10190MechanicalFeedback(props: DiagramNodeProps) {
  return (
    <Shape
      {...X10190_MECHANICAL_FEEDBACK}
      {...props}
      _style={extendStyle(X10190_MECHANICAL_FEEDBACK, props)}
    />
  )
}
