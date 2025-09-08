import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VERTICAL_LANE = {
  _style: {
    entity:
      'swimlane;html=1;startSize=20;fontStyle=0;collapsible=0;horizontal=1;swimlaneLine=0;fillColor=none;whiteSpace=wrap;',
  },
  _original_width: 440,
  _original_height: 100,
}

export function VerticalLane(props: DiagramNodeProps) {
  return (
    <Shape
      {...VERTICAL_LANE}
      {...props}
      _style={extendStyle(VERTICAL_LANE, props)}
    />
  )
}
