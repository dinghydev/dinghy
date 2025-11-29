import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TWITTER = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.twitter;fillColor=#1DA1F2;strokeColor=none',
  },
  _original_width: 80,
  _original_height: 70,
}

export function Twitter(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TWITTER)} />
}
