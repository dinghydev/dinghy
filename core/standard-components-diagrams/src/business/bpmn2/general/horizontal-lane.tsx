import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HORIZONTAL_LANE = {
  _style:
    'swimlane;html=1;startSize=20;fontStyle=0;collapsible=0;horizontal=0;swimlaneLine=0;fillColor=none;whiteSpace=wrap;',
  _width: 440,
  _height: 100,
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
