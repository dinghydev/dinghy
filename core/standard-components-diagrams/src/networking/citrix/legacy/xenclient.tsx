import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const XENCLIENT = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.xenclient;',
  _width: 91,
  _height: 77,
}

export function Xenclient(props: DiagramNodeProps) {
  return <Shape {...XENCLIENT} {...props} />
}
