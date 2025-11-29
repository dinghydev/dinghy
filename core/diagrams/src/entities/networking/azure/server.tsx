import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SERVER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.server;',
  },
  _width: 50,
  _height: 15,
}

export function Server(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SERVER)} />
}
