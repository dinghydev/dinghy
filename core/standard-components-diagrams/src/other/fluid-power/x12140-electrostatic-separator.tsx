import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X12140_ELECTROSTATIC_SEPARATOR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x12140;points=[[0,0.5,0],[1,0.5,0]]',
  },
  _original_width: 90.42,
  _original_height: 52.4,
}

export function X12140ElectrostaticSeparator(props: DiagramNodeProps) {
  return (
    <Shape
      {...X12140_ELECTROSTATIC_SEPARATOR}
      {...props}
      _style={extendStyle(X12140_ELECTROSTATIC_SEPARATOR, props)}
    />
  )
}
