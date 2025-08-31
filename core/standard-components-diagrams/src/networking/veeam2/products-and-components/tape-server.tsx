import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TAPE_SERVER = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.tape_server;',
  _width: 40,
  _height: 52,
}

export function TapeServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...TAPE_SERVER}
      {...props}
      _style={extendStyle(TAPE_SERVER, props)}
    />
  )
}
