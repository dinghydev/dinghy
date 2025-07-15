import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PAYPAL = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.paypal',
  _width: 51.2,
  _height: 58,
}

export function Paypal(props: DiagramNodeProps) {
  return <Shape {...PAYPAL} {...props} />
}
