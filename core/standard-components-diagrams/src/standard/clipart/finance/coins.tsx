import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COINS = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/finance/Coins_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function Coins(props: DiagramNodeProps) {
  return <Shape {...COINS} {...props} _style={extendStyle(COINS, props)} />
}
