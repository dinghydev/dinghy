import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CONSUMER_GOODS = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.consumer_goods;',
  },
  _original_width: 54,
  _original_height: 60,
}

export function ConsumerGoods(props: NodeProps) {
  return (
    <Shape
      {...CONSUMER_GOODS}
      {...props}
      _style={extendStyle(CONSUMER_GOODS, props)}
    />
  )
}
