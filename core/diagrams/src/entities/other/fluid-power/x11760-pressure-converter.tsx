import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X11760_PRESSURE_CONVERTER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11760;points=[[0.4,0,0],[0,0.7,0]]',
  },
  _original_width: 46.82,
  _original_height: 47.12,
}

export function X11760PressureConverter(props: NodeProps) {
  return (
    <Shape
      {...X11760_PRESSURE_CONVERTER}
      {...props}
      _style={extendStyle(X11760_PRESSURE_CONVERTER, props)}
    />
  )
}
