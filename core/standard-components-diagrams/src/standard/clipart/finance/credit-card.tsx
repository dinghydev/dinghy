import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CREDIT_CARD = {
  _style:
    'image;html=1;image=img/lib/clip_art/finance/Credit_Card_128x128.pngstrokeColor=none;',
  _width: 60,
  _height: 60,
}

export function CreditCard(props: DiagramNodeProps) {
  return (
    <Shape
      {...CREDIT_CARD}
      {...props}
      _style={extendStyle(CREDIT_CARD, props)}
    />
  )
}
