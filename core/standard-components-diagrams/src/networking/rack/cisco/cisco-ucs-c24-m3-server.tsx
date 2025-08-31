import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CISCO_UCS_C24_M3_SERVER = {
  _style:
    'shape=mxgraph.rack.cisco.cisco_ucs_c24_m3_server;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  _width: 161,
  _height: 30,
}

export function CiscoUcsC24M3Server(props: DiagramNodeProps) {
  return (
    <Shape
      {...CISCO_UCS_C24_M3_SERVER}
      {...props}
      _style={extendStyle(CISCO_UCS_C24_M3_SERVER, props)}
    />
  )
}
