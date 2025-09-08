import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const HEAT_CONSUMER = {
  _style: {
    entity:
      'shape=mxgraph.pid.driers.heat_consumer;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function HeatConsumer(props: DiagramNodeProps) {
  return (
    <Shape
      {...HEAT_CONSUMER}
      {...props}
      _style={extendStyle(HEAT_CONSUMER, props)}
    />
  )
}
