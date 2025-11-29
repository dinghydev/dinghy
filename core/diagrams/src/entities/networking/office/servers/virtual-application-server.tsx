import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VIRTUAL_APPLICATION_SERVER = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.virtual_application_server;',
  },
  _original_width: 48,
  _original_height: 55,
}

export function VirtualApplicationServer(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, VIRTUAL_APPLICATION_SERVER)} />
  )
}
