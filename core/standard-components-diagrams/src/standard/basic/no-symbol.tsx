import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NO_SYMBOL = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.no_symbol',
  _width: 100,
  _height: 100,
}

export function NoSymbol(props: DiagramNodeProps) {
  return <Shape {...NO_SYMBOL} {...props} />
}
