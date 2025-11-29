import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CISCO_WAE_7341 = {
  _style: {
    entity:
      'shape=mxgraph.rack.cisco.cisco_wae-7341;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 161,
  _height: 30,
}

export function CiscoWae7341(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CISCO_WAE_7341)} />
}
