import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WIFI_ROUTER = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.wifi_router;',
  },
  _original_width: 49.9,
  _original_height: 50,
}

export function WifiRouter(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, WIFI_ROUTER)} />
}
