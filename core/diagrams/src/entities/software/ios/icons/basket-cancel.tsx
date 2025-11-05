import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BASKET_CANCEL = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.basket_cancel;',
  },
  _width: 30,
  _height: 12,
}

export function BasketCancel(props: NodeProps) {
  return (
    <Shape
      {...BASKET_CANCEL}
      {...props}
      _style={extendStyle(BASKET_CANCEL, props)}
    />
  )
}
