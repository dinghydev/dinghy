import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const XOR_IEC = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.iec_logic_gates.xor;',
  _width: 60,
  _height: 80,
}

export function XorIec(props: DiagramNodeProps) {
  return <Shape {...XOR_IEC} {...props} />
}
