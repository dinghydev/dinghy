import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BASKET_STRAINER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.piping.basket_strainer;',
  },
  _original_width: 50,
  _original_height: 45,
}

export function BasketStrainer(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BASKET_STRAINER)} />
}
