import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CISCO_CATALYST_6513_E = {
  _style: {
    entity:
      'shape=mxgraph.rack.cisco.cisco_catalyst_6513-e;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 148,
  _height: 297,
}

export function CiscoCatalyst6513E(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CISCO_CATALYST_6513_E)} />
}
