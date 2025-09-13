import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const HP_6125G_ETHERNET_BLADE_SWITCH = {
  _style: {
    entity:
      'shape=mxgraph.rack.hp.hp_6125g_ethernet_blade_switch;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 19,
  _height: 121,
}

export function Hp6125gEthernetBladeSwitch(props: DiagramNodeProps) {
  return (
    <Shape
      {...HP_6125G_ETHERNET_BLADE_SWITCH}
      {...props}
      _style={extendStyle(HP_6125G_ETHERNET_BLADE_SWITCH, props)}
    />
  )
}
