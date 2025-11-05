import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X11860_THERMOMETER_WITH = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11860;points=[[0.57,0,0],[0.28,1,0]]',
  },
  _original_width: 64.96,
  _original_height: 70.58,
}

export function X11860ThermometerWith(props: NodeProps) {
  return (
    <Shape
      {...X11860_THERMOMETER_WITH}
      {...props}
      _style={extendStyle(X11860_THERMOMETER_WITH, props)}
    />
  )
}
