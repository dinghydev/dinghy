import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const X11600_BELLOWS_CYLINDER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11600;points=[[0.5,1,0]]',
  },
  _original_width: 75.04,
  _original_height: 56,
}

export function X11600BellowsCylinder(props: DiagramNodeProps) {
  return (
    <Shape
      {...X11600_BELLOWS_CYLINDER}
      {...props}
      _style={extendStyle(X11600_BELLOWS_CYLINDER, props)}
    />
  )
}
