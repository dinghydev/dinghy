import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VIRTUAL_WEB_SERVER = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.virtual_web_server;',
  },
  _width: 44,
  _height: 55,
}

export function VirtualWebServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...VIRTUAL_WEB_SERVER}
      {...props}
      _style={extendStyle(VIRTUAL_WEB_SERVER, props)}
    />
  )
}
