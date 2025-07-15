import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CISCO_NEXUS_2224TP_GE_FABRIC_EXTENDER = {
  _style:
    'shape=mxgraph.rack.cisco.cisco_nexus_2224tp_ge_fabric_extender;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  _width: 161,
  _height: 15,
}

export function CiscoNexus2224tpGeFabricExtender(props: DiagramNodeProps) {
  return <Shape {...CISCO_NEXUS_2224TP_GE_FABRIC_EXTENDER} {...props} />
}
