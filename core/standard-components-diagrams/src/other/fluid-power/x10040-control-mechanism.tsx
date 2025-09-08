import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const X10040_CONTROL_MECHANISM = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10040;points=[[1,0.6,0]]',
  },
  _original_width: 18.7,
  _original_height: 26.36,
}

export function X10040ControlMechanism(props: DiagramNodeProps) {
  return (
    <Shape
      {...X10040_CONTROL_MECHANISM}
      {...props}
      _style={extendStyle(X10040_CONTROL_MECHANISM, props)}
    />
  )
}
