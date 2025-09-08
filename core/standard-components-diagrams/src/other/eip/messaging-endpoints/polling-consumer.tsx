import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const POLLING_CONSUMER = {
  _style: {
    entity:
      'fillColor=#c0f5a9;dashed=0;outlineConnect=0;strokeWidth=2;html=1;align=center;fontSize=8;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.eip.polling_consumer;',
  },
  _original_width: 150,
  _original_height: 90,
}

export function PollingConsumer(props: DiagramNodeProps) {
  return (
    <Shape
      {...POLLING_CONSUMER}
      {...props}
      _style={extendStyle(POLLING_CONSUMER, props)}
    />
  )
}
