import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X11800_INDICATOR_WITH = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11800;points=[[0,0,0],[0.5,0,0],[1,0,0],[1,0.5,0],[1,1,0],[0.5,1,0],[0,1,0],[0,0.5,0]]',
  },
  _original_width: 46.12,
  _original_height: 27.74,
}

export function X11800IndicatorWith(props: DiagramNodeProps) {
  return (
    <Shape
      {...X11800_INDICATOR_WITH}
      {...props}
      _style={extendStyle(X11800_INDICATOR_WITH, props)}
    />
  )
}
