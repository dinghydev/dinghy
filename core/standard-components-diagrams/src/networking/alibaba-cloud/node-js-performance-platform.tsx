import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NODE_JS_PERFORMANCE_PLATFORM = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.nodejs_performance_platform;',
  _width: 42,
  _height: 47.400000000000006,
}

export function NodeJsPerformancePlatform(props: DiagramNodeProps) {
  return <Shape {...NODE_JS_PERFORMANCE_PLATFORM} {...props} />
}
