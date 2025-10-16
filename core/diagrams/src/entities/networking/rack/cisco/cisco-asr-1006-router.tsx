import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CISCO_ASR_1006_ROUTER = {
  _style: {
    entity:
      'shape=mxgraph.rack.cisco.cisco_asr_1006_router;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 161,
  _height: 89,
}

export function CiscoAsr1006Router(props: DiagramNodeProps) {
  return (
    <Shape
      {...CISCO_ASR_1006_ROUTER}
      {...props}
      _style={extendStyle(CISCO_ASR_1006_ROUTER, props)}
    />
  )
}
