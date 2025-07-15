import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BACKUP_LOCAL_2 = {
  _style:
    'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.mscae.enterprise.backup_online',
  _width: 50,
  _height: 40,
}

export function BackupLocal2(props: DiagramNodeProps) {
  return <Shape {...BACKUP_LOCAL_2} {...props} />
}
