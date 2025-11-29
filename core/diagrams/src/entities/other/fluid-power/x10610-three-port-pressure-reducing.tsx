import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X10610_THREE_PORT_PRESSURE_REDUCING = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10610;points=[[0.35,0,0],[0.35,1,0],[0.585,1,0]]',
  },
  _original_width: 79.06,
  _original_height: 74.7,
}

export function X10610ThreePortPressureReducing(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, X10610_THREE_PORT_PRESSURE_REDUCING)}
    />
  )
}
