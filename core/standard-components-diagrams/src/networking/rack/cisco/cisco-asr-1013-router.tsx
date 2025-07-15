import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CISCO_ASR_1013_ROUTER = {
  _style:
    'shape=mxgraph.rack.cisco.cisco_asr_1013_router;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  _width: 161,
  _height: 193,
}

export function CiscoAsr1013Router(props: DiagramNodeProps) {
  return <Shape {...CISCO_ASR_1013_ROUTER} {...props} />
}
