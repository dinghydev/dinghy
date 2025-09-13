import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const HORIZONTAL_LANE_2 = {
  _style: {
    entity:
      'swimlane;html=1;startSize=20;fontStyle=0;collapsible=0;horizontal=0;swimlaneLine=1;swimlaneFillColor=#ffffff;strokeWidth=2;whiteSpace=wrap;',
  },
  _width: 440,
  _height: 100,
}

export function HorizontalLane2(props: DiagramNodeProps) {
  return (
    <Shape
      {...HORIZONTAL_LANE_2}
      {...props}
      _style={extendStyle(HORIZONTAL_LANE_2, props)}
    />
  )
}
