import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CISCO_7613_ROUTER = {
  _style: {
    entity:
      'shape=mxgraph.rack.cisco.cisco_7613_router;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 161,
  _height: 267,
}

export function Cisco7613Router(props: DiagramNodeProps) {
  return (
    <Shape
      {...CISCO_7613_ROUTER}
      {...props}
      _style={extendStyle(CISCO_7613_ROUTER, props)}
    />
  )
}
