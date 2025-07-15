import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EDMODO = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.edmodo;fillColor=#2F81CE;gradientColor=#1F5487',
  _width: 102.4,
  _height: 102.4,
}

export function Edmodo(props: DiagramNodeProps) {
  return <Shape {...EDMODO} {...props} />
}
