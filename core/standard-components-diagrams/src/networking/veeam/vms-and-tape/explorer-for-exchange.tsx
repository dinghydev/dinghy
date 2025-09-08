import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const EXPLORER_FOR_EXCHANGE = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.veeam_explorer_for_exchange;',
  },
  _original_width: 44.8,
  _original_height: 44.8,
}

export function ExplorerForExchange(props: DiagramNodeProps) {
  return (
    <Shape
      {...EXPLORER_FOR_EXCHANGE}
      {...props}
      _style={extendStyle(EXPLORER_FOR_EXCHANGE, props)}
    />
  )
}
