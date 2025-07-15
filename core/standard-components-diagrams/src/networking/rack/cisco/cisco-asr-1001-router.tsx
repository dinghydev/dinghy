import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CISCO_ASR_1001_ROUTER = {
  _style:
    'shape=mxgraph.rack.cisco.cisco_asr_1001_router;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  _width: 161,
  _height: 15,
}

export function CiscoAsr1001Router(props: DiagramNodeProps) {
  return <Shape {...CISCO_ASR_1001_ROUTER} {...props} />
}
