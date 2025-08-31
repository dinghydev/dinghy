import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CISCO_7609_ROUTER = {
  _style: {
    entity:
      'shape=mxgraph.rack.cisco.cisco_7609_router;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 161,
  _height: 311,
}

export function Cisco7609Router(props: DiagramNodeProps) {
  return (
    <Shape
      {...CISCO_7609_ROUTER}
      {...props}
      _style={extendStyle(CISCO_7609_ROUTER, props)}
    />
  )
}
