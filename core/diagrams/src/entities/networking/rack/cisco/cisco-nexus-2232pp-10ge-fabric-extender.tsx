import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CISCO_NEXUS_2232PP_10GE_FABRIC_EXTENDER = {
  _style: {
    entity:
      'shape=mxgraph.rack.cisco.cisco_nexus_2232pp_10ge_fabric_extender;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 161,
  _height: 15,
}

export function CiscoNexus2232pp10geFabricExtender(props: DiagramNodeProps) {
  return (
    <Shape
      {...CISCO_NEXUS_2232PP_10GE_FABRIC_EXTENDER}
      {...props}
      _style={extendStyle(CISCO_NEXUS_2232PP_10GE_FABRIC_EXTENDER, props)}
    />
  )
}
