import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CISCO_CATALYST_4948_10_GIGABIT_ETHERNET_SWITCH = {
  _style:
    'shape=mxgraph.rack.cisco.cisco_catalyst_4948_10_gigabit_ethernet_switch;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  _width: 161,
  _height: 15,
}

export function CiscoCatalyst494810GigabitEthernetSwitch(
  props: DiagramNodeProps,
) {
  return (
    <Shape {...CISCO_CATALYST_4948_10_GIGABIT_ETHERNET_SWITCH} {...props} />
  )
}
