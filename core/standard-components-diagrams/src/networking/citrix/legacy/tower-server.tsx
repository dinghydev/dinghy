import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TOWER_SERVER = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.tower_server;',
  _width: 65,
  _height: 85,
}

export function TowerServer(props: DiagramNodeProps) {
  return <Shape {...TOWER_SERVER} {...props} />
}
