import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STOCK_DOWN = {
  _style:
    'image;html=1;image=img/lib/clip_art/finance/Stock_Down_128x128.pngstrokeColor=none;',
  _width: 60,
  _height: 60,
}

export function StockDown(props: DiagramNodeProps) {
  return (
    <Shape {...STOCK_DOWN} {...props} _style={extendStyle(STOCK_DOWN, props)} />
  )
}
