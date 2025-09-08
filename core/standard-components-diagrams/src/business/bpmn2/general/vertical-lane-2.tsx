import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VERTICAL_LANE_2 = {
  _style: {
    entity:
      'swimlane;html=1;startSize=20;fontStyle=0;collapsible=0;horizontal=1;swimlaneLine=1;strokeWidth=2;swimlaneFillColor=#ffffff;whiteSpace=wrap;',
  },
  _original_width: 220,
  _original_height: 100,
}

export function VerticalLane2(props: DiagramNodeProps) {
  return (
    <Shape
      {...VERTICAL_LANE_2}
      {...props}
      _style={extendStyle(VERTICAL_LANE_2, props)}
    />
  )
}
