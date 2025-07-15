import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const REALTIME_COMPUTE = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.realtime_compute;',
  _width: 60,
  _height: 60,
}

export function RealtimeCompute(props: DiagramNodeProps) {
  return <Shape {...REALTIME_COMPUTE} {...props} />
}
