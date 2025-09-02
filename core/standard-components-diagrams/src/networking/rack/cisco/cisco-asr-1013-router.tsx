import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CISCO_ASR_1013_ROUTER = {
  _style: {
    entity:
      'shape=mxgraph.rack.cisco.cisco_asr_1013_router;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _original_width: 161,
  _original_height: 193,
}

export function CiscoAsr1013Router(props: DiagramNodeProps) {
  return (
    <Shape
      {...CISCO_ASR_1013_ROUTER}
      {...props}
      _style={extendStyle(CISCO_ASR_1013_ROUTER, props)}
    />
  )
}
