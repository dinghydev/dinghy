import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WORDPRESS_2 = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.wordpress_2;fillColor=#00A7DA;strokeColor=none',
  _width: 60,
  _height: 60,
}

export function Wordpress2(props: DiagramNodeProps) {
  return (
    <Shape
      {...WORDPRESS_2}
      {...props}
      _style={extendStyle(WORDPRESS_2, props)}
    />
  )
}
