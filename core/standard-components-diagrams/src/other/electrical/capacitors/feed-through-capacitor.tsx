import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FEED_THROUGH_CAPACITOR = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.capacitors.feed_through_capacitor;',
  },
  _width: 100,
  _height: 90,
}

export function FeedThroughCapacitor(props: DiagramNodeProps) {
  return (
    <Shape
      {...FEED_THROUGH_CAPACITOR}
      {...props}
      _style={extendStyle(FEED_THROUGH_CAPACITOR, props)}
    />
  )
}
