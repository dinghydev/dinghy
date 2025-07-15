import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VBR_TRANSACTION_LOG_BACKUP = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.vbr_transaction_log_backup;',
  _width: 28.000000000000004,
  _height: 39,
}

export function VbrTransactionLogBackup(props: DiagramNodeProps) {
  return <Shape {...VBR_TRANSACTION_LOG_BACKUP} {...props} />
}
