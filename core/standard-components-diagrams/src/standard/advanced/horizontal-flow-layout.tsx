import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const HORIZONTAL_FLOW_LAYOUT = {
  _style: {
    entity:
      'swimlane;html=1;startSize=20;horizontal=0;childLayout=flowLayout;flowOrientation=west;resizable=0;interRankCellSpacing=50;containerType=tree;fontSize=12;',
  },
  _original_width: 0,
  _original_height: 150,
}

export function HorizontalFlowLayout(props: DiagramNodeProps) {
  return (
    <Shape
      {...HORIZONTAL_FLOW_LAYOUT}
      {...props}
      _style={extendStyle(HORIZONTAL_FLOW_LAYOUT, props)}
    />
  )
}
