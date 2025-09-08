import { Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const EVENT_TIME_BASED = {
  _color: { color: '#E7157B', fill: true },
  _border: 1,
  _shape: 'mxgraph.aws4.event_time_based',
}

export function EventTimeBased(props: DiagramNodeProps) {
  return <Shape {...EVENT_TIME_BASED} {...props} />
}
