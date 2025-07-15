import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STOCK_DOWN = {
  _style: 'image;html=1;image=img/lib/clip_art/finance/Stock_Down_128x128.png',
  _width: 80,
  _height: 80,
}

export function StockDown(props: DiagramNodeProps) {
  return <Shape {...STOCK_DOWN} {...props} />
}
