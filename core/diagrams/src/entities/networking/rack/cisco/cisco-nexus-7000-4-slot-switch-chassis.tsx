import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CISCO_NEXUS_7000_4_SLOT_SWITCH_CHASSIS = {
  _style: {
    entity:
      'shape=mxgraph.rack.cisco.cisco_nexus_7000_4-slot_switch_chassis;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 161,
  _height: 104,
}

export function CiscoNexus70004SlotSwitchChassis(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, CISCO_NEXUS_7000_4_SLOT_SWITCH_CHASSIS)}
    />
  )
}
