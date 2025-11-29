import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FLANGED_CONNECTION = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.fittings.flanged_connection;',
  },
  _width: 20,
  _height: 50,
}

export function FlangedConnection(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, FLANGED_CONNECTION)} />
}
