import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VIRTUAL_SERVER = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.virtual_server;',
  _width: 28,
  _height: 52,
}

export function VirtualServer(props: DiagramNodeProps) {
  return <Shape {...VIRTUAL_SERVER} {...props} />
}
