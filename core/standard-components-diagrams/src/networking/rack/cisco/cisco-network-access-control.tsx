import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CISCO_NETWORK_ACCESS_CONTROL = {
  _style:
    'shape=mxgraph.rack.cisco.cisco_network_access_control;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  _width: 161,
  _height: 15,
}

export function CiscoNetworkAccessControl(props: DiagramNodeProps) {
  return (
    <Shape
      {...CISCO_NETWORK_ACCESS_CONTROL}
      {...props}
      _style={extendStyle(CISCO_NETWORK_ACCESS_CONTROL, props)}
    />
  )
}
