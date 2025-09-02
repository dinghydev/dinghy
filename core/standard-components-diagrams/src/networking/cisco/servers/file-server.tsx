import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FILE_SERVER = {
  _style: {
    entity:
      'shape=mxgraph.cisco.servers.file_server;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 43,
  _original_height: 58,
}

export function FileServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...FILE_SERVER}
      {...props}
      _style={extendStyle(FILE_SERVER, props)}
    />
  )
}
