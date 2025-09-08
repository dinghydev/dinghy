import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VIRTUAL_SERVER = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.virtual_server;',
  },
  _original_width: 28,
  _original_height: 52,
}

export function VirtualServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...VIRTUAL_SERVER}
      {...props}
      _style={extendStyle(VIRTUAL_SERVER, props)}
    />
  )
}
