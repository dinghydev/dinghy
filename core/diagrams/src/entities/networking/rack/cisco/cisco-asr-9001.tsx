import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CISCO_ASR_9001 = {
  _style: {
    entity:
      'shape=mxgraph.rack.cisco.cisco_asr_9001;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 161,
  _height: 30,
}

export function CiscoAsr9001(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CISCO_ASR_9001)} />
}
