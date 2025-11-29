import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NETRA_X4270_SERVER = {
  _style: {
    entity:
      'shape=mxgraph.rack.oracle.netra_x4270_server;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 161,
  _height: 30,
}

export function NetraX4270Server(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, NETRA_X4270_SERVER)} />
}
