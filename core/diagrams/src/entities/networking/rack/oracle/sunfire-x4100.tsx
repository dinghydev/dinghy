import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SUNFIRE_X4100 = {
  _style: {
    entity:
      'shape=mxgraph.rack.oracle.sunfire_x4100;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 161,
  _height: 15,
}

export function SunfireX4100(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SUNFIRE_X4100)} />
}
