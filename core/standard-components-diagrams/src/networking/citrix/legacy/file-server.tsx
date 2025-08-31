import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FILE_SERVER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.file_server;',
  },
  _width: 71,
  _height: 97,
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
