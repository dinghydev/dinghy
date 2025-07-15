import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const RSS = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.rss;fillColor=#F56800;strokeColor=none',
  _width: 81.60000000000001,
  _height: 81.60000000000001,
}

export function Rss(props: DiagramNodeProps) {
  return <Shape {...RSS} {...props} />
}
