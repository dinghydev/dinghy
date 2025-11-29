import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VERTICAL_LANE_3 = {
  _style: {
    entity:
      'shape=mxgraph.bpmn.swimlane;html=1;startSize=20;horizontal=1;swimlaneLine=1;collapsible=0;fontStyle=0;strokeWidth=2;swimlaneFillColor=#ffffff;isCollection=1;whiteSpace=wrap;',
  },
  _width: 220,
  _height: 100,
}

export function VerticalLane3(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, VERTICAL_LANE_3)} />
}
