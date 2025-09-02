import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X11870_FLUID_LEVEL_INDICATOR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11870;points=[[0.5,1,0]]',
  },
  _original_width: 37.44,
  _original_height: 56.18,
}

export function X11870FluidLevelIndicator(props: DiagramNodeProps) {
  return (
    <Shape
      {...X11870_FLUID_LEVEL_INDICATOR}
      {...props}
      _style={extendStyle(X11870_FLUID_LEVEL_INDICATOR, props)}
    />
  )
}
