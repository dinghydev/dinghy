import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CISCO_7606_ROUTER = {
  _style: {
    entity:
      'shape=mxgraph.rack.cisco.cisco_7606_router;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _original_width: 161,
  _original_height: 104,
}

export function Cisco7606Router(props: DiagramNodeProps) {
  return (
    <Shape
      {...CISCO_7606_ROUTER}
      {...props}
      _style={extendStyle(CISCO_7606_ROUTER, props)}
    />
  )
}
