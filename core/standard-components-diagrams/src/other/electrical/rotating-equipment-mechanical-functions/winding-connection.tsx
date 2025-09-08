import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const WINDING_CONNECTION = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.rot_mech.winding_connection;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function WindingConnection(props: DiagramNodeProps) {
  return (
    <Shape
      {...WINDING_CONNECTION}
      {...props}
      _style={extendStyle(WINDING_CONNECTION, props)}
    />
  )
}
