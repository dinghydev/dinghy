import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X12280_COOLER_WITH = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x12280;points=[[0.791,0,0],[0.791,1,0]]',
  },
  _width: 211.14,
  _height: 130.4,
}

export function X12280CoolerWith(props: DiagramNodeProps) {
  return (
    <Shape
      {...X12280_COOLER_WITH}
      {...props}
      _style={extendStyle(X12280_COOLER_WITH, props)}
    />
  )
}
