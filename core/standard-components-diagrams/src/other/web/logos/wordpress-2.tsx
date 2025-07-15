import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WORDPRESS_2 = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.wordpress_2;fillColor=#00A7DA;strokeColor=none',
  _width: 68.8,
  _height: 68.8,
}

export function Wordpress2(props: DiagramNodeProps) {
  return <Shape {...WORDPRESS_2} {...props} />
}
