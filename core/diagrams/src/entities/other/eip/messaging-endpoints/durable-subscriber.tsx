import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DURABLE_SUBSCRIBER = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;strokeWidth=2;html=1;align=center;fontSize=8;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.eip.durable_subscriber;fillColor=#a0a0a0;',
  },
  _width: 30,
  _height: 35,
}

export function DurableSubscriber(props: DiagramNodeProps) {
  return (
    <Shape
      {...DURABLE_SUBSCRIBER}
      {...props}
      _style={extendStyle(DURABLE_SUBSCRIBER, props)}
    />
  )
}
