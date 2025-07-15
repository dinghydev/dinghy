import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const OVERCURRENT_RELAY_1_32A = {
  _style:
    'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.overcurrent_relay_1_32a;',
  _width: 27,
  _height: 15,
}

export function OvercurrentRelay132a(props: DiagramNodeProps) {
  return <Shape {...OVERCURRENT_RELAY_1_32A} {...props} />
}
