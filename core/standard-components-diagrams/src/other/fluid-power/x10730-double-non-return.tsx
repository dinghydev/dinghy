import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X10730_DOUBLE_NON_RETURN = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10730;points=[[0.248,0,0],[0.248,1,0],[0.75,0,0],[0.75,1,0]]',
  _width: 73.84,
  _height: 93.46,
}

export function X10730DoubleNonReturn(props: DiagramNodeProps) {
  return (
    <Shape
      {...X10730_DOUBLE_NON_RETURN}
      {...props}
      _style={extendStyle(X10730_DOUBLE_NON_RETURN, props)}
    />
  )
}
