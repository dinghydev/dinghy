import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WELDED_CONNECTION = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.piping.welded_connection2;',
  },
  _width: 50,
  _height: 20,
}

export function WeldedConnection(props: NodeProps) {
  return (
    <Shape
      {...WELDED_CONNECTION}
      {...props}
      _style={extendStyle(WELDED_CONNECTION, props)}
    />
  )
}
