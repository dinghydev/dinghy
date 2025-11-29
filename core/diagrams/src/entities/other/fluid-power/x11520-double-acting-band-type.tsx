import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X11520_DOUBLE_ACTING_BAND_TYPE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11520;points=[[0.05,1,0],[0.94,1,0]]',
  },
  _original_width: 83.5,
  _original_height: 65.44,
}

export function X11520DoubleActingBandType(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, X11520_DOUBLE_ACTING_BAND_TYPE)}
    />
  )
}
