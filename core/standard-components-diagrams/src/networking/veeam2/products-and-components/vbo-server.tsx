import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VBO_SERVER = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.vbo_server;',
  _width: 40,
  _height: 52,
}

export function VboServer(props: DiagramNodeProps) {
  return (
    <Shape {...VBO_SERVER} {...props} _style={extendStyle(VBO_SERVER, props)} />
  )
}
