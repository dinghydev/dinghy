import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const X10810_ELECTRO_HYDRAULIC_LINEAR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10810;points=[[0.272,1,0],[0.364,1,0]]',
  },
  _width: 204.2,
  _height: 157.64,
}

export function X10810ElectroHydraulicLinear(props: DiagramNodeProps) {
  return (
    <Shape
      {...X10810_ELECTRO_HYDRAULIC_LINEAR}
      {...props}
      _style={extendStyle(X10810_ELECTRO_HYDRAULIC_LINEAR, props)}
    />
  )
}
