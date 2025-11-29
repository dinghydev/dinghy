import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X12160_AIR_CONDITIONING_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x12160_simplified;points=[[0,0.5,0],[1,0.5,0]]',
  },
  _width: 130.68,
  _height: 55.78,
}

export function X12160AirConditioning2(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, X12160_AIR_CONDITIONING_2)} />
  )
}
