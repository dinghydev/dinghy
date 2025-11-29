import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VIRTUAL_WEB_SERVER_BLUE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.virtual_web_server;fillColor=#2072B8;',
  },
  _original_width: 44,
  _original_height: 55,
}

export function VirtualWebServerBlue(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, VIRTUAL_WEB_SERVER_BLUE)} />
  )
}
