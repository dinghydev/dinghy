import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STORAGE_SERVER = {
  _style:
    'shape=mxgraph.cisco.servers.storage_server;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 54,
  _height: 83,
}

export function StorageServer(props: DiagramNodeProps) {
  return <Shape {...STORAGE_SERVER} {...props} />
}
