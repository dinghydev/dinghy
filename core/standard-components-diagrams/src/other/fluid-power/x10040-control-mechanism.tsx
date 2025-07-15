import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const X10040_CONTROL_MECHANISM = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10040;points=[[1,0.6,0]]',
  _width: 18.7,
  _height: 26.36,
}

export function X10040ControlMechanism(props: DiagramNodeProps) {
  return <Shape {...X10040_CONTROL_MECHANISM} {...props} />
}
