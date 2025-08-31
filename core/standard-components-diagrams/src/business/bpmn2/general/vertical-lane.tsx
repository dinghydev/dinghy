import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VERTICAL_LANE = {
  _style: {
    entity:
      'swimlane;html=1;startSize=20;fontStyle=0;collapsible=0;horizontal=1;swimlaneLine=0;fillColor=none;whiteSpace=wrap;',
  },
  _width: 440,
  _height: 100,
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
