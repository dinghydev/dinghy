import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CISCO_NEXUS_5596UP_SWITCH = {
  _style: {
    entity:
      'shape=mxgraph.rack.cisco.cisco_nexus_5596up_switch;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 161,
  _height: 30,
}

export function CiscoNexus5596upSwitch(props: NodeProps) {
  return (
    <Shape
      {...CISCO_NEXUS_5596UP_SWITCH}
      {...props}
      _style={extendStyle(CISCO_NEXUS_5596UP_SWITCH, props)}
    />
  )
}
