import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CISCO_NEXUS_3548_SWITCH = {
  _style:
    'shape=mxgraph.rack.cisco.cisco_nexus_3548_switch;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  _width: 161,
  _height: 15,
}

export function CiscoNexus3548Switch(props: DiagramNodeProps) {
  return <Shape {...CISCO_NEXUS_3548_SWITCH} {...props} />
}
