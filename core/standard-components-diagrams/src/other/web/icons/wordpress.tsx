import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const WORDPRESS = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.wordpress;fillColor=#35E2EE;gradientColor=#0E4D99',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function Wordpress(props: DiagramNodeProps) {
  return (
    <Shape {...WORDPRESS} {...props} _style={extendStyle(WORDPRESS, props)} />
  )
}
