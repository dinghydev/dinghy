import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STARTAID = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.startaid;fillColor=#47B0E5;gradientColor=#2F7599',
  _width: 102.4,
  _height: 102.4,
}

export function Startaid(props: DiagramNodeProps) {
  return <Shape {...STARTAID} {...props} />
}
