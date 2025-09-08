import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const WORDPRESS = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.wordpress;fillColor=#00A7DA;strokeColor=none',
  },
  _original_width: 66.60000000000001,
  _original_height: 65.4,
}

export function Wordpress(props: DiagramNodeProps) {
  return (
    <Shape {...WORDPRESS} {...props} _style={extendStyle(WORDPRESS, props)} />
  )
}
