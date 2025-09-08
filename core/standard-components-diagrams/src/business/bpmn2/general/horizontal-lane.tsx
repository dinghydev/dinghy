import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const HORIZONTAL_LANE = {
  _style: {
    entity:
      'swimlane;html=1;startSize=20;fontStyle=0;collapsible=0;horizontal=0;swimlaneLine=0;fillColor=none;whiteSpace=wrap;',
  },
  _original_width: 440,
  _original_height: 100,
}

export function HorizontalLane(props: DiagramNodeProps) {
  return (
    <Shape
      {...HORIZONTAL_LANE}
      {...props}
      _style={extendStyle(HORIZONTAL_LANE, props)}
    />
  )
}
