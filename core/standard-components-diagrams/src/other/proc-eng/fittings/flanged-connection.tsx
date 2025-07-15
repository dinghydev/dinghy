import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FLANGED_CONNECTION = {
  _style:
    'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.fittings.flanged_connection;',
  _width: 20,
  _height: 50,
}

export function FlangedConnection(props: DiagramNodeProps) {
  return <Shape {...FLANGED_CONNECTION} {...props} />
}
