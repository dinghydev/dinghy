import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DIRSYNC_SERVER = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.dirsync_server;',
  _width: 47,
  _height: 56,
}

export function DirsyncServer(props: DiagramNodeProps) {
  return <Shape {...DIRSYNC_SERVER} {...props} />
}
