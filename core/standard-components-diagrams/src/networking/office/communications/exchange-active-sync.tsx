import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EXCHANGE_ACTIVE_SYNC = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.exchange_active_sync;',
  },
  _width: 49,
  _height: 49,
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
