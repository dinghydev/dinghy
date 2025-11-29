import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FEED = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.feed;fillColor=#000000',
  },
  _original_width: 60.400000000000006,
  _original_height: 59.2,
}

export function Feed(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, FEED)} />
}
