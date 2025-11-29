import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MIDDLEWARE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.middleware;',
  },
  _width: 114,
  _height: 68,
}

export function Middleware(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MIDDLEWARE)} />
}
