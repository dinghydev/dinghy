import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ROUTER = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.router;',
  _width: 55,
  _height: 36.5,
}

export function Router(props: DiagramNodeProps) {
  return <Shape {...ROUTER} {...props} />
}
