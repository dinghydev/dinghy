import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const X12350_GAS_BOTTLE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x12350;points=[[0.5,1,0]]',
  },
  _original_width: 37.06,
  _original_height: 92.92,
}

export function X12350GasBottle(props: DiagramNodeProps) {
  return (
    <Shape
      {...X12350_GAS_BOTTLE}
      {...props}
      _style={extendStyle(X12350_GAS_BOTTLE, props)}
    />
  )
}
