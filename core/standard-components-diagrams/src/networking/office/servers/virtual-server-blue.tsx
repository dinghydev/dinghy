import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VIRTUAL_SERVER_BLUE = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.virtual_server;fillColor=#2072B8;',
  _width: 28,
  _height: 52,
}

export function VirtualServerBlue(props: DiagramNodeProps) {
  return (
    <Shape
      {...VIRTUAL_SERVER_BLUE}
      {...props}
      _style={extendStyle(VIRTUAL_SERVER_BLUE, props)}
    />
  )
}
