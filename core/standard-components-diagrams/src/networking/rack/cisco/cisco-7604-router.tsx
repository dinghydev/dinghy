import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CISCO_7604_ROUTER = {
  _style: {
    entity:
      'shape=mxgraph.rack.cisco.cisco_7604_router;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _original_width: 161,
  _original_height: 75,
}

export function Cisco7604Router(props: DiagramNodeProps) {
  return (
    <Shape
      {...CISCO_7604_ROUTER}
      {...props}
      _style={extendStyle(CISCO_7604_ROUTER, props)}
    />
  )
}
