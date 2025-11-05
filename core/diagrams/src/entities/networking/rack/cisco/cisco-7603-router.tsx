import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CISCO_7603_ROUTER = {
  _style: {
    entity:
      'shape=mxgraph.rack.cisco.cisco_7603_router;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 161,
  _height: 60,
}

export function Cisco7603Router(props: NodeProps) {
  return (
    <Shape
      {...CISCO_7603_ROUTER}
      {...props}
      _style={extendStyle(CISCO_7603_ROUTER, props)}
    />
  )
}
