import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SPACE_ROUTER = {
  _style: {
    entity:
      'shape=mxgraph.cisco.routers.space_router;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 134,
  _height: 70,
}

export function SpaceRouter(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SPACE_ROUTER)} />
}
