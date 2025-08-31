import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SERVER = {
  _style: {
    entity:
      'fontColor=#0066CC;verticalAlign=top;verticalLabelPosition=bottom;labelPosition=center;align=center;html=1;outlineConnect=0;fillColor=#CCCCCC;strokeColor=#6881B3;gradientColor=none;gradientDirection=north;strokeWidth=2;shape=mxgraph.networks.server;',
  },
  _width: 90,
  _height: 100,
}

export function Server(props: DiagramNodeProps) {
  return <Shape {...SERVER} {...props} _style={extendStyle(SERVER, props)} />
}
