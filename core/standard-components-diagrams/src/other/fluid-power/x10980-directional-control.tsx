import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const X10980_DIRECTIONAL_CONTROL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10980;points=[[0.335,1,0],[1,0.6,0]]',
  },
  _original_width: 56.1,
  _original_height: 93.28,
}

export function X10980DirectionalControl(props: DiagramNodeProps) {
  return (
    <Shape
      {...X10980_DIRECTIONAL_CONTROL}
      {...props}
      _style={extendStyle(X10980_DIRECTIONAL_CONTROL, props)}
    />
  )
}
