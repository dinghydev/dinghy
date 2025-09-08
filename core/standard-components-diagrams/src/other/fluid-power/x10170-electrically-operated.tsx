import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const X10170_ELECTRICALLY_OPERATED = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10170;points=[[0,0,0],[0,0.5,0],[0,1,0],[1,0,0],[1,0.5,0],[1,1,0],[0.5,0,0],[0.5,1,0]]',
  },
  _original_width: 55.94,
  _original_height: 18.62,
}

export function X10170ElectricallyOperated(props: DiagramNodeProps) {
  return (
    <Shape
      {...X10170_ELECTRICALLY_OPERATED}
      {...props}
      _style={extendStyle(X10170_ELECTRICALLY_OPERATED, props)}
    />
  )
}
