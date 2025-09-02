import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FLANGED_CONNECTION = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.fittings.flanged_connection;',
  },
  _original_width: 20,
  _original_height: 50,
}

export function FlangedConnection(props: DiagramNodeProps) {
  return (
    <Shape
      {...FLANGED_CONNECTION}
      {...props}
      _style={extendStyle(FLANGED_CONNECTION, props)}
    />
  )
}
