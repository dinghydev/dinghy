import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SUN_SERVER_X2_8 = {
  _style: {
    entity:
      'shape=mxgraph.rack.oracle.sun_server_x2-8;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _original_width: 161,
  _original_height: 75,
}

export function SunServerX28(props: DiagramNodeProps) {
  return (
    <Shape
      {...SUN_SERVER_X2_8}
      {...props}
      _style={extendStyle(SUN_SERVER_X2_8, props)}
    />
  )
}
