import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MS_EXCHANGE_ITEMS = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.ms_exchange_items;',
  },
  _original_width: 81.6,
  _original_height: 69.2,
}

export function MsExchangeItems(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MS_EXCHANGE_ITEMS)} />
}
