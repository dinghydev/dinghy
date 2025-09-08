import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CLOUD_EXCHANGE_ONLINE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;outlineConnect=0;verticalAlign=top;align=center;shape=mxgraph.office.clouds.cloud_exchange_online;',
  },
  _original_width: 100,
  _original_height: 61,
}

export function CloudExchangeOnline(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLOUD_EXCHANGE_ONLINE}
      {...props}
      _style={extendStyle(CLOUD_EXCHANGE_ONLINE, props)}
    />
  )
}
