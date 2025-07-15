import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CISCO_NEXUS_3016_SWITCH = {
  _style:
    'shape=mxgraph.rack.cisco.cisco_nexus_3016_switch;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  _width: 161,
  _height: 15,
}

export function CiscoNexus3016Switch(props: DiagramNodeProps) {
  return <Shape {...CISCO_NEXUS_3016_SWITCH} {...props} />
}
