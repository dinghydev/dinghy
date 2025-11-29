import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CISCO_NEXUS_2148T_FABRIC_EXTENDER = {
  _style: {
    entity:
      'shape=mxgraph.rack.cisco.cisco_nexus_2148t_fabric_extender;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 161,
  _height: 15,
}

export function CiscoNexus2148tFabricExtender(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, CISCO_NEXUS_2148T_FABRIC_EXTENDER)}
    />
  )
}
