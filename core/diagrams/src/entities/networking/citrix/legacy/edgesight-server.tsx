import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const EDGESIGHT_SERVER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.edgesight_server;',
  },
  _original_width: 76.5,
  _original_height: 90,
}

export function EdgesightServer(props: NodeProps) {
  return (
    <Shape
      {...EDGESIGHT_SERVER}
      {...props}
      _style={extendStyle(EDGESIGHT_SERVER, props)}
    />
  )
}
