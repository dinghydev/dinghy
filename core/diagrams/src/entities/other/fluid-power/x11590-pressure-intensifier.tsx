import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X11590_PRESSURE_INTENSIFIER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11590;points=[[0.053,1,0],[0.94,1,0]]',
  },
  _original_width: 83.48,
  _original_height: 72.06,
}

export function X11590PressureIntensifier(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, X11590_PRESSURE_INTENSIFIER)}
    />
  )
}
