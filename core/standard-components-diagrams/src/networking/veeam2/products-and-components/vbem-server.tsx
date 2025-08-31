import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VBEM_SERVER = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.vbem_server;',
  },
  _width: 40,
  _height: 52,
}

export function VbemServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...VBEM_SERVER}
      {...props}
      _style={extendStyle(VBEM_SERVER, props)}
    />
  )
}
