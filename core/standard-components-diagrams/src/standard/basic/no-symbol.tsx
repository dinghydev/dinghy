import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NO_SYMBOL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.no_symbol',
  },
  _original_width: 100,
  _original_height: 100,
}

export function NoSymbol(props: DiagramNodeProps) {
  return (
    <Shape {...NO_SYMBOL} {...props} _style={extendStyle(NO_SYMBOL, props)} />
  )
}
