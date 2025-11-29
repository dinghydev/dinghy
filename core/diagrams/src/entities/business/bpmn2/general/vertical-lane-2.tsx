import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VERTICAL_LANE_2 = {
  _style: {
    entity:
      'swimlane;html=1;startSize=20;fontStyle=0;collapsible=0;horizontal=1;swimlaneLine=1;strokeWidth=2;swimlaneFillColor=#ffffff;whiteSpace=wrap;',
  },
  _width: 220,
  _height: 100,
}

export function VerticalLane2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, VERTICAL_LANE_2)} />
}
