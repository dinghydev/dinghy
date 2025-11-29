import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SCALE_OUT_BACKUP_REPOSITORY = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.scale_out_backup_repository;',
  },
  _width: 37,
  _height: 38,
}

export function ScaleOutBackupRepository(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, SCALE_OUT_BACKUP_REPOSITORY)}
    />
  )
}
