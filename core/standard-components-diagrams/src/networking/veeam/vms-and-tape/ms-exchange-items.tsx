import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MS_EXCHANGE_ITEMS = {
  _style:
    'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.ms_exchange_items;',
  _width: 81.6,
  _height: 69.2,
}

export function MsExchangeItems(props: DiagramNodeProps) {
  return (
    <Shape
      {...MS_EXCHANGE_ITEMS}
      {...props}
      _style={extendStyle(MS_EXCHANGE_ITEMS, props)}
    />
  )
}
