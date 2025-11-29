import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FEED_THROUGH_CAPACITOR = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.capacitors.feed_through_capacitor;',
  },
  _original_width: 100,
  _original_height: 90,
}

export function FeedThroughCapacitor(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, FEED_THROUGH_CAPACITOR)} />
  )
}
