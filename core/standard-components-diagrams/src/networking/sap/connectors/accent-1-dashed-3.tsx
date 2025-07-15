import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ACCENT_1_DASHED_3 = {
  _style:
    'endArrow=none;html=1;strokeColor=#07838F;bendable=1;rounded=0;endFill=0;endSize=4;edgeStyle=entityRelationEdgeStyle;startArrow=none;startFill=0;startSize=4;jumpStyle=none;jumpSize=0;targetPerimeterSpacing=15;dashed=1;strokeWidth=1.5;',
  _width: 120,
  _height: 0,
}

export function Accent1Dashed3(props: DiagramNodeProps) {
  return <Shape {...ACCENT_1_DASHED_3} {...props} />
}
