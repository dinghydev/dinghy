import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CISCO_UCS_6296UP_FABRIC_INTERCONNECT = {
  _style: {
    entity:
      'shape=mxgraph.rack.cisco.cisco_ucs_6296up_fabric_interconnect;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 161,
  _height: 30,
}

export function CiscoUcs6296upFabricInterconnect(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, CISCO_UCS_6296UP_FABRIC_INTERCONNECT)}
    />
  )
}
