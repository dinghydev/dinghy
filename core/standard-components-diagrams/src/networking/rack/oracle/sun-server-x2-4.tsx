import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SUN_SERVER_X2_4 = {
  _style: {
    entity:
      'shape=mxgraph.rack.oracle.sun_server_x2-4;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _original_width: 161,
  _original_height: 45,
}

export function SunServerX24(props: DiagramNodeProps) {
  return (
    <Shape
      {...SUN_SERVER_X2_4}
      {...props}
      _style={extendStyle(SUN_SERVER_X2_4, props)}
    />
  )
}
