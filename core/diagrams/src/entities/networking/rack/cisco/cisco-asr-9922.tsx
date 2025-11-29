import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CISCO_ASR_9922 = {
  _style: {
    entity:
      'shape=mxgraph.rack.cisco.cisco_asr_9922;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 161,
  _height: 652,
}

export function CiscoAsr9922(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CISCO_ASR_9922)} />
}
