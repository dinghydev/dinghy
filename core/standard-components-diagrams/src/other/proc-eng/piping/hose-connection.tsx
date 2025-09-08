import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const HOSE_CONNECTION = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.piping.hose_connection;pointerEvents=1;',
  },
  _original_width: 20,
  _original_height: 20,
}

export function HoseConnection(props: DiagramNodeProps) {
  return (
    <Shape
      {...HOSE_CONNECTION}
      {...props}
      _style={extendStyle(HOSE_CONNECTION, props)}
    />
  )
}
