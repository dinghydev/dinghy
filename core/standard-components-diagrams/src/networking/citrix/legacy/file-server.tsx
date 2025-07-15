import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FILE_SERVER = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.file_server;',
  _width: 71,
  _height: 97,
}

export function FileServer(props: DiagramNodeProps) {
  return <Shape {...FILE_SERVER} {...props} />
}
