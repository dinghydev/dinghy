import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DIRECTORY_SERVER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.directory_server;',
  },
  _original_width: 65,
  _original_height: 88.5,
}

export function DirectoryServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...DIRECTORY_SERVER}
      {...props}
      _style={extendStyle(DIRECTORY_SERVER, props)}
    />
  )
}
