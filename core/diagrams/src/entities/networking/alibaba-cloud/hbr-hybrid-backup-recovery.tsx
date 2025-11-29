import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HBR_HYBRID_BACKUP_RECOVERY = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.hbr_hybrid_backup_recovery;',
  },
  _original_width: 48.300000000000004,
  _original_height: 54.900000000000006,
}

export function HbrHybridBackupRecovery(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, HBR_HYBRID_BACKUP_RECOVERY)} />
  )
}
