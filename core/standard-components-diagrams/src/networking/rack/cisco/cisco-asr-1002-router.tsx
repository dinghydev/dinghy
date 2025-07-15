import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CISCO_ASR_1002_ROUTER = {
  _style:
    'shape=mxgraph.rack.cisco.cisco_asr_1002_router;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  _width: 161,
  _height: 30,
}

export function CiscoAsr1002Router(props: DiagramNodeProps) {
  return <Shape {...CISCO_ASR_1002_ROUTER} {...props} />
}
