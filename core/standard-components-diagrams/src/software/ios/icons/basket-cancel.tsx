import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BASKET_CANCEL = {
  _style:
    'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.basket_cancel;',
  _width: 30,
  _height: 12,
}

export function BasketCancel(props: DiagramNodeProps) {
  return <Shape {...BASKET_CANCEL} {...props} />
}
