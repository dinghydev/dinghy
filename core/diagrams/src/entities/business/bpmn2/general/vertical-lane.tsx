import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VERTICAL_LANE = {
  _style: {
    entity:
      'swimlane;html=1;startSize=20;fontStyle=0;collapsible=0;horizontal=1;swimlaneLine=0;fillColor=none;whiteSpace=wrap;',
  },
  _width: 440,
  _height: 100,
}

export function VerticalLane(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, VERTICAL_LANE)} />
}
