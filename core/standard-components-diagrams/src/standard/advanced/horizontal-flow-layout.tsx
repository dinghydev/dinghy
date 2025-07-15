import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const HORIZONTAL_FLOW_LAYOUT = {
  _style:
    'swimlane;html=1;startSize=20;horizontal=0;childLayout=flowLayout;flowOrientation=west;resizable=0;interRankCellSpacing=50;containerType=tree;fontSize=12;',
  _width: 0,
  _height: 150,
}

export function HorizontalFlowLayout(props: DiagramNodeProps) {
  return <Shape {...HORIZONTAL_FLOW_LAYOUT} {...props} />
}
