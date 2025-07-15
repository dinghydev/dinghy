import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VERTICAL_FLOW_LAYOUT = {
  _style:
    'swimlane;startSize=20;horizontal=1;childLayout=flowLayout;flowOrientation=north;resizable=0;interRankCellSpacing=50;containerType=tree;fontSize=12;',
  _width: 0,
  _height: 280,
}

export function VerticalFlowLayout(props: DiagramNodeProps) {
  return <Shape {...VERTICAL_FLOW_LAYOUT} {...props} />
}
