import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X10040_CONTROL_MECHANISM = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10040;points=[[1,0.6,0]]',
  },
  _width: 18.7,
  _height: 26.36,
}

export function X10040ControlMechanism(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, X10040_CONTROL_MECHANISM)} />
  )
}
