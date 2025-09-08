import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ROUTER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.router;',
  },
  _original_width: 55,
  _original_height: 36.5,
}

export function Router(props: DiagramNodeProps) {
  return <Shape {...ROUTER} {...props} _style={extendStyle(ROUTER, props)} />
}
