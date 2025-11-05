import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WEB_SERVER_BLUE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.web_server_blue;',
  },
  _original_width: 48,
  _original_height: 57,
}

export function WebServerBlue(props: NodeProps) {
  return (
    <Shape
      {...WEB_SERVER_BLUE}
      {...props}
      _style={extendStyle(WEB_SERVER_BLUE, props)}
    />
  )
}
