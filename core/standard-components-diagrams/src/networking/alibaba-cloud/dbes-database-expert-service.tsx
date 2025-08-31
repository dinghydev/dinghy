import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DBES_DATABASE_EXPERT_SERVICE = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.dbes_database_expert_service;',
  _width: 47.400000000000006,
  _height: 47.400000000000006,
}

export function DbesDatabaseExpertService(props: DiagramNodeProps) {
  return (
    <Shape
      {...DBES_DATABASE_EXPERT_SERVICE}
      {...props}
      _style={extendStyle(DBES_DATABASE_EXPERT_SERVICE, props)}
    />
  )
}
