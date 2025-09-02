import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const KAFKA = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.kafka;',
  },
  _original_width: 56.699999999999996,
  _original_height: 42,
}

export function Kafka(props: DiagramNodeProps) {
  return <Shape {...KAFKA} {...props} _style={extendStyle(KAFKA, props)} />
}
