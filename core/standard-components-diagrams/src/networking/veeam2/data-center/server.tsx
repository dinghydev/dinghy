import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SERVER = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.server;',
  },
  _width: 23,
  _height: 39,
}

export function Server(props: DiagramNodeProps) {
  return <Shape {...SERVER} {...props} _style={extendStyle(SERVER, props)} />
}
