import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CURRENCY_EXCHANGE = {
  _style:
    'shape=mxgraph.signs.travel.currency_exchange;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 99,
  _height: 93,
}

export function CurrencyExchange(props: DiagramNodeProps) {
  return <Shape {...CURRENCY_EXCHANGE} {...props} />
}
