import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VIRTUAL_APPLICATION_SERVER = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.virtual_application_server;',
  },
  _original_width: 48,
  _original_height: 55,
}

export function VirtualApplicationServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...VIRTUAL_APPLICATION_SERVER}
      {...props}
      _style={extendStyle(VIRTUAL_APPLICATION_SERVER, props)}
    />
  )
}
