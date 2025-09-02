import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SCALE_OUT_BACKUP_REPOSITORY = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#DF8C42;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.scale_out_backup_repository2;',
  },
  _original_width: 34,
  _original_height: 34,
}

export function ScaleOutBackupRepository(props: DiagramNodeProps) {
  return (
    <Shape
      {...SCALE_OUT_BACKUP_REPOSITORY}
      {...props}
      _style={extendStyle(SCALE_OUT_BACKUP_REPOSITORY, props)}
    />
  )
}
