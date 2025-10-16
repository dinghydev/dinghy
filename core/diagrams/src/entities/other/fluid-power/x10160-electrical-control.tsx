import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const X10160_ELECTRICAL_CONTROL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10160;points=[[0,0.39,0],[0,0.605,0],[0,0.82,0]]',
  },
  _width: 35.68,
  _height: 55.24,
}

export function X10160ElectricalControl(props: DiagramNodeProps) {
  return (
    <Shape
      {...X10160_ELECTRICAL_CONTROL}
      {...props}
      _style={extendStyle(X10160_ELECTRICAL_CONTROL, props)}
    />
  )
}
