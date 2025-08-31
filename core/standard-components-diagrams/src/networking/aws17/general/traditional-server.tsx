import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TRADITIONAL_SERVER = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.traditional_server;fillColor=#7D7C7C;gradientColor=none;',
  _width: 46.5,
  _height: 63,
}

export function TraditionalServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...TRADITIONAL_SERVER}
      {...props}
      _style={extendStyle(TRADITIONAL_SERVER, props)}
    />
  )
}
