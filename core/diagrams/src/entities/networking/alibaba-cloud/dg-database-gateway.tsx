import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DG_DATABASE_GATEWAY = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.dg_database_gateway;',
  },
  _width: 39.900000000000006,
  _height: 54.900000000000006,
}

export function DgDatabaseGateway(props: NodeProps) {
  return (
    <Shape
      {...DG_DATABASE_GATEWAY}
      {...props}
      _style={extendStyle(DG_DATABASE_GATEWAY, props)}
    />
  )
}
