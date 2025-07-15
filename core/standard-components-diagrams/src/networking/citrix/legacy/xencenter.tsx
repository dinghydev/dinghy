import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const XENCENTER = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.xencenter;',
  _width: 76,
  _height: 89,
}

export function Xencenter(props: DiagramNodeProps) {
  return <Shape {...XENCENTER} {...props} />
}
