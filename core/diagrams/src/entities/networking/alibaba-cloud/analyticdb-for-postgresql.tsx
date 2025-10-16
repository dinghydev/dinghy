import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ANALYTICDB_FOR_POSTGRESQL = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.analyticdb_for_postgresql;',
  },
  _original_width: 50.099999999999994,
  _original_height: 49.5,
}

export function AnalyticdbForPostgresql(props: DiagramNodeProps) {
  return (
    <Shape
      {...ANALYTICDB_FOR_POSTGRESQL}
      {...props}
      _style={extendStyle(ANALYTICDB_FOR_POSTGRESQL, props)}
    />
  )
}
