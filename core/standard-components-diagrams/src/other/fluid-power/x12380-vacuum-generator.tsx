import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const X12380_VACUUM_GENERATOR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x12380;points=[[0,0.335,0],[1,0.335,0],[0.5,1,0]]',
  },
  _original_width: 112.26,
  _original_height: 55.92,
}

export function X12380VacuumGenerator(props: DiagramNodeProps) {
  return (
    <Shape
      {...X12380_VACUUM_GENERATOR}
      {...props}
      _style={extendStyle(X12380_VACUUM_GENERATOR, props)}
    />
  )
}
