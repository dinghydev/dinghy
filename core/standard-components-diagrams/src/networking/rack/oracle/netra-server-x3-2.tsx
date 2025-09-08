import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const NETRA_SERVER_X3_2 = {
  _style: {
    entity:
      'shape=mxgraph.rack.oracle.netra_server_x3-2;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _original_width: 161,
  _original_height: 30,
}

export function NetraServerX32(props: DiagramNodeProps) {
  return (
    <Shape
      {...NETRA_SERVER_X3_2}
      {...props}
      _style={extendStyle(NETRA_SERVER_X3_2, props)}
    />
  )
}
