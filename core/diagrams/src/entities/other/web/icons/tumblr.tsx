import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TUMBLR = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.tumblr;fillColor=#588BBC;gradientColor=#172330',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function Tumblr(props: NodeProps) {
  return <Shape {...TUMBLR} {...props} _style={extendStyle(TUMBLR, props)} />
}
