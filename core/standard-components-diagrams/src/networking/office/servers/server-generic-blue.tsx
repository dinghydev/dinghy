import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SERVER_GENERIC_BLUE = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.server_generic;fillColor=#2072B8;',
  _width: 27,
  _height: 52,
}

export function ServerGenericBlue(props: DiagramNodeProps) {
  return (
    <Shape
      {...SERVER_GENERIC_BLUE}
      {...props}
      _style={extendStyle(SERVER_GENERIC_BLUE, props)}
    />
  )
}
