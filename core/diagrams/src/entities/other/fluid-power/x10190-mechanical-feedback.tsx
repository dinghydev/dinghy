import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X10190_MECHANICAL_FEEDBACK = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10190;points=[[0.1,0.8,0],[0.55,0,0],[1,1,0]]',
  },
  _width: 31.08,
  _height: 37.32,
}

export function X10190MechanicalFeedback(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, X10190_MECHANICAL_FEEDBACK)} />
  )
}
