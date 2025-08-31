import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VEEAM_REVERSED_INCREMENTAL_BACKUP = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.veeam_reversed_incremental_backup;',
  _width: 28.000000000000004,
  _height: 39,
}

export function VeeamReversedIncrementalBackup(props: DiagramNodeProps) {
  return (
    <Shape
      {...VEEAM_REVERSED_INCREMENTAL_BACKUP}
      {...props}
      _style={extendStyle(VEEAM_REVERSED_INCREMENTAL_BACKUP, props)}
    />
  )
}
