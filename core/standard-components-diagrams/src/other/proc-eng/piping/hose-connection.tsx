import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const HOSE_CONNECTION = {
  _style:
    'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.piping.hose_connection;pointerEvents=1;',
  _width: 20,
  _height: 20,
}

export function HoseConnection(props: DiagramNodeProps) {
  return <Shape {...HOSE_CONNECTION} {...props} />
}
