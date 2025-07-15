import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BLOGGER = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.blogger;fillColor=#FDE47C;gradientColor=#F55F21',
  _width: 102.4,
  _height: 102.4,
}

export function Blogger(props: DiagramNodeProps) {
  return <Shape {...BLOGGER} {...props} />
}
