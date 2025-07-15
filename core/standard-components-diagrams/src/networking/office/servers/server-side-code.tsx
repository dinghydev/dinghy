import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SERVER_SIDE_CODE = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.server_side_code;',
  _width: 49,
  _height: 56,
}

export function ServerSideCode(props: DiagramNodeProps) {
  return <Shape {...SERVER_SIDE_CODE} {...props} />
}
