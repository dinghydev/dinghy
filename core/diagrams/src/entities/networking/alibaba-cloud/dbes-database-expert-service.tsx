import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DBES_DATABASE_EXPERT_SERVICE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.dbes_database_expert_service;',
  },
  _original_width: 47.400000000000006,
  _original_height: 47.400000000000006,
}

export function DbesDatabaseExpertService(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, DBES_DATABASE_EXPERT_SERVICE)}
    />
  )
}
