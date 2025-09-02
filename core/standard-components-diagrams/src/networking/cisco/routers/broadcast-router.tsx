import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BROADCAST_ROUTER = {
  _style: {
    entity:
      'shape=mxgraph.cisco.routers.broadcast_router;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 78,
  _original_height: 78,
}

export function BroadcastRouter(props: DiagramNodeProps) {
  return (
    <Shape
      {...BROADCAST_ROUTER}
      {...props}
      _style={extendStyle(BROADCAST_ROUTER, props)}
    />
  )
}
