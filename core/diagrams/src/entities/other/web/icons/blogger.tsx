import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BLOGGER = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.blogger;fillColor=#FDE47C;gradientColor=#F55F21',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function Blogger(props: NodeProps) {
  return <Shape {...BLOGGER} {...props} _style={extendStyle(BLOGGER, props)} />
}
