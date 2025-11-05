import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X12230_AIR_DRYER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x12230;points=[[0,0.365,0],[1,0.365,0],[0.5,1,0]]',
  },
  _original_width: 90.42,
  _original_height: 71.34,
}

export function X12230AirDryer(props: NodeProps) {
  return (
    <Shape
      {...X12230_AIR_DRYER}
      {...props}
      _style={extendStyle(X12230_AIR_DRYER, props)}
    />
  )
}
