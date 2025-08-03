import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CREDIT_CARD = {
  _style:
    'image;html=1;image=img/lib/clip_art/finance/Credit_Card_128x128.pngstrokeColor=none;',
  _width: 80,
  _height: 80,
}

export function CreditCard(props: DiagramNodeProps) {
  return <Shape {...CREDIT_CARD} {...props} />
}
