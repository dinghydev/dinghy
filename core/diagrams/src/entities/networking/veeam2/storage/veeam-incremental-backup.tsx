import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VEEAM_INCREMENTAL_BACKUP = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.veeam_incremental_backup;',
  },
  _width: 28.000000000000004,
  _height: 39,
}

export function VeeamIncrementalBackup(props: DiagramNodeProps) {
  return (
    <Shape
      {...VEEAM_INCREMENTAL_BACKUP}
      {...props}
      _style={extendStyle(VEEAM_INCREMENTAL_BACKUP, props)}
    />
  )
}
