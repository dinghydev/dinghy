import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NAND_IEC = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.iec_logic_gates.nand_2;',
  _width: 66,
  _height: 80,
}

export function NandIec(props: DiagramNodeProps) {
  return <Shape {...NAND_IEC} {...props} />
}
