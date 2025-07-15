import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STOCK_UP = {
  _style: 'image;html=1;image=img/lib/clip_art/finance/Stock_Up_128x128.png',
  _width: 80,
  _height: 80,
}

export function StockUp(props: DiagramNodeProps) {
  return <Shape {...STOCK_UP} {...props} />
}
