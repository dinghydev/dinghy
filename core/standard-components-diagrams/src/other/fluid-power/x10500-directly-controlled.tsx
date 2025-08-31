import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X10500_DIRECTLY_CONTROLLED = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10500;points=[[0.47,0,0],[0.47,1,0]]',
  },
  _width: 79.06,
  _height: 75.54,
}

export function X10500DirectlyControlled(props: DiagramNodeProps) {
  return (
    <Shape
      {...X10500_DIRECTLY_CONTROLLED}
      {...props}
      _style={extendStyle(X10500_DIRECTLY_CONTROLLED, props)}
    />
  )
}
