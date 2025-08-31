import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NO_SYMBOL = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.no_symbol',
  _width: 60,
  _height: 60,
}

export function NoSymbol(props: DiagramNodeProps) {
  return (
    <Shape {...NO_SYMBOL} {...props} _style={extendStyle(NO_SYMBOL, props)} />
  )
}
