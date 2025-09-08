import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const X10370_4_3_DIRECTIONAL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10370;points=[[0.445,0,0],[0.445,1,0],[0.555,0,0],[0.555,1,0],[0,0.5,0],[0,0.625,0],[0,0.75,0],[1,0.5,0],[1,0.625,0],[1,0.75,0],[0.222,0.25,0],[0.222,0.75,0],[0.335,0.25,0],[0.335,0.75,0],[0.665,0.25,0],[0.665,0.75,0],[0.777,0.25,0],[0.777,0.75,0]]',
  },
  _original_width: 167.16,
  _original_height: 74.48,
}

export function X1037043Directional(props: DiagramNodeProps) {
  return (
    <Shape
      {...X10370_4_3_DIRECTIONAL}
      {...props}
      _style={extendStyle(X10370_4_3_DIRECTIONAL, props)}
    />
  )
}
