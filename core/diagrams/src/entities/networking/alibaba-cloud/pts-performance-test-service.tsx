import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PTS_PERFORMANCE_TEST_SERVICE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.pts_performance_test_service;',
  },
  _original_width: 49.8,
  _original_height: 41.1,
}

export function PtsPerformanceTestService(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, PTS_PERFORMANCE_TEST_SERVICE)}
    />
  )
}
