import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CISCO_UCS_C460_M2_SERVER = {
  _style: {
    entity:
      'shape=mxgraph.rack.cisco.cisco_ucs_c460_m2_server;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _original_width: 161,
  _original_height: 60,
}

export function CiscoUcsC460M2Server(props: DiagramNodeProps) {
  return (
    <Shape
      {...CISCO_UCS_C460_M2_SERVER}
      {...props}
      _style={extendStyle(CISCO_UCS_C460_M2_SERVER, props)}
    />
  )
}
