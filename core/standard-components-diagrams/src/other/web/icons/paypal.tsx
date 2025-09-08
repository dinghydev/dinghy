import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PAYPAL = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.paypal;gradientColor=#DFDEDE',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function Paypal(props: DiagramNodeProps) {
  return <Shape {...PAYPAL} {...props} _style={extendStyle(PAYPAL, props)} />
}
