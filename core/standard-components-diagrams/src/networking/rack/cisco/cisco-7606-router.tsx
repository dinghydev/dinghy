import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CISCO_7606_ROUTER = {
  _style:
    'shape=mxgraph.rack.cisco.cisco_7606_router;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  _width: 161,
  _height: 104,
}

export function Cisco7606Router(props: DiagramNodeProps) {
  return <Shape {...CISCO_7606_ROUTER} {...props} />
}
