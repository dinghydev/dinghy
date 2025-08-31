import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X11480_SINGLE_ACTING_DIAPHRAGM = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11480;points=[[0.53,1,0]]',
  _width: 149.12,
  _height: 56.04,
}

export function X11480SingleActingDiaphragm(props: DiagramNodeProps) {
  return (
    <Shape
      {...X11480_SINGLE_ACTING_DIAPHRAGM}
      {...props}
      _style={extendStyle(X11480_SINGLE_ACTING_DIAPHRAGM, props)}
    />
  )
}
