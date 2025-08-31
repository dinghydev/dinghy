import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CISCO_ASR_1004_ROUTER = {
  _style:
    'shape=mxgraph.rack.cisco.cisco_asr_1004_router;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  _width: 161,
  _height: 60,
}

export function CiscoAsr1004Router(props: DiagramNodeProps) {
  return (
    <Shape
      {...CISCO_ASR_1004_ROUTER}
      {...props}
      _style={extendStyle(CISCO_ASR_1004_ROUTER, props)}
    />
  )
}
