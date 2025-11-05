import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X10530_SEQUENCE_VALVE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10530;points=[[0.61,0,0],[0.61,1,0],[0,0.62,0]]',
  },
  _width: 107.88,
  _height: 75.54,
}

export function X10530SequenceValve(props: NodeProps) {
  return (
    <Shape
      {...X10530_SEQUENCE_VALVE}
      {...props}
      _style={extendStyle(X10530_SEQUENCE_VALVE, props)}
    />
  )
}
