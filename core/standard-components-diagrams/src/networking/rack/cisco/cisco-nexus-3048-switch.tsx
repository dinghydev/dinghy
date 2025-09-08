import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CISCO_NEXUS_3048_SWITCH = {
  _style: {
    entity:
      'shape=mxgraph.rack.cisco.cisco_nexus_3048_switch;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _original_width: 161,
  _original_height: 15,
}

export function CiscoNexus3048Switch(props: DiagramNodeProps) {
  return (
    <Shape
      {...CISCO_NEXUS_3048_SWITCH}
      {...props}
      _style={extendStyle(CISCO_NEXUS_3048_SWITCH, props)}
    />
  )
}
