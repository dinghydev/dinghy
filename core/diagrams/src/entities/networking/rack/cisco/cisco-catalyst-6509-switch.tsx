import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CISCO_CATALYST_6509_SWITCH = {
  _style: {
    entity:
      'shape=mxgraph.rack.cisco.cisco_catalyst_6509_switch;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 148,
  _height: 223,
}

export function CiscoCatalyst6509Switch(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, CISCO_CATALYST_6509_SWITCH)} />
  )
}
