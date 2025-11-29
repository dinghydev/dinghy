import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CISCO_CATALYST_BLADE_SWITCH_3120_FOR_HP = {
  _style: {
    entity:
      'shape=mxgraph.rack.cisco.cisco_catalyst_blade_switch_3120_for_hp;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 19,
  _height: 121,
}

export function CiscoCatalystBladeSwitch3120ForHp(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, CISCO_CATALYST_BLADE_SWITCH_3120_FOR_HP)}
    />
  )
}
