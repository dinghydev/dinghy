import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SERVER_2 = {
  _style: {
    entity:
      'strokeColor=#666666;html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.general.server_2;',
  },
  _width: 73,
  _height: 150,
}

export function Server2(props: DiagramNodeProps) {
  return (
    <Shape {...SERVER_2} {...props} _style={extendStyle(SERVER_2, props)} />
  )
}
