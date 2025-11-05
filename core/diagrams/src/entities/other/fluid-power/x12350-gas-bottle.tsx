import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X12350_GAS_BOTTLE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x12350;points=[[0.5,1,0]]',
  },
  _width: 37.06,
  _height: 92.92,
}

export function X12350GasBottle(props: NodeProps) {
  return (
    <Shape
      {...X12350_GAS_BOTTLE}
      {...props}
      _style={extendStyle(X12350_GAS_BOTTLE, props)}
    />
  )
}
