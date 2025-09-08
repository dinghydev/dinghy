import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const HYBRID_SERVER = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.hybrid_server;',
  },
  _original_width: 59,
  _original_height: 52,
}

export function HybridServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...HYBRID_SERVER}
      {...props}
      _style={extendStyle(HYBRID_SERVER, props)}
    />
  )
}
