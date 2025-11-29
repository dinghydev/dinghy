import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CISCO_CATALYST_BLADE_SWITCH_3130_FOR_DELL = {
  _style: {
    entity:
      'shape=mxgraph.rack.cisco.cisco_catalyst_blade_switch_3130_for_dell;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 19,
  _height: 143,
}

export function CiscoCatalystBladeSwitch3130ForDell(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, CISCO_CATALYST_BLADE_SWITCH_3130_FOR_DELL)}
    />
  )
}
