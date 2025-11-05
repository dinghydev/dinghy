import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CISCO_PHYSICAL_SECURITY_4U_STORAGE = {
  _style: {
    entity:
      'shape=mxgraph.rack.cisco.cisco_physical_security_4u_storage;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 161,
  _height: 60,
}

export function CiscoPhysicalSecurity4uStorage(props: NodeProps) {
  return (
    <Shape
      {...CISCO_PHYSICAL_SECURITY_4U_STORAGE}
      {...props}
      _style={extendStyle(CISCO_PHYSICAL_SECURITY_4U_STORAGE, props)}
    />
  )
}
