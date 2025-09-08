import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const WEB_SERVER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.web_server;',
  },
  _original_width: 76.5,
  _original_height: 90,
}

export function WebServer(props: DiagramNodeProps) {
  return (
    <Shape {...WEB_SERVER} {...props} _style={extendStyle(WEB_SERVER, props)} />
  )
}
