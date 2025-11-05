import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X11880_FLUID_LEVEL_SWITCH = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11880;points=[[0.28,1,0]]',
  },
  _original_width: 65.32,
  _original_height: 56.18,
}

export function X11880FluidLevelSwitch(props: NodeProps) {
  return (
    <Shape
      {...X11880_FLUID_LEVEL_SWITCH}
      {...props}
      _style={extendStyle(X11880_FLUID_LEVEL_SWITCH, props)}
    />
  )
}
