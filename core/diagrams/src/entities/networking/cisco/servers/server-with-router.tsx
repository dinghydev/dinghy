import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SERVER_WITH_ROUTER = {
  _style: {
    entity:
      'shape=mxgraph.cisco.servers.server_with_router;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 38,
  _height: 64,
}

export function ServerWithRouter(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SERVER_WITH_ROUTER)} />
}
