import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X12200_FLUID_SEPARATOR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x12200;points=[[0,0.365,0],[1,0.365,0],[0.5,1,0]]',
  },
  _original_width: 90.42,
  _original_height: 71.34,
}

export function X12200FluidSeparator(props: NodeProps) {
  return (
    <Shape
      {...X12200_FLUID_SEPARATOR}
      {...props}
      _style={extendStyle(X12200_FLUID_SEPARATOR, props)}
    />
  )
}
