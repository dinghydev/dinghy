import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CISCO_NEXUS_2248PQ_10GE_FABRIC_EXTENDER = {
  _style: {
    entity:
      'shape=mxgraph.rack.cisco.cisco_nexus_2248pq_10ge_fabric_extender;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _original_width: 161,
  _original_height: 15,
}

export function CiscoNexus2248pq10geFabricExtender(props: DiagramNodeProps) {
  return (
    <Shape
      {...CISCO_NEXUS_2248PQ_10GE_FABRIC_EXTENDER}
      {...props}
      _style={extendStyle(CISCO_NEXUS_2248PQ_10GE_FABRIC_EXTENDER, props)}
    />
  )
}
