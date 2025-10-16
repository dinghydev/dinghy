import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SERVER_SIDE_CODE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.server_side_code;',
  },
  _original_width: 49,
  _original_height: 56,
}

export function ServerSideCode(props: DiagramNodeProps) {
  return (
    <Shape
      {...SERVER_SIDE_CODE}
      {...props}
      _style={extendStyle(SERVER_SIDE_CODE, props)}
    />
  )
}
