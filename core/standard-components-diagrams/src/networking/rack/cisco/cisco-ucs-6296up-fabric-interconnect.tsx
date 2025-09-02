import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CISCO_UCS_6296UP_FABRIC_INTERCONNECT = {
  _style: {
    entity:
      'shape=mxgraph.rack.cisco.cisco_ucs_6296up_fabric_interconnect;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _original_width: 161,
  _original_height: 30,
}

export function CiscoUcs6296upFabricInterconnect(props: DiagramNodeProps) {
  return (
    <Shape
      {...CISCO_UCS_6296UP_FABRIC_INTERCONNECT}
      {...props}
      _style={extendStyle(CISCO_UCS_6296UP_FABRIC_INTERCONNECT, props)}
    />
  )
}
