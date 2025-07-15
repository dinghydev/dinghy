import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ACTUATOR = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#A153A0;verticalAlign=top;align=center;pointerEvents=1;shape=mxgraph.cisco_safe.design.actuator;',
  _width: 50,
  _height: 45,
}

export function Actuator(props: DiagramNodeProps) {
  return <Shape {...ACTUATOR} {...props} />
}
