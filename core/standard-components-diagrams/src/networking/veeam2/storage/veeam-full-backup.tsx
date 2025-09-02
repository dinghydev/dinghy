import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VEEAM_FULL_BACKUP = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.veeam_full_backup;',
  },
  _original_width: 28.000000000000004,
  _original_height: 39,
}

export function VeeamFullBackup(props: DiagramNodeProps) {
  return (
    <Shape
      {...VEEAM_FULL_BACKUP}
      {...props}
      _style={extendStyle(VEEAM_FULL_BACKUP, props)}
    />
  )
}
