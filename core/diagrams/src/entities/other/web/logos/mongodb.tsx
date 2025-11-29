import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MONGODB = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.mongodb',
  },
  _width: 41.2,
  _height: 86.2,
}

export function Mongodb(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MONGODB)} />
}
