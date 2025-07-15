import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const POT_TRANS_3_WINDINGS = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.inductors.pot_trans_3_windings;',
  _width: 67,
  _height: 96,
}

export function PotTrans3Windings(props: DiagramNodeProps) {
  return <Shape {...POT_TRANS_3_WINDINGS} {...props} />
}
