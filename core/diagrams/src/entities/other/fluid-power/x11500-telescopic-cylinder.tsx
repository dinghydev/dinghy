import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X11500_TELESCOPIC_CYLINDER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11500;points=[[0.025,1,0]]',
  },
  _width: 171.96,
  _height: 65.4,
}

export function X11500TelescopicCylinder(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, X11500_TELESCOPIC_CYLINDER)} />
  )
}
