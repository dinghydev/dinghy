import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const WELDED_CONNECTION = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.piping.welded_connection2;',
  },
  _original_width: 50,
  _original_height: 20,
}

export function WeldedConnection(props: DiagramNodeProps) {
  return (
    <Shape
      {...WELDED_CONNECTION}
      {...props}
      _style={extendStyle(WELDED_CONNECTION, props)}
    />
  )
}
