import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X11500_TELESCOPIC_CYLINDER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11500;points=[[0.025,1,0]]',
  },
  _original_width: 171.96,
  _original_height: 65.4,
}

export function X11500TelescopicCylinder(props: DiagramNodeProps) {
  return (
    <Shape
      {...X11500_TELESCOPIC_CYLINDER}
      {...props}
      _style={extendStyle(X11500_TELESCOPIC_CYLINDER, props)}
    />
  )
}
