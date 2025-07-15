import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const XENDESKTOP_SERVER = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.xendesktop_server;',
  _width: 75,
  _height: 91,
}

export function XendesktopServer(props: DiagramNodeProps) {
  return <Shape {...XENDESKTOP_SERVER} {...props} />
}
