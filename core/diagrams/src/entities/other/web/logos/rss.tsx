import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RSS = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.rss;fillColor=#F56800;strokeColor=none',
  },
  _original_width: 81.60000000000001,
  _original_height: 81.60000000000001,
}

export function Rss(props: DiagramNodeProps) {
  return <Shape {...RSS} {...props} _style={extendStyle(RSS, props)} />
}
