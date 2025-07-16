import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CISCO_CATALYST_6504_E_SWITCH = {
  _style:
    'shape=mxgraph.rack.cisco.cisco_catalyst_6504-e_switch;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  _width: 148,
  _height: 75,
}

export function CiscoCatalyst6504ESwitch(props: DiagramNodeProps) {
  return <Shape {...CISCO_CATALYST_6504_E_SWITCH} {...props} />
}
