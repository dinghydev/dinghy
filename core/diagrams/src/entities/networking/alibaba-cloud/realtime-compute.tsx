import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const REALTIME_COMPUTE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.realtime_compute;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function RealtimeCompute(props: DiagramNodeProps) {
  return (
    <Shape
      {...REALTIME_COMPUTE}
      {...props}
      _style={extendStyle(REALTIME_COMPUTE, props)}
    />
  )
}
