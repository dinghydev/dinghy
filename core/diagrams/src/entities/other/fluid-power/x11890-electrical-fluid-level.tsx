import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X11890_ELECTRICAL_FLUID_LEVEL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11890;points=[[0.225,1,0]]',
  },
  _original_width: 83.86,
  _original_height: 65.24,
}

export function X11890ElectricalFluidLevel(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, X11890_ELECTRICAL_FLUID_LEVEL)}
    />
  )
}
