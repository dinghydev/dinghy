import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SERVER = {
  _style: {
    entity:
      'strokeColor=#666666;html=1;labelPosition=right;align=left;spacingLeft=15;shadow=0;dashed=0;outlineConnect=0;shape=mxgraph.rack.general.1u_rack_server;',
  },
  _width: 160,
  _height: 15,
}

export function Server(props: DiagramNodeProps) {
  return <Shape {...SERVER} {...props} _style={extendStyle(SERVER, props)} />
}
