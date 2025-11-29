import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const POT_TRANS_3_WINDINGS = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.inductors.pot_trans_3_windings;',
  },
  _width: 67,
  _height: 96,
}

export function PotTrans3Windings(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, POT_TRANS_3_WINDINGS)} />
}
