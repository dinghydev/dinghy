import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LOG_STREAMING = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.log_streaming;',
  },
  _original_width: 47.400000000000006,
  _original_height: 45.3,
}

export function LogStreaming(props: DiagramNodeProps) {
  return (
    <Shape
      {...LOG_STREAMING}
      {...props}
      _style={extendStyle(LOG_STREAMING, props)}
    />
  )
}
