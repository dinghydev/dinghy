import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HORIZONTAL_LANE_3 = {
  _style: {
    entity:
      'shape=mxgraph.bpmn.swimlane;html=1;startSize=20;horizontal=0;swimlaneLine=1;collapsible=0;fontStyle=0;swimlaneFillColor=#ffffff;strokeWidth=2;isCollection=1;whiteSpace=wrap;',
  },
  _width: 440,
  _height: 100,
}

export function HorizontalLane3(props: NodeProps) {
  return (
    <Shape
      {...HORIZONTAL_LANE_3}
      {...props}
      _style={extendStyle(HORIZONTAL_LANE_3, props)}
    />
  )
}
