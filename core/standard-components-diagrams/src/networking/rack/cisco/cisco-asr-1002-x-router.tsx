import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CISCO_ASR_1002_X_ROUTER = {
  _style: {
    entity:
      'shape=mxgraph.rack.cisco.cisco_asr_1002-x_router;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _original_width: 161,
  _original_height: 30,
}

export function CiscoAsr1002XRouter(props: DiagramNodeProps) {
  return (
    <Shape
      {...CISCO_ASR_1002_X_ROUTER}
      {...props}
      _style={extendStyle(CISCO_ASR_1002_X_ROUTER, props)}
    />
  )
}
