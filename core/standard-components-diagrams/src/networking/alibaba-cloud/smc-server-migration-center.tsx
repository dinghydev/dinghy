import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SMC_SERVER_MIGRATION_CENTER = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.smc_server_migration_center;',
  _width: 54.900000000000006,
  _height: 54.900000000000006,
}

export function SmcServerMigrationCenter(props: DiagramNodeProps) {
  return <Shape {...SMC_SERVER_MIGRATION_CENTER} {...props} />
}
