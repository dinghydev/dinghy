import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CISCO_CATALYST_4900M_SWITCH = {
  _style:
    'shape=mxgraph.rack.cisco.cisco_catalyst_4900m_switch;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  _width: 161,
  _height: 30,
}

export function CiscoCatalyst4900mSwitch(props: DiagramNodeProps) {
  return <Shape {...CISCO_CATALYST_4900M_SWITCH} {...props} />
}
