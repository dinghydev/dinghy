import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CISCO_ASR_9001 = {
  _style:
    'shape=mxgraph.rack.cisco.cisco_asr_9001;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  _width: 161,
  _height: 30,
}

export function CiscoAsr9001(props: DiagramNodeProps) {
  return (
    <Shape
      {...CISCO_ASR_9001}
      {...props}
      _style={extendStyle(CISCO_ASR_9001, props)}
    />
  )
}
