import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WIRELESS_ROUTER = {
  _style: {
    entity:
      'shape=mxgraph.cisco.routers.wireless_router;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 78,
  _original_height: 77,
}

export function WirelessRouter(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, WIRELESS_ROUTER)} />
}
