import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CISCO_7603_ROUTER = {
  _style:
    'shape=mxgraph.rack.cisco.cisco_7603_router;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  _width: 161,
  _height: 60,
}

export function Cisco7603Router(props: DiagramNodeProps) {
  return <Shape {...CISCO_7603_ROUTER} {...props} />
}
