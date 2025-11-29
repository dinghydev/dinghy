import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X12290_HEATER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x12290;points=[[0.5,0,0],[0.5,1,0]]',
  },
  _width: 52.44,
  _height: 99.6,
}

export function X12290Heater(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, X12290_HEATER)} />
}
