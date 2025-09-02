import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CISCO_ASR_9010 = {
  _style: {
    entity:
      'shape=mxgraph.rack.cisco.cisco_asr_9010;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _original_width: 161,
  _original_height: 240,
}

export function CiscoAsr9010(props: DiagramNodeProps) {
  return (
    <Shape
      {...CISCO_ASR_9010}
      {...props}
      _style={extendStyle(CISCO_ASR_9010, props)}
    />
  )
}
