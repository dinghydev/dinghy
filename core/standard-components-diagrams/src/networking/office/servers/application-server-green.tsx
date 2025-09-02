import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const APPLICATION_SERVER_GREEN = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.application_server_green;',
  },
  _original_width: 46,
  _original_height: 56,
}

export function ApplicationServerGreen(props: DiagramNodeProps) {
  return (
    <Shape
      {...APPLICATION_SERVER_GREEN}
      {...props}
      _style={extendStyle(APPLICATION_SERVER_GREEN, props)}
    />
  )
}
