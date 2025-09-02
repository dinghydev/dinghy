import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SMC_SERVER_MIGRATION_CENTER = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.smc_server_migration_center;',
  },
  _original_width: 54.900000000000006,
  _original_height: 54.900000000000006,
}

export function SmcServerMigrationCenter(props: DiagramNodeProps) {
  return (
    <Shape
      {...SMC_SERVER_MIGRATION_CENTER}
      {...props}
      _style={extendStyle(SMC_SERVER_MIGRATION_CENTER, props)}
    />
  )
}
