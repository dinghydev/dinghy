import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CISCO_UCS_5100_CHASSIS = {
  _style: {
    entity:
      'shape=mxgraph.rack.cisco.cisco_ucs_5100_chassis;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 161,
  _height: 89,
}

export function CiscoUcs5100Chassis(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, CISCO_UCS_5100_CHASSIS)} />
  )
}
