import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CISCO_UCS_6248UP_FABRIC_INTERCONNECT = {
  _style:
    'shape=mxgraph.rack.cisco.cisco_ucs_6248up_fabric_interconnect;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  _width: 161,
  _height: 15,
}

export function CiscoUcs6248upFabricInterconnect(props: DiagramNodeProps) {
  return (
    <Shape
      {...CISCO_UCS_6248UP_FABRIC_INTERCONNECT}
      {...props}
      _style={extendStyle(CISCO_UCS_6248UP_FABRIC_INTERCONNECT, props)}
    />
  )
}
