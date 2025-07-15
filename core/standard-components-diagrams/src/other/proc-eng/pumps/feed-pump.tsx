import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FEED_PUMP = {
  _style:
    'shape=mxgraph.pid.pumps.feed_pump;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 100,
  _height: 40,
}

export function FeedPump(props: DiagramNodeProps) {
  return <Shape {...FEED_PUMP} {...props} />
}
