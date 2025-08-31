import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X12260_COOLER_WITHOUT = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x12260;points=[[0.5,0,0],[0.5,1,0]]',
  _width: 52.44,
  _height: 99.6,
}

export function X12260CoolerWithout(props: DiagramNodeProps) {
  return (
    <Shape
      {...X12260_COOLER_WITHOUT}
      {...props}
      _style={extendStyle(X12260_COOLER_WITHOUT, props)}
    />
  )
}
