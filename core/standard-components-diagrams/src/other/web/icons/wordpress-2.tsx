import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WORDPRESS_2 = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.wordpress_2;fillColor=#35E2EE;gradientColor=#0E4D99',
  },
  _original_width: 102.4,
  _original_height: 102.4,
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
