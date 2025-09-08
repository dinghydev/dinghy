import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const X10350_4_2_DIRECTIONAL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10350;points=[[0.665,0,0],[0.665,1,0],[0.785,0,0],[0.785,1,0],[0,0.5,0],[0,0.625,0],[0,0.75,0],[0.42,0.25,0],[0.42,0.75,0],[0.545,0.25,0],[0.545,0.75,0]]',
  },
  _original_width: 153.38,
  _original_height: 74.48,
}

export function X1035042Directional(props: DiagramNodeProps) {
  return (
    <Shape
      {...X10350_4_2_DIRECTIONAL}
      {...props}
      _style={extendStyle(X10350_4_2_DIRECTIONAL, props)}
    />
  )
}
