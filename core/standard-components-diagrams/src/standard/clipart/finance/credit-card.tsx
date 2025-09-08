import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CREDIT_CARD = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/finance/Credit_Card_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
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
