import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CISCO_ASR_9006 = {
  _style: {
    entity:
      'shape=mxgraph.rack.cisco.cisco_asr_9006;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 161,
  _height: 149,
}

export function CiscoAsr9006(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CISCO_ASR_9006)} />
}
