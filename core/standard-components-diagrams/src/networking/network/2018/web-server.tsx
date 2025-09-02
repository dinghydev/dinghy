import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WEB_SERVER = {
  _style: {
    entity:
      'fontColor=#0066CC;verticalAlign=top;verticalLabelPosition=bottom;labelPosition=center;align=center;html=1;outlineConnect=0;fillColor=#CCCCCC;strokeColor=#6881B3;gradientColor=none;gradientDirection=north;strokeWidth=2;shape=mxgraph.networks.web_server;',
  },
  _original_width: 105,
  _original_height: 105,
}

export function WebServer(props: DiagramNodeProps) {
  return (
    <Shape {...WEB_SERVER} {...props} _style={extendStyle(WEB_SERVER, props)} />
  )
}
