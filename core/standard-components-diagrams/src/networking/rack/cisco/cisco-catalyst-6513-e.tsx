import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CISCO_CATALYST_6513_E = {
  _style: {
    entity:
      'shape=mxgraph.rack.cisco.cisco_catalyst_6513-e;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _original_width: 148,
  _original_height: 297,
}

export function CiscoCatalyst6513E(props: DiagramNodeProps) {
  return (
    <Shape
      {...CISCO_CATALYST_6513_E}
      {...props}
      _style={extendStyle(CISCO_CATALYST_6513_E, props)}
    />
  )
}
