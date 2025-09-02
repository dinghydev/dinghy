import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X11470_DOUBLE_ACTING_DIAPHRAGM = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11470;points=[[0.28,1,0],[0.76,1,0]]',
  },
  _original_width: 155.38,
  _original_height: 60.64,
}

export function X11470DoubleActingDiaphragm(props: DiagramNodeProps) {
  return (
    <Shape
      {...X11470_DOUBLE_ACTING_DIAPHRAGM}
      {...props}
      _style={extendStyle(X11470_DOUBLE_ACTING_DIAPHRAGM, props)}
    />
  )
}
