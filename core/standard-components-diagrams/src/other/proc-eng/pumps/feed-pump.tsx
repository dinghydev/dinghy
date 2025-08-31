import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FEED_PUMP = {
  _style: {
    entity:
      'shape=mxgraph.pid.pumps.feed_pump;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 100,
  _height: 40,
}

export function FeedPump(props: DiagramNodeProps) {
  return (
    <Shape {...FEED_PUMP} {...props} _style={extendStyle(FEED_PUMP, props)} />
  )
}
