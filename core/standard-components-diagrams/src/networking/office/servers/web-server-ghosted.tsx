import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WEB_SERVER_GHOSTED = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.web_server_ghosted;',
  },
  _width: 48,
  _height: 57,
}

export function WebServerGhosted(props: DiagramNodeProps) {
  return (
    <Shape
      {...WEB_SERVER_GHOSTED}
      {...props}
      _style={extendStyle(WEB_SERVER_GHOSTED, props)}
    />
  )
}
