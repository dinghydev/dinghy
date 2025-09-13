import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CREDIT_CARD = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.credit_card;',
  },
  _width: 55,
  _height: 36,
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
