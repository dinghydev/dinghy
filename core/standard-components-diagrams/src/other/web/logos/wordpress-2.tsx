import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WORDPRESS_2 = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.wordpress_2;fillColor=#00A7DA;strokeColor=none',
  },
  _original_width: 68.8,
  _original_height: 68.8,
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
