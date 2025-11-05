import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CISCO_CATALYST_6506_E_SWITCH = {
  _style: {
    entity:
      'shape=mxgraph.rack.cisco.cisco_catalyst_6506-e_switch;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 148,
  _height: 178,
}

export function CiscoCatalyst6506ESwitch(props: NodeProps) {
  return (
    <Shape
      {...CISCO_CATALYST_6506_E_SWITCH}
      {...props}
      _style={extendStyle(CISCO_CATALYST_6506_E_SWITCH, props)}
    />
  )
}
