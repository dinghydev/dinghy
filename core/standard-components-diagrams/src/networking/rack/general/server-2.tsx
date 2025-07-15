import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SERVER_2 = {
  _style:
    'strokeColor=#666666;html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.general.server_2;',
  _width: 73,
  _height: 150,
}

export function Server2(props: DiagramNodeProps) {
  return <Shape {...SERVER_2} {...props} />
}
