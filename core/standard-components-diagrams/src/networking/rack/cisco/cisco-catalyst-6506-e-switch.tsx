import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CISCO_CATALYST_6506_E_SWITCH = {
  _style: {
    entity:
      'shape=mxgraph.rack.cisco.cisco_catalyst_6506-e_switch;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _original_width: 148,
  _original_height: 178,
}

export function CiscoCatalyst6506ESwitch(props: DiagramNodeProps) {
  return (
    <Shape
      {...CISCO_CATALYST_6506_E_SWITCH}
      {...props}
      _style={extendStyle(CISCO_CATALYST_6506_E_SWITCH, props)}
    />
  )
}
