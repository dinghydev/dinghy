import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CISCO_7606_ROUTER = {
  _style: {
    entity:
      'shape=mxgraph.rack.cisco.cisco_7606_router;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 161,
  _height: 104,
}

export function Cisco7606Router(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CISCO_7606_ROUTER)} />
}
