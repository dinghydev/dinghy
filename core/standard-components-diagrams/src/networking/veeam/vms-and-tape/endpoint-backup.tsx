import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ENDPOINT_BACKUP = {
  _style:
    'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.endpoint_backup;',
  _width: 44.8,
  _height: 44.8,
}

export function EndpointBackup(props: DiagramNodeProps) {
  return <Shape {...ENDPOINT_BACKUP} {...props} />
}
