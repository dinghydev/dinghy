import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CISCO_UCS_C460_M2_SERVER = {
  _style: {
    entity:
      'shape=mxgraph.rack.cisco.cisco_ucs_c460_m2_server;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 161,
  _height: 60,
}

export function CiscoUcsC460M2Server(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, CISCO_UCS_C460_M2_SERVER)} />
  )
}
