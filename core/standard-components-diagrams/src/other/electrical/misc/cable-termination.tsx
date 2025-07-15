import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CABLE_TERMINATION = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.cable_termination',
  _width: 100,
  _height: 50,
}

export function CableTermination(props: DiagramNodeProps) {
  return <Shape {...CABLE_TERMINATION} {...props} />
}
