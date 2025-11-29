import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X10050_TURNING_CONTROL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10050;points=[[1,0.64,0],[1,0.88,0]]',
  },
  _width: 35.34,
  _height: 39.22,
}

export function X10050TurningControl(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, X10050_TURNING_CONTROL)} />
  )
}
