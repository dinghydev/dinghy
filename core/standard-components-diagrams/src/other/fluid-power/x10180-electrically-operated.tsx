import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X10180_ELECTRICALLY_OPERATED = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10180;points=[[0,0,0],[0,0.25,0],[0,0.5,0],[1,0,0],[1,0.25,0],[1,0.5,0],[0.5,0,0],[0.5,1,0]]',
  },
  _original_width: 55.94,
  _original_height: 37.22,
}

export function X10180ElectricallyOperated(props: DiagramNodeProps) {
  return (
    <Shape
      {...X10180_ELECTRICALLY_OPERATED}
      {...props}
      _style={extendStyle(X10180_ELECTRICALLY_OPERATED, props)}
    />
  )
}
