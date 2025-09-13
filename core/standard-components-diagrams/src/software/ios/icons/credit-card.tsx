import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CREDIT_CARD = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.credit_card;',
  },
  _width: 30,
  _height: 15,
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
