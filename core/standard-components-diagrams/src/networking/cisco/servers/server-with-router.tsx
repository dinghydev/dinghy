import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SERVER_WITH_ROUTER = {
  _style: {
    entity:
      'shape=mxgraph.cisco.servers.server_with_router;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 38,
  _original_height: 64,
}

export function ServerWithRouter(props: DiagramNodeProps) {
  return (
    <Shape
      {...SERVER_WITH_ROUTER}
      {...props}
      _style={extendStyle(SERVER_WITH_ROUTER, props)}
    />
  )
}
