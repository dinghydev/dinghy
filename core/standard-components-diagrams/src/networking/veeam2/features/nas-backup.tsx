import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NAS_BACKUP = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#DF8C42;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.nas_backup;',
  _width: 34,
  _height: 34,
}

export function NasBackup(props: DiagramNodeProps) {
  return <Shape {...NAS_BACKUP} {...props} />
}
