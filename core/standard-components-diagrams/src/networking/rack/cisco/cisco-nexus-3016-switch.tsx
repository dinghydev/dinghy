import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CISCO_NEXUS_3016_SWITCH = {
  _style: {
    entity:
      'shape=mxgraph.rack.cisco.cisco_nexus_3016_switch;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _original_width: 161,
  _original_height: 15,
}

export function CiscoNexus3016Switch(props: DiagramNodeProps) {
  return (
    <Shape
      {...CISCO_NEXUS_3016_SWITCH}
      {...props}
      _style={extendStyle(CISCO_NEXUS_3016_SWITCH, props)}
    />
  )
}
