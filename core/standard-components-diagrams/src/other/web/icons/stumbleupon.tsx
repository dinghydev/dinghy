import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STUMBLEUPON = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.stumbleupon;fillColor=#FA823C;gradientColor=#E12110',
  _width: 102.4,
  _height: 102.4,
}

export function Stumbleupon(props: DiagramNodeProps) {
  return <Shape {...STUMBLEUPON} {...props} />
}
