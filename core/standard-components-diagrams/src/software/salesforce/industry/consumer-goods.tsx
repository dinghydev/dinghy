import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CONSUMER_GOODS = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.consumer_goods;',
  _width: 54,
  _height: 60,
}

export function ConsumerGoods(props: DiagramNodeProps) {
  return <Shape {...CONSUMER_GOODS} {...props} />
}
