import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EDMODO = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.edmodo;fillColor=#276CB0;strokeColor=none',
  _width: 69.2,
  _height: 73.8,
}

export function Edmodo(props: DiagramNodeProps) {
  return <Shape {...EDMODO} {...props} />
}
