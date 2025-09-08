import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VERTICAL_FLOW_LAYOUT = {
  _style: {
    entity:
      'swimlane;startSize=20;horizontal=1;childLayout=flowLayout;flowOrientation=north;resizable=0;interRankCellSpacing=50;containerType=tree;fontSize=12;',
  },
  _original_width: 0,
  _original_height: 280,
}

export function VerticalFlowLayout(props: DiagramNodeProps) {
  return (
    <Shape
      {...VERTICAL_FLOW_LAYOUT}
      {...props}
      _style={extendStyle(VERTICAL_FLOW_LAYOUT, props)}
    />
  )
}
