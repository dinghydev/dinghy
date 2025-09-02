import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STOCK_DOWN = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/finance/Stock_Down_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function StockDown(props: DiagramNodeProps) {
  return (
    <Shape {...STOCK_DOWN} {...props} _style={extendStyle(STOCK_DOWN, props)} />
  )
}
