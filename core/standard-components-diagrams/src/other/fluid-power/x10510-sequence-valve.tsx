import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X10510_SEQUENCE_VALVE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10510;points=[[0.445,0,0],[0.445,1,0],[0.887,1,0]]',
  },
  _original_width: 83.56,
  _original_height: 75.54,
}

export function X10510SequenceValve(props: DiagramNodeProps) {
  return (
    <Shape
      {...X10510_SEQUENCE_VALVE}
      {...props}
      _style={extendStyle(X10510_SEQUENCE_VALVE, props)}
    />
  )
}
