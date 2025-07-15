import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ERROR_DASHED_2 = {
  _style:
    'endArrow=blockThin;html=1;strokeColor=#d20a0a;bendable=1;rounded=0;endFill=1;endSize=4;edgeStyle=entityRelationEdgeStyle;startArrow=blockThin;startFill=1;startSize=4;jumpStyle=none;jumpSize=0;targetPerimeterSpacing=15;dashed=1;strokeWidth=1.5;',
  _width: 120,
  _height: 0,
}

export function ErrorDashed2(props: DiagramNodeProps) {
  return <Shape {...ERROR_DASHED_2} {...props} />
}
