import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const X10010_CONTROL_MECHANISM = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10010;points=[[0,0.68,0],[0.78,0,0],[1,0.51,0],[1,0.84,0]]',
  },
  _width: 41.9,
  _height: 28.48,
}

export function X10010ControlMechanism(props: DiagramNodeProps) {
  return (
    <Shape
      {...X10010_CONTROL_MECHANISM}
      {...props}
      _style={extendStyle(X10010_CONTROL_MECHANISM, props)}
    />
  )
}
