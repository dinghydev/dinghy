import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X10560_PITOT_OPERATED_TWO_PORT = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10560;points=[[0.348,0,0],[0.348,1,0],[0.778,1,0]]',
  },
  _width: 107.28,
  _height: 75.54,
}

export function X10560PitotOperatedTwoPort(props: NodeProps) {
  return (
    <Shape
      {...X10560_PITOT_OPERATED_TWO_PORT}
      {...props}
      _style={extendStyle(X10560_PITOT_OPERATED_TWO_PORT, props)}
    />
  )
}
