import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STOCK_UP = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/finance/Stock_Up_128x128.pngstrokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function StockUp(props: DiagramNodeProps) {
  return (
    <Shape {...STOCK_UP} {...props} _style={extendStyle(STOCK_UP, props)} />
  )
}
