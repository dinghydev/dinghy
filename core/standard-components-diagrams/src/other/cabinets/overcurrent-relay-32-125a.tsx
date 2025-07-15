import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const OVERCURRENT_RELAY_32_125A = {
  _style:
    'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.overcurrent_relay_32_125a;',
  _width: 30,
  _height: 16.5,
}

export function OvercurrentRelay32125a(props: DiagramNodeProps) {
  return <Shape {...OVERCURRENT_RELAY_32_125A} {...props} />
}
