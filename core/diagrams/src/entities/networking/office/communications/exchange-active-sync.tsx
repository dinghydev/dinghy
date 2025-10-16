import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const EXCHANGE_ACTIVE_SYNC = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.exchange_active_sync;',
  },
  _original_width: 49,
  _original_height: 49,
}

export function ExchangeActiveSync(props: DiagramNodeProps) {
  return (
    <Shape
      {...EXCHANGE_ACTIVE_SYNC}
      {...props}
      _style={extendStyle(EXCHANGE_ACTIVE_SYNC, props)}
    />
  )
}
