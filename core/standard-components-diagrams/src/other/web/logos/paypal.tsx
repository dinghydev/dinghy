import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PAYPAL = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.paypal',
  },
  _original_width: 51.2,
  _original_height: 58,
}

export function Paypal(props: DiagramNodeProps) {
  return <Shape {...PAYPAL} {...props} _style={extendStyle(PAYPAL, props)} />
}
