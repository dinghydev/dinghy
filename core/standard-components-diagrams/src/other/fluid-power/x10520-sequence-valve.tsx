import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const X10520_SEQUENCE_VALVE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10520;points=[[0.57,0,0],[0.57,1,0],[0.856,1,0]]',
  },
  _original_width: 130.08,
  _original_height: 131.02,
}

export function X10520SequenceValve(props: DiagramNodeProps) {
  return (
    <Shape
      {...X10520_SEQUENCE_VALVE}
      {...props}
      _style={extendStyle(X10520_SEQUENCE_VALVE, props)}
    />
  )
}
