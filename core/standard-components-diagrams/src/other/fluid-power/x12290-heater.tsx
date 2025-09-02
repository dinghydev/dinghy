import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X12290_HEATER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x12290;points=[[0.5,0,0],[0.5,1,0]]',
  },
  _original_width: 52.44,
  _original_height: 99.6,
}

export function X12290Heater(props: DiagramNodeProps) {
  return (
    <Shape
      {...X12290_HEATER}
      {...props}
      _style={extendStyle(X12290_HEATER, props)}
    />
  )
}
