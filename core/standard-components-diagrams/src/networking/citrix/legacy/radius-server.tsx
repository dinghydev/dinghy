import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const RADIUS_SERVER = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.radius_server;',
  _width: 75.5,
  _height: 91,
}

export function RadiusServer(props: DiagramNodeProps) {
  return <Shape {...RADIUS_SERVER} {...props} />
}
