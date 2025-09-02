import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X10550_DIRECTLY_CONTROLLED = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10550;points=[[0.44,0,0],[0.44,1,0],[0.885,1,0]]',
  },
  _original_width: 83.56,
  _original_height: 75.54,
}

export function X10550DirectlyControlled(props: DiagramNodeProps) {
  return (
    <Shape
      {...X10550_DIRECTLY_CONTROLLED}
      {...props}
      _style={extendStyle(X10550_DIRECTLY_CONTROLLED, props)}
    />
  )
}
