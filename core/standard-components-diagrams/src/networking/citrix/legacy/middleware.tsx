import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MIDDLEWARE = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.middleware;',
  _width: 114,
  _height: 68,
}

export function Middleware(props: DiagramNodeProps) {
  return <Shape {...MIDDLEWARE} {...props} />
}
