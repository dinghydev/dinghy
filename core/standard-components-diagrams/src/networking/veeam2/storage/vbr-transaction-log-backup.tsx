import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VBR_TRANSACTION_LOG_BACKUP = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.vbr_transaction_log_backup;',
  },
  _original_width: 28.000000000000004,
  _original_height: 39,
}

export function VbrTransactionLogBackup(props: DiagramNodeProps) {
  return (
    <Shape
      {...VBR_TRANSACTION_LOG_BACKUP}
      {...props}
      _style={extendStyle(VBR_TRANSACTION_LOG_BACKUP, props)}
    />
  )
}
