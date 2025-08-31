import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X11810_ACOUSTIC_INDICATOR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11810;points=[[0,0,0],[0.5,0,0],[1,0,0],[1,0.5,0],[1,1,0],[0.5,1,0],[0,1,0],[0,0.5,0]]',
  },
  _width: 46.12,
  _height: 27.74,
}

export function X11810AcousticIndicator(props: DiagramNodeProps) {
  return (
    <Shape
      {...X11810_ACOUSTIC_INDICATOR}
      {...props}
      _style={extendStyle(X11810_ACOUSTIC_INDICATOR, props)}
    />
  )
}
