import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const X12160_AIR_CONDITIONING_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x12160_simplified;points=[[0,0.5,0],[1,0.5,0]]',
  },
  _original_width: 130.68,
  _original_height: 55.78,
}

export function X12160AirConditioning2(props: DiagramNodeProps) {
  return (
    <Shape
      {...X12160_AIR_CONDITIONING_2}
      {...props}
      _style={extendStyle(X12160_AIR_CONDITIONING_2, props)}
    />
  )
}
