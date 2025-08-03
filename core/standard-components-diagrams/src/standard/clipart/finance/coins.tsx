import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COINS = {
  _style:
    'image;html=1;image=img/lib/clip_art/finance/Coins_128x128.pngstrokeColor=none;',
  _width: 80,
  _height: 80,
}

export function Coins(props: DiagramNodeProps) {
  return <Shape {...COINS} {...props} />
}
