import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DAS_DATABASE_AUTONOMY_SERVICE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.das_database_autonomy_service;',
  },
  _original_width: 47.400000000000006,
  _original_height: 47.400000000000006,
}

export function DasDatabaseAutonomyService(props: DiagramNodeProps) {
  return (
    <Shape
      {...DAS_DATABASE_AUTONOMY_SERVICE}
      {...props}
      _style={extendStyle(DAS_DATABASE_AUTONOMY_SERVICE, props)}
    />
  )
}
