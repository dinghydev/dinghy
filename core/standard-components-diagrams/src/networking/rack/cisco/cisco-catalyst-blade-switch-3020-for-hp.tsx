import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CISCO_CATALYST_BLADE_SWITCH_3020_FOR_HP = {
  _style:
    'shape=mxgraph.rack.cisco.cisco_catalyst_blade_switch_3020_for_hp;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  _width: 19,
  _height: 121,
}

export function CiscoCatalystBladeSwitch3020ForHp(props: DiagramNodeProps) {
  return (
    <Shape
      {...CISCO_CATALYST_BLADE_SWITCH_3020_FOR_HP}
      {...props}
      _style={extendStyle(CISCO_CATALYST_BLADE_SWITCH_3020_FOR_HP, props)}
    />
  )
}
