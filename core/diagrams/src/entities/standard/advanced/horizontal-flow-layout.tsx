import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HORIZONTAL_FLOW_LAYOUT = {
  _style: {
    entity:
      'swimlane;html=1;startSize=20;horizontal=0;childLayout=flowLayout;flowOrientation=west;resizable=0;interRankCellSpacing=50;containerType=tree;fontSize=12;',
  },
  _width: 0,
  _height: 150,
}

export function HorizontalFlowLayout(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, HORIZONTAL_FLOW_LAYOUT)} />
  )
}
