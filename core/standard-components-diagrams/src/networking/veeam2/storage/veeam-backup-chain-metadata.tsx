import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VEEAM_BACKUP_CHAIN_METADATA = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.veeam_backup_chain_metadata;',
  },
  _width: 28.000000000000004,
  _height: 39,
}

export function VeeamBackupChainMetadata(props: DiagramNodeProps) {
  return (
    <Shape
      {...VEEAM_BACKUP_CHAIN_METADATA}
      {...props}
      _style={extendStyle(VEEAM_BACKUP_CHAIN_METADATA, props)}
    />
  )
}
