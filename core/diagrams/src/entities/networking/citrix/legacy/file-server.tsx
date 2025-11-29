import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FILE_SERVER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.file_server;',
  },
  _width: 71,
  _height: 97,
}

export function FileServer(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, FILE_SERVER)} />
}
