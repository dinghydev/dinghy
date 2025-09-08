import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CISCO_CATALYST_6503_E_SWITCH = {
  _style: {
    entity:
      'shape=mxgraph.rack.cisco.cisco_catalyst_6503-e_switch;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _original_width: 148,
  _original_height: 60,
}

export function CiscoCatalyst6503ESwitch(props: DiagramNodeProps) {
  return (
    <Shape
      {...CISCO_CATALYST_6503_E_SWITCH}
      {...props}
      _style={extendStyle(CISCO_CATALYST_6503_E_SWITCH, props)}
    />
  )
}
