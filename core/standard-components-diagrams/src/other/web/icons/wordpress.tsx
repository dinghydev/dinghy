import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WORDPRESS = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.wordpress;fillColor=#35E2EE;gradientColor=#0E4D99',
  _width: 102.4,
  _height: 102.4,
}

export function Wordpress(props: DiagramNodeProps) {
  return (
    <Shape {...WORDPRESS} {...props} _style={extendStyle(WORDPRESS, props)} />
  )
}
