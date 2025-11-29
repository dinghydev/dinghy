import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CONSUMER_GOODS_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.consumer_goods2;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function ConsumerGoods2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CONSUMER_GOODS_2)} />
}
