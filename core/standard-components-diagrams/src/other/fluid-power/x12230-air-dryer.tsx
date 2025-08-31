import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X12230_AIR_DRYER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x12230;points=[[0,0.365,0],[1,0.365,0],[0.5,1,0]]',
  },
  _width: 90.42,
  _height: 71.34,
}

export function X12230AirDryer(props: DiagramNodeProps) {
  return (
    <Shape
      {...X12230_AIR_DRYER}
      {...props}
      _style={extendStyle(X12230_AIR_DRYER, props)}
    />
  )
}
