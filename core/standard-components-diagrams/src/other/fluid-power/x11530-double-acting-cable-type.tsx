import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const X11530_DOUBLE_ACTING_CABLE_TYPE = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11530;points=[[0.05,1,0],[0.94,1,0]]',
  _width: 83.5,
  _height: 73.8,
}

export function X11530DoubleActingCableType(props: DiagramNodeProps) {
  return <Shape {...X11530_DOUBLE_ACTING_CABLE_TYPE} {...props} />
}
