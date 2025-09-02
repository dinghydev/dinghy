import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DG_DATABASE_GATEWAY = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.dg_database_gateway;',
  },
  _original_width: 39.900000000000006,
  _original_height: 54.900000000000006,
}

export function DgDatabaseGateway(props: DiagramNodeProps) {
  return (
    <Shape
      {...DG_DATABASE_GATEWAY}
      {...props}
      _style={extendStyle(DG_DATABASE_GATEWAY, props)}
    />
  )
}
