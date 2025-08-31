import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X11400_COMPRESSOR = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11400;points=[[0.666,0,0],[0.666,1,0]]',
  _width: 83.22,
  _height: 93.94,
}

export function X11400Compressor(props: DiagramNodeProps) {
  return (
    <Shape
      {...X11400_COMPRESSOR}
      {...props}
      _style={extendStyle(X11400_COMPRESSOR, props)}
    />
  )
}
