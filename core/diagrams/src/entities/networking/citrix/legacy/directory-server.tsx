import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DIRECTORY_SERVER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.directory_server;',
  },
  _width: 65,
  _height: 88.5,
}

export function DirectoryServer(props: NodeProps) {
  return (
    <Shape
      {...DIRECTORY_SERVER}
      {...props}
      _style={extendStyle(DIRECTORY_SERVER, props)}
    />
  )
}
