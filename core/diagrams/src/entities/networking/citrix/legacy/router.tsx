import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ROUTER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.router;',
  },
  _width: 55,
  _height: 36.5,
}

export function Router(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ROUTER)} />
}
