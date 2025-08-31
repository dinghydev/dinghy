import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WINDING_CONNECTION = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.rot_mech.winding_connection;',
  _width: 60,
  _height: 60,
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
