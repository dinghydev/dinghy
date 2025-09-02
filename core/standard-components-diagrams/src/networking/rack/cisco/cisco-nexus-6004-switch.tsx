import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CISCO_NEXUS_6004_SWITCH = {
  _style: {
    entity:
      'shape=mxgraph.rack.cisco.cisco_nexus_6004_switch;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _original_width: 161,
  _original_height: 60,
}

export function CiscoNexus6004Switch(props: DiagramNodeProps) {
  return (
    <Shape
      {...CISCO_NEXUS_6004_SWITCH}
      {...props}
      _style={extendStyle(CISCO_NEXUS_6004_SWITCH, props)}
    />
  )
}
