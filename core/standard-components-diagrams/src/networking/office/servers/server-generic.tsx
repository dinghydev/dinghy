import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SERVER_GENERIC = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.server_generic;',
  _width: 27,
  _height: 52,
}

export function ServerGeneric(props: DiagramNodeProps) {
  return (
    <Shape
      {...SERVER_GENERIC}
      {...props}
      _style={extendStyle(SERVER_GENERIC, props)}
    />
  )
}
