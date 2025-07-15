import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AND_IEC = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.iec_logic_gates.and;',
  _width: 60,
  _height: 80,
}

export function AndIec(props: DiagramNodeProps) {
  return <Shape {...AND_IEC} {...props} />
}
