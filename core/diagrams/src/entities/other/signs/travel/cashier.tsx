import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CASHIER = {
  _style: {
    entity:
      'shape=mxgraph.signs.travel.cashier;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 99,
  _original_height: 99,
}

export function Cashier(props: NodeProps) {
  return <Shape {...CASHIER} {...props} _style={extendStyle(CASHIER, props)} />
}
