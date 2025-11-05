import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CISCO_7604_ROUTER = {
  _style: {
    entity:
      'shape=mxgraph.rack.cisco.cisco_7604_router;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 161,
  _height: 75,
}

export function Cisco7604Router(props: NodeProps) {
  return (
    <Shape
      {...CISCO_7604_ROUTER}
      {...props}
      _style={extendStyle(CISCO_7604_ROUTER, props)}
    />
  )
}
