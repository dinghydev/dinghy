import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CISCO_CATALYST_4948_10_GIGABIT_ETHERNET_SWITCH = {
  _style: {
    entity:
      'shape=mxgraph.rack.cisco.cisco_catalyst_4948_10_gigabit_ethernet_switch;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _original_width: 161,
  _original_height: 15,
}

export function CiscoCatalyst494810GigabitEthernetSwitch(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...CISCO_CATALYST_4948_10_GIGABIT_ETHERNET_SWITCH}
      {...props}
      _style={extendStyle(
        CISCO_CATALYST_4948_10_GIGABIT_ETHERNET_SWITCH,
        props,
      )}
    />
  )
}
