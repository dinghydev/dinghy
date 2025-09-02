import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NAS_BACKUP = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.nas_backup;',
  },
  _original_width: 44.8,
  _original_height: 44.8,
}

export function NasBackup(props: DiagramNodeProps) {
  return (
    <Shape {...NAS_BACKUP} {...props} _style={extendStyle(NAS_BACKUP, props)} />
  )
}
