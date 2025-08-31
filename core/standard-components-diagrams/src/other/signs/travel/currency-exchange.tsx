import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CURRENCY_EXCHANGE = {
  _style: {
    entity:
      'shape=mxgraph.signs.travel.currency_exchange;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 99,
  _height: 93,
}

export function CurrencyExchange(props: DiagramNodeProps) {
  return (
    <Shape
      {...CURRENCY_EXCHANGE}
      {...props}
      _style={extendStyle(CURRENCY_EXCHANGE, props)}
    />
  )
}
