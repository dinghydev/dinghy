import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X10420_5_3_DIRECTIONAL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10420;points=[[0.425,0,0],[0.425,1,0],[0.578,0,0],[0.578,1,0],[0.5,1,0],[0.195,0.25,0],[0.195,0.75,0],[0.27,0.75,0],[0.348,0.25,0],[0.348,0.75,0],[0.655,0.25,0],[0.655,0.75,0],[0.808,0.25,0],[0.732,0.75,0],[0.808,0.75,0]]',
  },
  _width: 242.26,
  _height: 75.06,
}

export function X1042053Directional(props: NodeProps) {
  return (
    <Shape
      {...X10420_5_3_DIRECTIONAL}
      {...props}
      _style={extendStyle(X10420_5_3_DIRECTIONAL, props)}
    />
  )
}
