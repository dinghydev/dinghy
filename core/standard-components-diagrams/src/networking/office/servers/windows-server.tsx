import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WINDOWS_SERVER = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.windows_server;',
  },
  _original_width: 52,
  _original_height: 55,
}

export function WindowsServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...WINDOWS_SERVER}
      {...props}
      _style={extendStyle(WINDOWS_SERVER, props)}
    />
  )
}
