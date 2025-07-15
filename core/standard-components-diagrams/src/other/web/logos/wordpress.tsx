import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WORDPRESS = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.wordpress;fillColor=#00A7DA;strokeColor=none',
  _width: 66.60000000000001,
  _height: 65.4,
}

export function Wordpress(props: DiagramNodeProps) {
  return <Shape {...WORDPRESS} {...props} />
}
