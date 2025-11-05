import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X12130_VACUUM_SEPARATOR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x12130;points=[[0,0.5,0],[1,0.5,0]]',
  },
  _width: 90.42,
  _height: 52.4,
}

export function X12130VacuumSeparator(props: NodeProps) {
  return (
    <Shape
      {...X12130_VACUUM_SEPARATOR}
      {...props}
      _style={extendStyle(X12130_VACUUM_SEPARATOR, props)}
    />
  )
}
