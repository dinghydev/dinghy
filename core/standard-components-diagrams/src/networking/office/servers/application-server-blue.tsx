import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const APPLICATION_SERVER_BLUE = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.application_server_blue;',
  _width: 46,
  _height: 56,
}

export function ApplicationServerBlue(props: DiagramNodeProps) {
  return <Shape {...APPLICATION_SERVER_BLUE} {...props} />
}
