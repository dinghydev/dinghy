import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CISCO_NEXUS_5596T = {
  _style: {
    entity:
      'shape=mxgraph.rack.cisco.cisco_nexus_5596t;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _original_width: 161,
  _original_height: 30,
}

export function CiscoNexus5596t(props: DiagramNodeProps) {
  return (
    <Shape
      {...CISCO_NEXUS_5596T}
      {...props}
      _style={extendStyle(CISCO_NEXUS_5596T, props)}
    />
  )
}
