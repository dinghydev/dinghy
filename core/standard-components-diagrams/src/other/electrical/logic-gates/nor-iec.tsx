import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NOR_IEC = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.iec_logic_gates.nor_2;',
  _width: 66,
  _height: 80,
}

export function NorIec(props: DiagramNodeProps) {
  return <Shape {...NOR_IEC} {...props} _style={extendStyle(NOR_IEC, props)} />
}
