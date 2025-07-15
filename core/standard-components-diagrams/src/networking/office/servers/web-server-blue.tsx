import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WEB_SERVER_BLUE = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.web_server_blue;',
  _width: 48,
  _height: 57,
}

export function WebServerBlue(props: DiagramNodeProps) {
  return <Shape {...WEB_SERVER_BLUE} {...props} />
}
