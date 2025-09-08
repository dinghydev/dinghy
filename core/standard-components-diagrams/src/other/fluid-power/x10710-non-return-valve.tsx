import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const X10710_NON_RETURN_VALVE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10710;points=[[0.5,0,0],[0.5,1,0]]',
  },
  _original_width: 18.96,
  _original_height: 74.8,
}

export function X10710NonReturnValve(props: DiagramNodeProps) {
  return (
    <Shape
      {...X10710_NON_RETURN_VALVE}
      {...props}
      _style={extendStyle(X10710_NON_RETURN_VALVE, props)}
    />
  )
}
