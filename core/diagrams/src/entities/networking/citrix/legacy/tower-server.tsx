import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TOWER_SERVER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.tower_server;',
  },
  _width: 65,
  _height: 85,
}

export function TowerServer(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TOWER_SERVER)} />
}
