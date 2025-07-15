import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PLURK = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.plurk;fillColor=#FF5656;gradientColor=#A8312D',
  _width: 102.4,
  _height: 102.4,
}

export function Plurk(props: DiagramNodeProps) {
  return <Shape {...PLURK} {...props} />
}
