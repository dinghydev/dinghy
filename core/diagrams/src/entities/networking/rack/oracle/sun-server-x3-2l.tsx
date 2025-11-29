import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SUN_SERVER_X3_2L = {
  _style: {
    entity:
      'shape=mxgraph.rack.oracle.sun_server_x3-2l;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 161,
  _height: 30,
}

export function SunServerX32l(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SUN_SERVER_X3_2L)} />
}
