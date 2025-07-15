import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const OR_IEC = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.iec_logic_gates.or;',
  _width: 60,
  _height: 80,
}

export function OrIec(props: DiagramNodeProps) {
  return <Shape {...OR_IEC} {...props} />
}
