import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SUN_SERVER_X2_8 = {
  _style: {
    entity:
      'shape=mxgraph.rack.oracle.sun_server_x2-8;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 161,
  _height: 75,
}

export function SunServerX28(props: NodeProps) {
  return (
    <Shape
      {...SUN_SERVER_X2_8}
      {...props}
      _style={extendStyle(SUN_SERVER_X2_8, props)}
    />
  )
}
