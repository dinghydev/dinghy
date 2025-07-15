import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WINDING_CONNECTION = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.rot_mech.winding_connection;',
  _width: 100,
  _height: 100,
}

export function WindingConnection(props: DiagramNodeProps) {
  return <Shape {...WINDING_CONNECTION} {...props} />
}
