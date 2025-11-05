import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BACKUP_LOCAL_2 = {
  _style: {
    entity:
      'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.mscae.enterprise.backup_online',
  },
  _original_width: 50,
  _original_height: 40,
}

export function BackupLocal2(props: NodeProps) {
  return (
    <Shape
      {...BACKUP_LOCAL_2}
      {...props}
      _style={extendStyle(BACKUP_LOCAL_2, props)}
    />
  )
}
