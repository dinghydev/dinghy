import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CISCO_7609_ROUTER = {
  _style: {
    entity:
      'shape=mxgraph.rack.cisco.cisco_7609_router;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 161,
  _height: 311,
}

export function Cisco7609Router(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CISCO_7609_ROUTER)} />
}
