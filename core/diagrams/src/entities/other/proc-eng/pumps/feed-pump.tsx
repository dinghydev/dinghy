import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FEED_PUMP = {
  _style: {
    entity:
      'shape=mxgraph.pid.pumps.feed_pump;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 100,
  _height: 40,
}

export function FeedPump(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, FEED_PUMP)} />
}
