import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CISCO_BLADE_SWITCH_3030 = {
  _style: {
    entity:
      'shape=mxgraph.rack.cisco.cisco_blade_switch_3030;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _original_width: 19,
  _original_height: 72,
}

export function CiscoBladeSwitch3030(props: DiagramNodeProps) {
  return (
    <Shape
      {...CISCO_BLADE_SWITCH_3030}
      {...props}
      _style={extendStyle(CISCO_BLADE_SWITCH_3030, props)}
    />
  )
}
