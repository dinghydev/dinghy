import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PTS_PERFORMANCE_TEST_SERVICE = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.pts_performance_test_service;',
  _width: 49.8,
  _height: 41.1,
}

export function PtsPerformanceTestService(props: DiagramNodeProps) {
  return (
    <Shape
      {...PTS_PERFORMANCE_TEST_SERVICE}
      {...props}
      _style={extendStyle(PTS_PERFORMANCE_TEST_SERVICE, props)}
    />
  )
}
