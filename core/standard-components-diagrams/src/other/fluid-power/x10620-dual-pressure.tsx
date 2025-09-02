import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X10620_DUAL_PRESSURE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10620;points=[[0.5,0,0],[0,0.66,0],[1,0.66,0]]',
  },
  _original_width: 112.1,
  _original_height: 55.84,
}

export function X10620DualPressure(props: DiagramNodeProps) {
  return (
    <Shape
      {...X10620_DUAL_PRESSURE}
      {...props}
      _style={extendStyle(X10620_DUAL_PRESSURE, props)}
    />
  )
}
