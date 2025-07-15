import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CISCO_ASR_9006 = {
  _style:
    'shape=mxgraph.rack.cisco.cisco_asr_9006;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  _width: 161,
  _height: 149,
}

export function CiscoAsr9006(props: DiagramNodeProps) {
  return <Shape {...CISCO_ASR_9006} {...props} />
}
