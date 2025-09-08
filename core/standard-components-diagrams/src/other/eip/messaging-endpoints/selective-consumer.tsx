import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SELECTIVE_CONSUMER = {
  _style: {
    entity:
      'fillColor=#c0f5a9;dashed=0;outlineConnect=0;strokeWidth=2;html=1;align=center;fontSize=8;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.eip.selective_consumer;',
  },
  _original_width: 150,
  _original_height: 90,
}

export function SelectiveConsumer(props: DiagramNodeProps) {
  return (
    <Shape
      {...SELECTIVE_CONSUMER}
      {...props}
      _style={extendStyle(SELECTIVE_CONSUMER, props)}
    />
  )
}
