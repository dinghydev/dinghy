import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONSUMER_GOODS_2 = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.consumer_goods2;',
  _width: 60,
  _height: 60,
}

export function ConsumerGoods2(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONSUMER_GOODS_2}
      {...props}
      _style={extendStyle(CONSUMER_GOODS_2, props)}
    />
  )
}
