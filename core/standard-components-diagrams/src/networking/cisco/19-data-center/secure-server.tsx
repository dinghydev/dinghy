import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SECURE_SERVER = {
  _style: {
    entity:
      'sketch=0;points=[[0.015,0.015,0],[0.985,0.015,0],[0.985,0.985,0],[0.015,0.985,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0.25,0],[1,0.5,0],[1,0.75,0],[0.75,1,0],[0.5,1,0],[0.25,1,0],[0,0.75,0],[0,0.5,0],[0,0.25,0]];verticalLabelPosition=bottom;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.secure_server;fillColor=#005073;strokeColor=none;',
  },
  _original_width: 27.500000000000004,
  _original_height: 50,
}

export function SecureServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...SECURE_SERVER}
      {...props}
      _style={extendStyle(SECURE_SERVER, props)}
    />
  )
}
